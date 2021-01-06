import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubjectComponent } from './subject/subject.component';
import { HomeComponent } from './home/home.component';
import { OfficerComponent } from './officer/officer.component';

import { AddSubjectComponent } from './add-subject/add-subject.component';
import { DelSubjectComponent } from './del-subject/del-subject.component';
import { AddofficerComponent } from './officer/addofficer/addofficer.component';
import { EditofficerComponent } from './officer/editofficer/editofficer.component';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';





@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    LoginComponent,
    StudentComponent,
    SubjectComponent,
    HomeComponent,
    OfficerComponent,
    AddSubjectComponent,
    DelSubjectComponent,
    AddofficerComponent,
    EditofficerComponent,
    EditSubjectComponent,
    OfficerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
