import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-posotions',
  templateUrl: './job-posotions.component.html',
  styleUrls: ['./job-posotions.component.scss']
})
export class JobPosotionsComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  constructor() { }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'All Types' },
      { item_id: 2, item_text: 'Full-time' },
      { item_id: 3, item_text: 'Part-time' },
      { item_id: 4, item_text: 'Internship' },
      { item_id: 5, item_text: 'Freelance' },
      { item_id: 6, item_text: 'Remote' }
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
