import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubjectComponent } from './subject/subject.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { OfficerComponent } from './officer/officer.component';
=======
import { EditSubjectComponent } from './edit-subject/edit-subject.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { DelSubjectComponent } from './del-subject/del-subject.component';
import { OfficerComponent } from './officer/officer.component';


>>>>>>> b5189098636d256af3ec8d07fd4e7ec9b2710c5c


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    LoginComponent,
    StudentComponent,
    SubjectComponent,
    HomeComponent,
<<<<<<< HEAD
    OfficerComponent
=======
    EditSubjectComponent,
    AddSubjectComponent,
    DelSubjectComponent,
    OfficerComponent,

>>>>>>> b5189098636d256af3ec8d07fd4e7ec9b2710c5c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
