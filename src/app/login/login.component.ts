import { Router, Routes } from '@angular/router';
import { TeacherComponent } from './../teacher/teacher.component';
import { StudentComponent } from './../student/student.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { student } from '../../models/student';
import { teacher } from './../../models/teacher';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm1: FormGroup;
  constructor(public router: Router) {
    this.loginForm1 = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }

  user = null;
  pass = null;
  name: any = '';
  first: any;
  last: any;

  data01: student[] = [
    {
      stuId: "STD001",
      stuPass: "PSTD001",
      stuNameSurname: "John Farmer",
      stuAddress: "KKU",
      stuAge: 22,
      stuPak: "Faculty of Agriculture",
      stuSaka: "Weed all day",
      subL: "Smoke weed"
    },
    {
      stuId: "STD002",
      stuPass: "PSTD002",
      stuNameSurname: "Peter Smoke",
      stuAddress: "KKU",
      stuAge: 21,
      stuPak: "Faculty of Cooking",
      stuSaka: "Pasta",
      subL: "Smoke weed"
    },
    {
      stuId: "STD003",
      stuPass: "PSTD003",
      stuNameSurname: "Harman Kardon",
      stuAddress: "KKU",
      stuAge: 20,
      stuPak: "Faculty of Speaker",
      stuSaka: "Bass interment",
      subL: "Bass basic"
    },
    {
      stuId: "STD004",
      stuPass: "PSTD004",
      stuNameSurname: "Sasan Xioapoa",
      stuAddress: "MSU",
      stuAge: 25,
      stuPak: "Faculty of China",
      stuSaka: "China town",
      subL: "China number one"
    },
    {
      stuId: "STD005",
      stuPass: "PSTD005",
      stuNameSurname: "Samkung Kanari",
      stuAddress: "MSU",
      stuAge: 26,
      stuPak: "Faculty of Toyodrip",
      stuSaka: "Bus V16",
      subL: "Bus work"
    }
  ]

  data02: teacher[] = [
    {
      teaId: "T001",
      teaPass: "P001",
      teaNameSurname: "Aekkapoom Tobterb",
      teaAddress: "Mahasarakham",
      teaAge: 22,
      teaPak: "Information Technology",
      teaSaka: "IT",
      teaL: "English for Career Preparation",
    },
    {
      teaId: "T002",
      teaPass: "P002",
      teaNameSurname: "Nongnapat Sakonvit",
      teaAddress: "Mukdahan",
      teaAge: 25,
      teaPak: "Accounting",
      teaSaka: "AC",
      teaL: "Listening and Speaking English for Daily-Life Communication",
    },
    {
      teaId: "T003",
      teaPass: "P003",
      teaNameSurname: "Wisut Noreerat",
      teaAddress: "Khonaen",
      teaAge: 21,
      teaPak: "Political",
      teaSaka: "PA",
      teaL: "Mathematics for Science 1",
    },
    {
      teaId: "T004",
      teaPass: "P004",
      teaNameSurname: "Rachata Lakronsri",
      teaAddress: "Mahasarakham",
      teaAge: 27,
      teaPak: "Information Technology",
      teaSaka: "CS",
      teaL: "Mathematics for Science 2",
    },
    {
      teaId: "T005",
      teaPass: "P005",
      teaNameSurname: "Thitisak Wichachai",
      teaAddress: "Mahasarakham",
      teaAge: 23,
      teaPak: "Accounting",
      teaSaka: "GM",
      teaL: "English for Self-Access Learning",
    },
    {
      teaId: "T006",
      teaPass: "P006",
      teaNameSurname: "Staporn Longthon",
      teaAddress: "Sakon Nakhon",
      teaAge: 29,
      teaPak: "Agriculture",
      teaSaka: "AC",
      teaL: "Seminar on Research Methodology of Humanities and Social Sciences",
    },
    {
      teaId: "T007",
      teaPass: "P007",
      teaNameSurname: "Kitti Jitvigran",
      teaAddress: "Mahasarakham",
      teaAge: 35,
      teaPak: "Information Technology",
      teaSaka: "MC",
      teaL: "Computer Programming",
    },
    {
      teaId: "T008",
      teaPass: "P008",
      teaNameSurname: "Supakorn Jaikhan",
      teaAddress: "Chaiyaphum",
      teaAge: 35,
      teaPak: "Information Technology",
      teaSaka: "GIS",
      teaL: "Engineering Materials",
    },
    {
      teaId: "T009",
      teaPass: "P009",
      teaNameSurname: "Aphiwat Mingchai",
      teaAddress: "Nongbualamphu",
      teaAge: 39,
      teaPak: "Information Technology",
      teaSaka: "CMD",
      teaL: "Nursing Process and Health Assessment",
    },
    {
      teaId: "T010",
      teaPass: "P010",
      teaNameSurname: "Athirat Ritthising",
      teaAddress: "Buengkan",
      teaAge: 35,
      teaPak: "Information Technology",
      teaSaka: "IT",
      teaL: "Health and Environmental Health",
    },
  ]
  test() {
    console.log(this.name);
    console.log(this.user);
    console.log(this.pass);
  }

  onSubmit(a: NgForm) {
    // console.log(a.value.first);
    // console.log(a.value.last);

    let id = a.value.first
    let pass = a.value.last
    console.log(id);
    console.log(pass);
    let checkStudent = this.data01.find(it => it.stuId == id && it.stuPass == pass);
    let checkTeacher = this.data02.find(it => it.teaId == id && it.teaPass == pass);
    // (checkStudent || checkTeacher)

    if (checkStudent || checkTeacher) {
      alert("welcome")
      this.router.navigate(['/home']);
    } else {
      alert("not")

    }


  }

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


