import { Component, OnInit } from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';

@Component({
  selector: 'app-page-topbar',
  templateUrl: './page-topbar.component.html',
  styleUrls: ['./page-topbar.component.scss']
})
export class PageTopbarComponent implements OnInit {

  url: string;
  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
  }

}
