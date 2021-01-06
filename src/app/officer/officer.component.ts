import { Component, OnInit } from '@angular/core';
import { officer } from '../../models/officer';

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

  deletealert(){
    alert("Delete complete")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
