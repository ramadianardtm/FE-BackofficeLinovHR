import { Component, OnInit } from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';
declare var jquery: any;
declare var $: any;
declare var require: any;

@Component({
  selector: 'app-job-resumes',
  templateUrl: './job-resumes.component.html',
  styleUrls: ['./job-resumes.component.scss']
})
export class JobResumesComponent implements OnInit {

  url: string;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
    this.dropdownList = [
      { item_id: 1, item_text: '$0 - $50' },
      { item_id: 2, item_text: '$50 - $100' },
      { item_id: 3, item_text: '$100 - $200' },
      { item_id: 4, item_text: '$200 - $500' },
      { item_id: 5, item_text: '$500 +' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
