import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addofficer',
  templateUrl: './addofficer.component.html',
  styleUrls: ['./addofficer.component.css']
})
export class AddofficerComponent implements OnInit {

  submit() {
    alert("Add complete")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
