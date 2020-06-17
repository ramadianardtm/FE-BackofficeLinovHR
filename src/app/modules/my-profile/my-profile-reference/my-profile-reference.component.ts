import { Component, OnInit } from '@angular/core';

export interface reference{
  reference;
  name;
  relationship;
  occupation;
  phone;
  email;
  company;
  description;
}

@Component({
  selector: 'app-my-profile-reference',
  templateUrl: './my-profile-reference.component.html',
  styleUrls: ['./my-profile-reference.component.scss']
})
export class MyProfileReferenceComponent implements OnInit {

  references : reference[] = [];
  reference : reference;
  displayDialog : boolean;
  newReference : boolean;
  selectedReference : reference;

  constructor() { 
    this.references = [
      {
        reference: 'Reference 1',
        name : 'Zolla Haryadi',
        relationship: 'Project Manager',
        occupation: 'Project Manager',
        phone: '08833241234',
        email: 'zolla.haryadi@lawencon.com',
        company: 'PT. Lawencon Internasional',
        description: 'Good attitude and great employee',
      }
    ]
  }

  ngOnInit() {
  }

  cloneTraining(r: reference): reference {
    let ref : reference = {
      reference: '',
      name : '',
      relationship: '',
      occupation: '',
      phone: '',
      email: '',
      company: '',
      description: '',
    };
    for(let prop in r){
      ref[prop]=r[prop]
    }
    return ref;
  }

  addReference(){
    this.newReference = true;
    this.reference =
      {
        reference: '',
        name : '',
        relationship: '',
        occupation: '',
        phone: '',
        email: '',
        company: '',
        description: '',
      }
    
    this.displayDialog = true;
  }

  onSave(){
    let references = [...this.references];
    if(this.newReference){
      references.push(this.reference);
    } else {
      // console.log("index : ", this.references.indexOf(this.selectedReference));
      references[this.references.indexOf(this.selectedReference)+1]=this.reference;
    }
    this.references = references;
    this.reference = null;
    this.displayDialog = false;
  }

  edit(reference){
    this.newReference = false;
    this.reference = this.cloneTraining(reference);
    this.selectedReference = this.reference;
    this.displayDialog = true;    
  }

}
