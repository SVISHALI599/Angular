import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service:AboutService,private crudService:CrudService) { }
patients:Array<any>=[];
doctor:Array<any>=[];
  ngOnInit() {
  }
  listPatient(){
    // this.patients= this.service.patients;
    // return this.patients;
    this.crudService.getAllPatients().subscribe(data => {
      this.patients = data;
      console.log(this.patients);
    });

  }
  listDoctor(){
    this.crudService.getAllDoctors().subscribe(data => {
      this.doctor = data;
      console.log(this.doctor);
    });
  }

}
