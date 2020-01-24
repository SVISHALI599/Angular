export class Patient {
    private _patientId: number;
    private _patientDisease: String;
    private _patientName: String;
    private _patientAge: number;
    private _patientGender: String;
    private _patientMobileNumber: String;
    private _patientMailId: String;
    private _patientAddressLine1: String;
    private _patientAddressLine2: String;
    private _patientAddressLine3: String;
    public get patientId(): number {
        return this._patientId;
    }
    public set patientId(value: number) {
        this._patientId = value;
    }
   
    public get patientDisease(): String {
        return this._patientDisease;
    }
    public set patientDisease(value: String) {
        this._patientDisease = value;
    }
   
    public get patientName(): String {
        return this._patientName;
    }
    public set patientName(value: String) {
        this._patientName = value;
    }
   
    public get patientAge(): number {
        return this._patientAge;
    }
    public set patientAge(value: number) {
        this._patientAge = value;
    }
  
    public get patientGender(): String {
        return this._patientGender;
    }
    public set patientGender(value: String) {
        this._patientGender = value;
    }
   
    public get patientMobileNumber(): String {
        return this._patientMobileNumber;
    }
    public set patientMobileNumber(value: String) {
        this._patientMobileNumber = value;
    }
   
    public get patientMailId(): String {
        return this._patientMailId;
    }
    public set patientMailId(value: String) {
        this._patientMailId = value;
    }
  
    public get patientAddressLine1(): String {
        return this._patientAddressLine1;
    }
    public set patientAddressLine1(value: String) {
        this._patientAddressLine1 = value;
    }
  
    public get patientAddressLine2(): String {
        return this._patientAddressLine2;
    }
    public set patientAddressLine2(value: String) {
        this._patientAddressLine2 = value;
    }
  
    public get patientAddressLine3(): String {
        return this._patientAddressLine3;
    }
    public set patientAddressLine3(value: String) {
        this._patientAddressLine3 = value;
    }
}
