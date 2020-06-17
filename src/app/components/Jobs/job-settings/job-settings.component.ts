import { Component, OnInit } from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';
declare var jquery: any;
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-job-settings',
  templateUrl: './job-settings.component.html',
  styleUrls: ['./job-settings.component.scss']
})
export class JobSettingsComponent implements OnInit {
  url: string;
  constructor(private constName: ConstNameService) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;

    $( document ).ready(function() {
      const DIV_CARD = 'div.card';
      $('[data-toggle="card-remove"]').on('click', function(e) {
        const card = $(this).closest(DIV_CARD);
        card.remove();
        e.preventDefault();
        return false;
      });
    });
  }

}
