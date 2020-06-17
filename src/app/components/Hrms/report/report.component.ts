import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Input() navTab: string = 'Report-Invoices';
  constructor() { }

  ngOnInit() {
  }

  changeNavTab(tab: string) {
    this.navTab = tab;
  }

}
