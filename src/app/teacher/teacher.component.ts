import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})

export class TeacherComponent implements OnInit {
  constructor(private modalService: NgbModal, public dialog: MatDialog) { }

  public isCollapsed = true;
  public teacherItem: teacher = {
    teaId: '',
    teaPass: '',
    teaNameSurname: '',
    teaAddress: '',
    teaAge: 0,
    teaPak: '',
    teaSaka: '',
    teaL: ''
  };


  data01: teacher[] = [
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

 

  closeResult = "";
  open(content: any, d: teacher) {
    this.teacherItem = d
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", size: "xl" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`; //Save
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;   //Close Dialog
        }

      );

<<<<<<< HEAD
=======
  }
  AddTeacher() {
    this.dialog.open(AddTeacherComponent);
>>>>>>> ecdd6aeb531ba8cbea97318511198edf44fbeaf5
  }

EditTeacher(){
   this.dialog.open(EditTeacherComponent);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

}


export class NgbdDropdownForm { }


