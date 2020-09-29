import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlansService } from '../../../services/plans.service';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})
export class PackageDetailComponent implements OnInit {
  href: string = "";
  lastURI: string ="";
  plansData: any = {};
  constructor(
    private router : Router,
    private plansService: PlansService,
  ) { }

  ngOnInit() {
    this.href = this.router.url;
    this.lastURI = this.href.split('/').pop();

    this.plansService.getPlanDetailServices(this.lastURI).subscribe(
      (res:any)=>{
        console.log(res)
        this.plansData = res
      }
    )  
  }

}
