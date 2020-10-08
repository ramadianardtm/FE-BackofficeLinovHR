import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
import { PlansService } from '../../../services/plans.service';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PackageCreateComponent implements OnInit, OnChanges {
  formReady: FormGroup;
  modules:any;
  checkedTickets = [];
  actionMenu =[];
  constructor(
    private formBuilder: FormBuilder,
    private plansService: PlansService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.createFormGroup();
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }

  ngOnInit() {
    this.plansService.getModules().subscribe((data)=>{
      if(data) {
          this.modules = data;
        }
    })  

  }


  onCheck(evt) {
    for (let i = 0; i < this.modules.data.length; i++) {
      if(this.modules.data[i].id == evt){
        if(this.checkedTickets.includes(evt)){
          for (let a = 0; a < this.modules.data[i].menus.length; a++) {
            var index = this.checkedTickets.indexOf(this.modules.data[i].menus[a].id);
            if (index > -1) {
                  this.checkedTickets.splice(index, 1);
              }
            if(this.modules.data[i].menus[a].menuActions == undefined){
            } else {
              for(let b = 0; b < this.modules.data[i].menus[a].menuActions.length; b++) {
                var index = this.checkedTickets.indexOf(this.modules.data[i].menus[a].menuActions[b].id);
                if (index > -1) {
                    this.checkedTickets.splice(index, 1);
                }
              }
            }
          }
        } 
        else {
          for (let a = 0; a < this.modules.data[i].menus.length; a++) {
            this.checkedTickets.push(this.modules.data[i].menus[a].id);
            if(this.modules.data[i].menus[a].menuActions == undefined){
            } else {
              for(let b = 0; b < this.modules.data[i].menus[a].menuActions.length; b++) {
                this.checkedTickets.push( this.modules.data[i].menus[a].menuActions[b].id);
              }
            }
          }
        }
      }
     }
    if (!this.checkedTickets.includes(evt)) {
      this.checkedTickets.push(evt);
    } else {
      var index = this.checkedTickets.indexOf(evt);
      if (index > -1) {
        this.checkedTickets.splice(index, 1);
      }
    }
    console.log(this.checkedTickets);
  }

  validation(){
    for(let i = 0; i < this.modules.data.length; i++) {
      if(this.checkedTickets.includes(this.modules.data[i].id)){
        var index = this.checkedTickets.indexOf(this.modules.data[i].id);
        if (index > -1) {
          this.checkedTickets.splice(index, 1);
        } 
      }
      if(this.modules.data[i].menus == undefined){
      } else {
        for(let a = 0; a < this.modules.data[i].menus.length; a++){
          if(this.checkedTickets.includes(this.modules.data[i].menus[a].id)){
            var index = this.checkedTickets.indexOf(this.modules.data[i].menus[a].id);
            if (index > -1) {
              this.checkedTickets.splice(index, 1);
            } 
          }
        }
      }
    }
  }

  submit(){
    this.validation()
    this.actionMenu = this.checkedTickets
    this.formReady.get("actionMenu").patchValue(this.actionMenu)
    console.log(this.formReady.value)
    this.plansService.postPlans(this.formReady.value).toPromise().then((data: any)=>{ 
      console.log(JSON.parse(data).success)
      if(JSON.parse(data).success === true){
        this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Menambah data' });
        this.router.navigate([`home/package`])
      } else {
        this.messageService.add({ severity: 'error', summary: 'Gagal', detail: 'Gagal Menambah data' });
      }
    }) 
  }

  createFormGroup() {
    this.formReady = this.formBuilder.group({
      name: [""],
      code: [""],
      description: [""],
      actionMenu: [""],
    });
  }

}
