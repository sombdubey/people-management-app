import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.css']
})
export class DeletePersonComponent implements OnInit {
  personId!: string;
  person: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        // Fetch person data for confirmation
        this.fetchPersonData(params['id']);
      }
    });
  }

  fetchPersonData(personId: string) {
    this.http.get<any>('http://localhost:4200/api/people/' + personId)
      .subscribe(
        (response) => {
          this.person = response;
        },
        (error) => {
          console.error('Error fetching person data:', error);
        }
      );
  }

  deletePerson() {
    this.http.delete<any>('http://localhost:4200/api/people/' + this.personId)
      .subscribe(
        (response) => {
          console.log('Person deleted:', response);
          this.router.navigate(['/list']); // Redirect to list page after deletion
        },
        (error) => {
          console.error('Error deleting person:', error);
        }
      );
  }
  cancel(){
    
  }
}

