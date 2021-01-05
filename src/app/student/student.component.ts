import { Component, OnInit } from '@angular/core';
import { student } from '../../models/student';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  closeResult = '';

  

  deletealert(){
    alert("ลบแล้วแต่ไม่ออก")
    
  }

  data01: student[] = [
    {
      stuId: "STD001",
      stuPass: "PSTD001",
      stuNameSurname: "John Farmer",
      stuAddress: "KKU",
      stuAge: 22,
      stuPak: "Faculty of Agriculture",
      stuSaka: "Weed all day",
      subL:"Smoke weed"
    },
    {
      stuId: "STD002",
      stuPass: "PSTD002",
      stuNameSurname: "Peter Smoke",
      stuAddress: "KKU",
      stuAge: 21,
      stuPak: "Faculty of Cooking",
      stuSaka: "Pasta",
      subL:"Smoke weed"
    },
    {
      stuId: "STD003",
      stuPass: "PSTD003",
      stuNameSurname: "Harman Kardon",
      stuAddress: "KKU",
      stuAge: 20,
      stuPak: "Faculty of Speaker",
      stuSaka: "Bass interment",
      subL:"Bass basic"
    },
    {
      stuId: "STD004",
      stuPass: "PSTD004",
      stuNameSurname: "Sasan Xioapoa",
      stuAddress: "MSU",
      stuAge: 25,
      stuPak: "Faculty of China",
      stuSaka: "China town",
      subL:"China number one"
    },
    {
      stuId: "STD005",
      stuPass: "PSTD005",
      stuNameSurname: "Samkung Kanari",
      stuAddress: "MSU",
      stuAge: 26,
      stuPak: "Faculty of Toyodrip",
      stuSaka: "Bus V16",
      subL:"Bus work"
    }
  ]

  constructor(private modalService: NgbModal) {}
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    console.log(this.data01);
  }

}
