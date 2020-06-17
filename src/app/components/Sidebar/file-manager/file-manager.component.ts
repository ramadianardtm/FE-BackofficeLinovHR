import { Component, OnInit } from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  url: string;
  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
  }

}
