import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  personId!: string;
  person: any = {};
  isEditMode: boolean = true;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        // Editing an existing person
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

  submitForm() {
    if (this.personId) {
      // Editing an existing person
      this.updatePerson();
    } else {
      // Creating a new person
      this.createPerson();
    }
  }

  createPerson() {
    this.http.post<any>('http://localhost:4200/api/people', this.person)
      .subscribe(
        (response) => {
          console.log('New person created:', response);
          this.router.navigate(['/list']); // Redirect to list page after creation
        },
        (error) => {
          console.error('Error creating person:', error);
        }
      );
  }

  updatePerson() {
    this.http.put<any>('http://localhost:4200/api/people/' + this.personId, this.person)
      .subscribe(
        (response) => {
          console.log('Person updated:', response);
          this.router.navigate(['/list']); // Redirect to list page after update
        },
        (error) => {
          console.error('Error updating person:', error);
        }
      );
  }
}



