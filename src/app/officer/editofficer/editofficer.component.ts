import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editofficer',
  templateUrl: './editofficer.component.html',
  styleUrls: ['./editofficer.component.css']
})
export class EditofficerComponent implements OnInit {

  submit() {
    alert("Edit complete")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
