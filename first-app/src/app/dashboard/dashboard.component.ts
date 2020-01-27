import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { CrudService } from '../crud.service';
import { Patient } from '../patient';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patientFormGroup: FormGroup;
  constructor(private service:AboutService,private crudService:CrudService,private formBuilder:FormBuilder) 
  { 
     this.patientFormGroup = this.formBuilder.group({
      userId:new FormControl(''),
       userName: new FormControl(''),
        userPassword: new FormControl(''),
     userGender:new FormControl(''),
     userAge:new FormControl(''),
     userMobileNumber:new FormControl(''),
     userEmailId:new FormControl(''),
     userAddressLine1:new FormControl(''),
     userAddressLine2:new FormControl(''),
     userAddressLine3:new FormControl(''),
     userRoleId:new FormControl(''),
     pkPatientId:new FormControl(''),
     fkUserId:new FormControl(''),
     patientDisease:new FormControl('')
    });
  }
patients:Array<Patient>=[];
doctor:Array<any>=[];
patientDetails:Patient = new Patient();
patientForm:FormGroup;
ngOnInit() {}
  listPatient(){
    
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
  createPatient() {
      //    console.log(this.patientDetails);
      //  this.crudService.addPatient(this.patientDetails).subscribe((data) => {
      //    console.log(this.patientDetails);
      //  console.log("success");
       this.patientFormGroup = this.formBuilder.group(Patient);
         this.patientDetails=this.patientForm.value;
         this.crudService.addPatient(this.patientDetails).subscribe((data) => {
       console.log(this.patientDetails instanceof Patient);
      });
   }
   deletePatient(patientId){
     console.log(patientId,{patientId});
     this.crudService.deletePatient({ patientId }).subscribe(data =>{
       console.log(this.patientDetails);
       console.log("success");
     })

 }
}