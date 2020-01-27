import{ User } from'./user';

export class Patient {
   // patientFormGroup = this.formBuilder.group(Patient);
    private pkPatientId:number;
    private fkUserId:number;
    private patientDisease:String;


    constructor(){
     this.fkUserId = null;
     this.patientDisease = "";
     this.pkPatientId=null;     
    }
}
