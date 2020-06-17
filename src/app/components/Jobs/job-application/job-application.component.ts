import { Component, OnInit } from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent implements OnInit {

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
      { item_id: 1, item_text: 'All Statuses' },
      { item_id: 2, item_text: 'New' },
      { item_id: 3, item_text: 'Contacted' },
      { item_id: 4, item_text: 'Interviewed' },
      { item_id: 5, item_text: 'Hired' }
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
