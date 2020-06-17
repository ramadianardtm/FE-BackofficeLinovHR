import { Component, OnInit } from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';

@Component({
  selector: 'app-card-images',
  templateUrl: './card-images.component.html',
  styleUrls: ['./card-images.component.scss']
})
export class CardImagesComponent implements OnInit {

  url: string;
  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
  }

}
