import {Component, Input, OnInit} from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';
declare var jquery: any;
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  url: string;
  @Input() navTab: string = 'Project-OnGoing';
  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
    this.expandData();
  }

  changeNavTab(tab: string) {
    this.navTab = tab;
  }

  expandData() {
    $( document ).ready(function() {
      const DIV_CARD = 'div.card';
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
    });

  }

}
