import { User } from './user';
export class Doctor {
    private pkDoctorId:number;
    private fkUserId:number;
    private doctorSpecialization:String;
    private doctorExperience:number;
    constructor(){
        this.pkDoctorId=null;
        this.fkUserId=null;
        this.doctorSpecialization="";
        this.doctorExperience=null;
    }
}


