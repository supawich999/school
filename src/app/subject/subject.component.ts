import { subject } from './../../models/subject';
import { Component, OnInit } from '@angular/core';


const ELEMENT_DATA: subject[] = [
    
  {
    subId: "suId01",
    subName: "English for Career Preparation",
    subPak: "สำนักศึกษาทั่วไป",
    subSaka: "สำนักศึกษาทั่วไป",
    subStatus: "ใช้งาน"
  },

  {
    subId: "suId02",
    subName: "Listening and Speaking English for Daily-Life Communication",
    subPak: "สำนักศึกษาทั่วไป",
    subSaka: "สำนักศึกษาทั่วไป",
    subStatus: "เลิกใช้งาน"
  },

  {
    subId: "suId03",
    subName: "Mathematics for Science 1",
    subPak: "คณะวิทยาศาสตร์",
    subSaka: "ภาควิชาคณิตศาสตร์",
    subStatus: "ใช้งาน"
  },

  {
    subId: "suId04",
    subName: "Mathematics for Science 2",
    subPak: "คณะวิทยาศาสตร์",
    subSaka: "ภาควิชาคณิตศาสตร์",
    subStatus: "เลิกใช้งาน"
  },

  {
    subId: "suId05",
    subName: "English for Self-Access Learning",
    subPak: "คณะมนุษยศาสตร์และสังคมศาสตร์",
    subSaka: "สำนักงานเลขา คณะมนุษย์",
    subStatus: "ใช้งาน"
  },


  {
    subId: "suId06",
    subName: "Seminar on Research Methodology of Humanities and Social Sciences",
    subPak: "คณะมนุษยศาสตร์และสังคมศาสตร์",
    subSaka: "ภาควิชาสังคมวิทยาและมานุษยวิทยา",
    subStatus: "เลิกใช้งาน"
  },

  {
    subId: "suId07",
    subName: "Computer Programming",
    subPak: "คณะวิศวกรรมศาสตร์",
    subSaka: "สำนักวิชาวิศวกรรมศาสตร์",
    subStatus: "ใช้งาน"
  },

  {
    subId: "suId08",
    subName: "Engineering Materials",
    subPak: "คณะวิศวกรรมศาสตร์",
    subSaka: "สำนักวิชาวิศวกรรมศาสตร์",
    subStatus: "เลิกใช้งาน"
  },

  {
    subId: "suId09",
    subName: "Nursing Process and Health Assessment",
    subPak: "คณะพยาบาลศาสตร์",
    subSaka: "สำนักงานเลขา คณะพยาบาล",
    subStatus: "ใช้งาน"
  },

  {
    subId: "suId10",
    subName: "Health and Environmental Health",
    subPak: "คณะพยาบาลศาสตร์",
    subSaka: "สำนักงานเลขา คณะพยาบาล",
    subStatus: "ใช้งาน"
  },

];

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})


export class SubjectComponent implements OnInit {

  

  displayedColumns: string[] = ['subId', 'subName', 'subPak','subSaka','subStatus'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
