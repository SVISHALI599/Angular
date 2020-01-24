export class Doctor {
    private _doctorName: String;
    private _doctorAge: number;
    private _doctorGender: String;
    private _doctorMobileNumber: String;
    private _doctorMailId: String;
    private _doctorAddressLine1: String;
    private _doctorAddressLine2: String;
    private _doctorAddressLine3: String;
    private _doctorSpecialization: String;
    private _doctorExperience: number;
    public get doctorName(): String {
        return this._doctorName;
    }
    public set doctorName(value: String) {
        this._doctorName = value;
    }
   
    public get doctorAge(): number {
        return this._doctorAge;
    }
    public set doctorAge(value: number) {
        this._doctorAge = value;
    }
  
    public get doctorGender(): String {
        return this._doctorGender;
    }
    public set doctorGender(value: String) {
        this._doctorGender = value;
    }

    public get doctorMobileNumber(): String {
        return this._doctorMobileNumber;
    }
    public set doctorMobileNumber(value: String) {
        this._doctorMobileNumber = value;
    }
 
    public get doctorMailId(): String {
        return this._doctorMailId;
    }
    public set doctorMailId(value: String) {
        this._doctorMailId = value;
    }
    
    public get doctorAddressLine1(): String {
        return this._doctorAddressLine1;
    }
    public set doctorAddressLine1(value: String) {
        this._doctorAddressLine1 = value;
    }
   
    public get doctorAddressLine2(): String {
        return this._doctorAddressLine2;
    }
    public set doctorAddressLine2(value: String) {
        this._doctorAddressLine2 = value;
    }
   
    public get doctorAddressLine3(): String {
        return this._doctorAddressLine3;
    }
    public set doctorAddressLine3(value: String) {
        this._doctorAddressLine3 = value;
    }
   
    public get doctorSpecialization(): String {
        return this._doctorSpecialization;
    }
    public set doctorSpecialization(value: String) {
        this._doctorSpecialization = value;
    }

    public get doctorExperience(): number {
        return this._doctorExperience;
    }
    public set doctorExperience(value: number) {
        this._doctorExperience = value;
    }
}


