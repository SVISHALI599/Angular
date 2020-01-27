import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  patients:Array<any> = [];

  constructor(private router:ActivatedRoute,private service : AboutService) { }
  ngOnInit() {
   
    this.patients= this.service.patients;
   
  }
  
}
