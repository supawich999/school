import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { subject } from './../../models/subject';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

<<<<<<< HEAD
  constructor(private modalService: NgbModal, public dialog: MatDialog) { }
=======
  subForm = this.fb.group({
    idSub: ['', Validators.required],
    nameSub: ['', Validators.required],
    pakSub: ['', Validators.required],
    sakaSub: ['', Validators.required],
    statusSub: ['', Validators.required],


  });

  submitted = false;

  get a() { return this.subForm.controls; }

  // submit() {
  //   alert("Add complete")
  //   console.warn(this.subForm.value);
  // }
  onSubmit() {
     this.submitted = true;

    // stop here if form is invalid
    if (this.subForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
}

  constructor(private modalService: NgbModal, public dialog: MatDialog, private fb: FormBuilder) { }



>>>>>>> ecdd6aeb531ba8cbea97318511198edf44fbeaf5

  public isCollapsed = true;
  public subjectItem: subject = {
    subId: '',
    subName: '',
    subPak: '',
    subSaka: '',
    subStatus: ''
 
  };



  data02: subject[] = [
 
    {
      subId: "suId01",
      subName: "Business Finance",
      subPak: "คณะมนุษยศาสตร์และสังคมศาสตร์",
      subSaka: "ภาควิชาบรรณรักษศาสตร์และสารสนเทศศาสตร์",
      subStatus: "ใช้งาน"
    },
    {
      subId: "suId02",
      subName: "Thai History 1",
      subPak: "คณะมนุษยศาสตร์และสังคมศาสตร์",
      subSaka: "ภาควิชาประวัติศาสตร์",
      subStatus: "เลิกใช้งาน"
    },
    {
      subId: "suId03",
      subName: "Mathematics for Sciences 1",
      subPak: "คณะวิทยาศาสตร์",
      subSaka: "ภาควิชาคณิตศาสตร์",
      subStatus: "ใช้งาน"
    },
    {
      subId: "suId04",
      subName: "General Mathematics",
      subPak: "คณะวิทยาศาสตร์",
      subSaka: "ภาควิชาคณิตศาสตร์",
      subStatus: "เลิกใช้งาน"
    },
    {
      subId: "suId05",
      subName: "Engineering Workshop Practice",
      subPak: "คณะวิศวกรรมศาสตร์",
      subSaka: "สำนักวิชาวิศวกรรมศาสตร์",
      subStatus: "ใช้งาน"
    },
    {
      subId: "suId06",
      subName: "Computer Programming",
      subPak: "คณะวิศวกรรมศาสตร์",
      subSaka: "สำนักวิชาวิศวกรรมศาสตร์",
      subStatus: "เลิกใช้งาน"
    },
    {
      subId: "suId07",
      subName: "Client Caring Technique",
      subPak: "คณะพยาบาลศาสตร์",
      subSaka: "สำนักงานเลขา คณะพยาบาล",
      subStatus: "ใช้งาน"
    },
    {
      subId: "suId08",
      subName: "Nursing for Self-Care",
      subPak: "คณะพยาบาลศาสตร์",
      subSaka: "สำนักงานเลขา คณะพยาบาล",
      subStatus: "เลิกใช้งาน"
    },
    {
      subId: "suId09",
      subName: "Music and Local Culture of the Mekong Basin Regions	",
      subPak: "คณะศิลปกรรมศาสตร์",
      subSaka: "สาขาวิชาดุริยางคศิลป์",
      subStatus: "ใช้งาน"
    },
    {
      subId: "suId10",
      subName: "Research Methodology in Music",
      subPak: "คณะศิลปกรรมศาสตร์",
      subSaka: "สาขาวิชาดุริยางคศิลป์",
      subStatus: "เลิกใช้งาน"
    },
  
  
  ]

<<<<<<< HEAD
=======
  
>>>>>>> ecdd6aeb531ba8cbea97318511198edf44fbeaf5
  closeResult = "";
  open(content: any, d: subject) {
    this.subjectItem = d
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title", size: "xl" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`; //Save
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;   //Close Dialog
        }

      );

  }
  
  editItem(d: subject) {
    this.subjectItem = d
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

<<<<<<< HEAD

=======
 
>>>>>>> ecdd6aeb531ba8cbea97318511198edf44fbeaf5

  ngOnInit(): void {


  }




}
