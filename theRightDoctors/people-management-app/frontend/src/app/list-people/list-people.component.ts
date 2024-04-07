import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  people: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPeople();
  }

  fetchPeople() {
    this.http.get<any[]>('http://localhost:4200/api/people/')
      .subscribe(
        (response) => {
          this.people = response;
        },
        (error) => {
          console.error('Error fetching people:', error);
        }
      );
  }
}

