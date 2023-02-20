import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { students } from '../navbar/export_arr';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  user:{ id: string; name: string; }|any;
  students = students;
  // students =[
  //   {
  //     id:1,
  //     firstname:'Rajesh',
  //     lastname:'Kumar',
  //     email:'rajesh@kumar.com'
  //   },
  //   {
  //     id:2,
  //     firstname:'Ramu',
  //     lastname:'Kumar',
  //     email:'ramu@kumar.com'
  //   },
  //   {
  //     id:3,
  //     firstname:'Ravi',
  //     lastname:'Kumar',
  //     email:'ravi@kumar.com'
  //   },
  //   {
  //     id:4,
  //     firstname:'Raj',
  //     lastname:'Kumar',
  //     email:'raj@kumar.com'
  //   }
  // ]
   constructor(private route:ActivatedRoute){}
   ngOnInit(){
    this.user ={
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['firstname']
    };
    this.route.params.subscribe((data:Params)=>{
      this.user ={
        id:data['id'],
        name:data['firstname']
      }
    })

   }

}
