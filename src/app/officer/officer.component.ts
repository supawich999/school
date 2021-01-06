import { Component, OnInit } from '@angular/core';
import { officer } from '../../models/officer';
import { MatDialog } from '@angular/material/dialog';
import { AddofficerComponent } from '../officer/addofficer/addofficer.component';
import { EditofficerComponent } from '../officer/editofficer/editofficer.component';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {

  data01: officer[] = [
    {
      offId: "OFF001",
      offPass: "POFF001",
      offNameSurname: "John Wick",
      offAddress: "MSK",
      offRank: "Manager",
      offDepartment: "MSK University"
    },
    {
      offId: "OFF002",
      offPass: "POFF002",
      offNameSurname: "Payuth mondayochar",
      offAddress: "MSK",
      offRank: "Manager",
      offDepartment: "MSK University"
    },
    {
      offId: "OFF003",
      offPass: "POFF003",
      offNameSurname: "Payuth tuesdayochar",
      offAddress: "MSK",
      offRank: "Manager",
      offDepartment: "MSK University"
    },
    {
      offId: "OFF004",
      offPass: "POFF004",
      offNameSurname: "Payuth wednesdayochar",
      offAddress: "MSK",
      offRank: "Manager",
      offDepartment: "MSK University"
    },
    {
      offId: "OFF005",
      offPass: "POFF005",
      offNameSurname: "Payuth thursdayochar",
      offAddress: "MSK",
      offRank: "Manager",
      offDepartment: "MSK University"
    }
  ]

  public isCollapsed = true;
  public officerdata: officer = {
    offId: "",
    offPass: "",
    offNameSurname: " ",
    offAddress: "",
    offRank: "",
    offDepartment: ""
  };

  deletealert() {
    alert("Delete complete")
  }

  closeResult = "";
  open(content: any, d: officer) {
    this.officerdata = d
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`; //Save
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;   //Close Dialog
        }
      );
  }

  addofficer() {
    this.dialog.open(AddofficerComponent);
  }
  editofficer() {
    this.dialog.open(EditofficerComponent);
  }

  constructor(public dialog: MatDialog,
    private modalService: NgbModal) { }

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
