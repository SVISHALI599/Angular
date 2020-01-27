import { Injectable } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private _patients: Array<any> = [];
  private _doctors: Array<any> = [];
  public get patients(): Array<any> {
    return this._patients;
  }
  public set patients(value: Array<any>) {
    this._patients = value;
  }
  public get doctors(): Array<any> {
    return this._doctors;
  }
  public set doctors(value: Array<any>) {
    this._doctors = value;
  }
}
export class patient{
  private _patientId: BigInteger;
  private _patientName: String;
  private _patientDisease: String;
  private _patientEmailId: String;
  private _patientPassword: String;
  private _patientMobileNumber: String;
  private _patientAddress: String;
  public get patientId(): BigInteger {
    return this._patientId;
  }
  public set patientId(value: BigInteger) {
    this._patientId = value;
  }
  
  public get patientName(): String {
    return this._patientName;
  }
  public set patientName(value: String) {
    this._patientName = value;
  }
 
  public get patientDisease(): String {
    return this._patientDisease;
  }
  public set patientDisease(value: String) {
    this._patientDisease = value;
  }
 
  public get patientEmailId(): String {
    return this._patientEmailId;
  }
  public set patientEmailId(value: String) {
    this._patientEmailId = value;
  }

  public get patientPassword(): String {
    return this._patientPassword;
  }
  public set patientPassword(value: String) {
    this._patientPassword = value;
  }

  public get patientMobileNumber(): String {
    return this._patientMobileNumber;
  }
  public set patientMobileNumber(value: String) {
    this._patientMobileNumber = value;
  }
 
  public get patientAddress(): String {
    return this._patientAddress;
  }
  public set patientAddress(value: String) {
    this._patientAddress = value;
  }
}