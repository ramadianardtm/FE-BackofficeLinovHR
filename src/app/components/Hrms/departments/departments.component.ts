import {Component, Input, OnInit} from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  url: string;
  @Input() navTab: string = 'Departments-list';
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
