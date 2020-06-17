import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { onConstructTableHeader } from 'app/shared/utils';

@Component({
  selector: 'app-my-profile-address-information',
  templateUrl: './my-profile-address-information.component.html',
  styleUrls: ['./my-profile-address-information.component.scss']
})
export class MyProfileAddressInformationComponent implements OnInit {

  addressColumns: TableColumn[]
  
  constructor() { 
    this.addressColumns = onConstructTableHeader([
      'Residence Type',
      'Address',
      'Country',
      'Province',
      'City',
      'Postal Code',
    ]);
  }

  ngOnInit() {
  }

}
