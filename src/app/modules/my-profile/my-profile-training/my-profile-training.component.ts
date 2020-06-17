import { Component, OnInit } from '@angular/core';

export interface training{
  institution;
  subject;
  start;
  end;
  description;
  documents;
}

@Component({
  selector: 'app-my-profile-training',
  templateUrl: './my-profile-training.component.html',
  styleUrls: ['./my-profile-training.component.scss']
})
export class MyProfileTrainingComponent implements OnInit {

  trainings : training[] = [];
  training : training;
  displayDialog : boolean;
  newTraining: boolean;
  selectedTraining: training;

  constructor() { 
    this.trainings = [
      {
        institution: 'PT Lawencon Internasional',
        subject: 'Java Bootcamp',
        start: '15-Jan-2010',
        end: '30-Mar-2010',
        description: ['Learn about programming using Java language and build various projects based on Java'],
        documents: ['certificate.pdf', 'certificate.docx'],
      }
    ]
  }

  ngOnInit() {
  }

  cloneTraining(t: training): training {
    let training : training = {
      institution: '',
      subject: '',
      start: '',
      end: '',
      description: null,
      documents: null,
    };
    for(let prop in t){
      training[prop]=t[prop]
    }
    return training;
  }

  addTraining(){
    this.newTraining = true;
    this.training =
      {
        institution: '',
        subject: '',
        start: '',
        end: '',
        description: null,
        documents: null,
      }
    
    this.displayDialog = true;
  }

  onSave(){
    let trainings = [...this.trainings];
    if(this.newTraining){
      trainings.push(this.training);
    } else {
      // console.log("index : ", this.trainings.indexOf(this.selectedTraining));
      trainings[this.trainings.indexOf(this.selectedTraining)+1]=this.training;
    }
    this.trainings = trainings;
    this.training = null;
    this.displayDialog = false;
  }

  edit(training){
    this.newTraining = false;
    this.training = this.cloneTraining(training);
    this.selectedTraining = this.training;
    this.displayDialog = true;    
  }

}
