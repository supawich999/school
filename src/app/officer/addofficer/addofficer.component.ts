import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-addofficer',
  templateUrl: './addofficer.component.html',
  styleUrls: ['./addofficer.component.css']
})
export class AddofficerComponent implements OnInit {

  profileForm = this.fb.group({
    nameSurname: ['', Validators.required],
    authenForm: this.fb.group({
      idOfficer: ['', Validators.required],
      passOfficer: ['', Validators.required],
    }),
    dataForm: this.fb.group({
      address: [''],
      rank: [''],
      department: ['']
    })
  });

  submit() {
    alert("Add complete")
    console.warn(this.profileForm.value);
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
