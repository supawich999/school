import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  profileForm = this.fb.group({
    ID: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(5)]],
    PASSWORD: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]],
    NameSurname: ['', Validators.required],
    Address: ['', Validators.required],
    Age: ['', Validators.required],
    Department: ['', Validators.required],
    Major: ['', Validators.required],
    Subject: ['', Validators.required],
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  constructor(private fb: FormBuilder) { }

  submit() {
    alert('ทำการเพิ่มเรียบร้อย')
  }
  ngOnInit(): void {
  }

}
