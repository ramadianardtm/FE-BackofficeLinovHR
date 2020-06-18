import { Component, OnInit } from '@angular/core';

interface basicInformation{
  name;
  nik;
  email;
  phone;
  nationality;
  birthPlace;
  birthDate;
  gender;
  maritalStatus;
  religion;
  bloodType;
  socialMedia;
  hobbies;
  strength;
  weakness;
  experience;
  salaryExpect;
}

@Component({
  selector: 'app-my-profile-basic-information',
  templateUrl: './my-profile-basic-information.component.html',
  styleUrls: ['./my-profile-basic-information.component.scss']
})
export class MyProfileBasicInformationComponent implements OnInit {

  bInfo : basicInformation;
  editMode: boolean = true;

  constructor() { 
    this.bInfo = {
      name: 'John Doe',
      nik: '20200230001',
      email: 'john.doe@gmail.com',
      phone: '022-33132341',
      nationality: 'Indonesia',
      birthPlace: 'Surabaya',
      birthDate: '23-JUN-1988',
      gender: 'Male',
      maritalStatus: 'Married',
      religion: 'Islam',
      bloodType: 'A',
      socialMedia: ['linkedin.com/john-doe', 'facebook.com/john-doe', 'instagram.com/john-doe'],
      hobbies: 'Swimming',
      strength: 'Visionary, Target Based',
      weakness: 'Pressure',
      experience: '4 Years',
      salaryExpect: 'IDR 6,000,000'
    }
  }

  ngOnInit() {
  }

  edit(){
    if(this.editMode){
      this.editMode = false;
    } else {
      this.editMode = true;
    }
  }

}
