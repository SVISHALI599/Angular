import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs';
import{Patient} from'./patient';
import{Doctor} from './doctor';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  DoctorUrl="http://localhost:8080/all_doctors";
  patientUrl="http://localhost:8080/all_patients";
  createPatientUrl="http://localhost:8080/create_patient";
  deletePatientUrl="http://localhost:8080/delete_patient";
  createDoctorUrl="http://localhost:8080/create_doctor";
  deleteDoctorUrl="http://localhost:8080/delete_doctor";
  patient:Patient;
  constructor(private http:HttpClient) {  }  
  public getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.DoctorUrl);
  }
  public getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  } 
   public addPatient = (patient) => {
     console.log(patient);
     return this.http.post(this.createPatientUrl, patient);
   }
   public deletePatient=(patient)=>{
     console.log(patient);
 this.deletePatientUrl=this.deletePatientUrl.concat(patient._patientId.toString());
     return this.http.put(this.deletePatientUrl,patient._patientId);
   }
}



