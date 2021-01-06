import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-del-subject',
  templateUrl: './del-subject.component.html',
  styleUrls: ['./del-subject.component.css']
})
export class DelSubjectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DelSubjectComponent>) { }

  close() {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
  }

}
