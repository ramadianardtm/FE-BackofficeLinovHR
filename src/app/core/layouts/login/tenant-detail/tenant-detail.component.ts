import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.scss']
})
export class TenantDetailComponent implements OnInit {

  public href: string = "";
  public lastURI: string ="";

  constructor(private router : Router) { }

  ngOnInit() {
    this.href = this.router.url;
    this.lastURI = this.href.split('/').pop();
    console.log('before split', this.router.url);
    console.log('last uri', this.lastURI);
  }


}
