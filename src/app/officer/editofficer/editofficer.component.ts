import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-editofficer',
  templateUrl: './editofficer.component.html',
  styleUrls: ['./editofficer.component.css']
})
export class EditofficerComponent implements OnInit {

<<<<<<< HEAD
  submit() {
    alert("Edit complete")
  }

  constructor() { }
=======
  profileForm = this.fb.group({
    nameSurname: ['', Validators.required],
    authenForm: this.fb.group({
      idOfficer: ['', [Validators.required, Validators.minLength(4)]],
      passOfficer: ['', [Validators.required, Validators.minLength(6)]],
    }),
    dataForm: this.fb.group({
      address: [''],
      rank: [''],
      department: ['']
    })
  });

  submit() {
    alert("Edit complete")
    console.warn(this.profileForm.value);
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  constructor(private fb: FormBuilder) { }
>>>>>>> ecdd6aeb531ba8cbea97318511198edf44fbeaf5

  ngOnInit(): void {
  }

}
