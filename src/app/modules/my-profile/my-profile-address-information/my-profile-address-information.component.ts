import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'app/shared/models/table.interface';
import { onConstructTableHeader } from 'app/shared/utils';

export interface addresData{
  addName;
  addLine1;
  addLine2;
  country;
  state;
  city;
  postalCode;
  // primary;
}

@Component({
  selector: 'app-my-profile-address-information',
  templateUrl: './my-profile-address-information.component.html',
  styleUrls: ['./my-profile-address-information.component.scss']
})
export class MyProfileAddressInformationComponent implements OnInit {

  addressColumns: TableColumn[]
  displayDialog: boolean;
  newAddrs: boolean;
  addresData: addresData;
  
  constructor() { 
    this.addressColumns = onConstructTableHeader([
      'Home',
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

  addFamilyDialog(){
    this.newAddrs = true;
    this.addresData = {
      addName:'',
      addLine1:'',
      addLine2:'',
      country:'',
      state:'',
      city:'',
      postalCode:'',
    };
    this.displayDialog = true;
  }


}
