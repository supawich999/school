import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { student } from '../../models/student';
import { teacher } from './../../models/teacher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = null;
  pass = null;
  name: any = '';
  first: any;
  last: any;
  test() {
    console.log(this.name);
    console.log(this.user);
    console.log(this.pass);
  }

  onSubmit(a: NgForm) {
    console.log(a.value.first);
    console.log(a.value.last);

    if (NgForm){
      alert("login sucsess");
    }
    
  }

  constructor() { }


  checkstu(data01: student) {
    console.log(data01.stuId);
    console.log(data01.stuPass);
  }

  checktea(data01: teacher) {
    console.log(data01.teaId);
    console.log(data01.teaPass);
  }

  ngOnInit(): void {
  }

}


