import {Component, Input, OnInit} from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {

  url: string;
  @Input() navTab: string = 'Payroll-Salary';
  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
  }

  changeNavTab(tab: string) {
    this.navTab = tab;
  }

}
