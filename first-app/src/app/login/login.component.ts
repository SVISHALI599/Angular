import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AboutService } from '../about.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,private service :AboutService){
  }
  patients:Array<any>=[];
  doctors:Array<any>=[];
  ngOnInit () {  }
  readPatients(){
  this.patients = Array<any>(
    {patientId:1,disease:'fever', PatientName: 'Anitha'},
    {patientId:2,disease:'cancer',PatientName: 'Priya'},
    {patientId:3,disease:'headache', PatientName: 'Banu'},
    {patientId:4,disease:'malaria', PatientName: 'Vishali'},
    {patientId:5,disease:'fever',PatientName:'Ish'}
  );
  this.service.patients=this.patients;
  this.router.navigate(["dashboard"]);
  }
  readDoctor(){
this.doctors=Array<any>(
{doctorId:1,DoctorName:'Malathi',Specialization:'Cardiologist'},
{doctorId:2,DoctorName:'Sakthi',Specialization:'Optholmologist'},
{doctorId:3,DoctorDoctorName:'Raja',Specialization:'Dentist'},
{doctorId:4,DoctorName:'Apsana',Specialization:'physician'},
{doctorId:5,DoctorName:'Malar',Specialization:'Cardiologist'}
);
this.service.doctors=this.doctors;
  this.router.navigate(["dashboard"]);

  }
}
