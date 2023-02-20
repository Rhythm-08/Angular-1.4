import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  teachers =[
    {
      id:1,
      firstname:"Roma",
      lastname:"Lohore",
      email:"roma@lohore.com"
    },
    {
      id:2,
      firstname:"pundm",
      lastname:"Kumar",
      email:"pundm@gmail.com"
    },
    {
      id:3,
      firstname:"Tenghoia",
      lastname:"Ukalona",
      email:"tenghoia@ukalona.com"
    },
    {
      id:4,
      firstname:"Arjoo",
      lastname:"Kumari",
      email:"arjoo@kumari.com"
    }
  ]
}
