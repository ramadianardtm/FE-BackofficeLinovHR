import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inquiry: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/home/job-vacancy-nonuser'], {queryParams: {inquiry: this.inquiry}});
    console.log(this.inquiry);
    
  }

}
