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
  constructor(private http:HttpClient) {  }  
  public getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.DoctorUrl);
  }
  public getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientUrl);
  } 


  
}



