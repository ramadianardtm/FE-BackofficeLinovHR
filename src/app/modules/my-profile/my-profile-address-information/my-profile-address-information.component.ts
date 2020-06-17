import { Component, OnInit } from '@angular/core';
import { onConstructTableHeader } from 'app/shared/utils';

export interface addressData{
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

  addressData: addressData[] =[];
  addresData: addressData;
  displayDialog: boolean;
  
  
  constructor() { 
    this.addressData = [
      { 
        addName:'Home',
        addLine1:'Jalan KH Ramli no 8',
        addLine2:'',
        country:'Indonesia',
        state:'DKI Jakarta',
        city:'Jakarta Selatan',
        postalCode:'29998',
      },
      { 
        addName:'Office',
        addLine1:'Wisma Staco, 5th Floor Casablanca Street',
        addLine2:'',
        country:'Indonesia',
        state:'DKI Jakarta',
        city:'Jakarta Selatan',
        postalCode:'11560',
      }
    ]
  }

  ngOnInit() {
  }


  addAddresInf(){
    this.addresData = 
    {
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

  onSave(){
    this.addressData.push(this.addresData)
  }


}
