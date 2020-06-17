import { Component, OnInit } from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';
declare var jquery: any;
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  url: string;
  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
    this.expandData();
  }

  expandData() {
    $( document ).ready(function() {
      const DIV_CARD = 'div.card';
      $('[data-toggle="card-remove"]').on('click', function(e) {
        const card = $(this).closest(DIV_CARD);
        card.remove();
        e.preventDefault();
        return false;
      });
      /** Function for collapse card */
      $('[data-toggle="card-collapse"]').on('click', function(e) {
        const card = $(this).closest(DIV_CARD);
        if (card.hasClass('card-collapsed')) {
          card.removeClass('card-collapsed');
        } else {
          card.addClass('card-collapsed');
        }
        e.preventDefault();
        return false;
      });

      $('[data-toggle="card-fullscreen"]').on('click', function(e) {
        const card = $(this).closest(DIV_CARD);
        if (card.hasClass('card-fullscreen')) {
          card.removeClass('card-fullscreen');
        } else {
          card.addClass('card-fullscreen');
        }
        e.preventDefault();
        return false;
      });
    });
  }

}
