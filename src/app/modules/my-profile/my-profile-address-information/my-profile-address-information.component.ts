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
  newAddress: boolean;
  selectedAddress: addressData;
  
  
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

  cloneAddress(a: addressData): addressData {
    let address : addressData = {
      addName:'',
      addLine1:'',
      addLine2:'',
      country:'',
      state:'',
      city:'',
      postalCode:'',
    };
    for(let prop in a){
      address[prop]=a[prop]
    }
    return address;
  }

  onSave(){
    let addressData = [...this.addressData];
    if(this.newAddress){
      addressData.push(this.addresData);
    } else {
      // console.log("index : ", this.addressData.indexOf(this.selectedWorkExp));
      addressData[this.addressData.indexOf(this.selectedAddress)+1]=this.addresData;
    }
    this.addressData = addressData;
    this.addresData = null;
    this.displayDialog = false;
  }

  edit(address){
    this.newAddress = false;
    this.addresData = this.cloneAddress(address);
    this.selectedAddress = this.addresData;
    this.displayDialog = true;    
  }

  delete(work){
    let index = this.addressData.indexOf(work);
    this.addressData = this.addressData.filter((val, i)=> i != index);
    this.addresData = null;
  }


}
