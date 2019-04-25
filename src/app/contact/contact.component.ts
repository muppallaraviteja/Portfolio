import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data: any = [];
  constructor( private http: HttpClient) { }

  ngOnInit() {
  }

  save(name, email, subject, message): void {
    this.data['name'] = name;
    this.data["email"] = email;
    this.data["subject"] = subject;
    this.data["message"] = message;
    console.log(this.data);
    this.http.put<any>('http://localhost/api/v1/update/', this.data).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occurred.');
        }
      });
  }

}
