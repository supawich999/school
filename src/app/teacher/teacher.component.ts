import { teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  data01: teacher[] = [
    {
      teaId: "T001",
      teaPass: "P001",
      teaNameSurname: "Aekkapoom Tobterb",
      teaAddress: "Mahasarakham",
      teaAge: 22,
      teaPak: "Information Technology",
      teaSaka: "IT",
      teaL: "SA01",
    },
    {
      teaId: "T002",
      teaPass: "P002",
      teaNameSurname: "Nongnapat Sakonvit",
      teaAddress: "Mukdahan",
      teaAge: 25,
      teaPak: "Accounting",
      teaSaka: "AC",
      teaL: "SA02",
    },
    {
      teaId: "T003",
      teaPass: "P003",
      teaNameSurname: "Wisut Noreerat",
      teaAddress: "Khonaen",
      teaAge: 21,
      teaPak: "Political",
      teaSaka: "PA",
      teaL: "SC03",
    },
    {
      teaId: "T004",
      teaPass: "P004",
      teaNameSurname: "Rachata Lakronsri",
      teaAddress: "Mahasarakham",
      teaAge: 27,
      teaPak: "Information Technology",
      teaSaka: "CS",
      teaL: "SD04",
    },
    {
      teaId: "T005",
      teaPass: "P005",
      teaNameSurname: "Thitisak Wichachai",
      teaAddress: "Mahasarakham",
      teaAge: 23,
      teaPak: "Accounting",
      teaSaka: "GM",
      teaL: "SE05",
    },
    {
      teaId: "T006",
      teaPass: "P006",
      teaNameSurname: "Staporn Longthon",
      teaAddress: "Sakon Nakhon",
      teaAge: 29,
      teaPak: "Agriculture",
      teaSaka: "AC",
      teaL: "SF06",
    },
    {
      teaId: "T007",
      teaPass: "P007",
      teaNameSurname: "Kitti Jitvigran",
      teaAddress: "Mahasarakham",
      teaAge: 35,
      teaPak: "Information Technology",
      teaSaka: "MC",
      teaL: "SG07",
    },
    {
      teaId: "T008",
      teaPass: "P008",
      teaNameSurname: "Supakorn Jaikhan",
      teaAddress: "Chaiyaphum",
      teaAge: 35,
      teaPak: "Information Technology",
      teaSaka: "GIS",
      teaL: "SH08",
    },
    {
      teaId: "T009",
      teaPass: "P009",
      teaNameSurname: "Aphiwat Mingchai",
      teaAddress: "Nongbualamphu",
      teaAge: 39,
      teaPak: "Information Technology",
      teaSaka: "CMD",
      teaL: "SI09",
    },
    {
      teaId: "T010",
      teaPass: "P010",
      teaNameSurname: "Athirat Ritthising",
      teaAddress: "Buengkan",
      teaAge: 35,
      teaPak: "Information Technology",
      teaSaka: "IT",
      teaL: "SJ10",
    },
  ]

  public isCollapsed = true;


  constructor() { }

  ngOnInit(): void {
    function myFunction() {
    }
  }

}
export class NgbdDropdownForm {
}
