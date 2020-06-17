import {Component, Input, OnInit} from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  url: string;
  @Input() navTab: string = 'list-tab';
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
