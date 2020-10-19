import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
import { PlansService } from '../../../services/plans.service';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-package-update',
  templateUrl: './package-update.component.html',
  styleUrls: ['./package-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PackageUpdateComponent implements OnInit, OnChanges {
  formReady: FormGroup;
  modules:any;
  checkedTickets = [];
  actionMenu =[];
  isLoading: boolean;
  href: string = "";
  lastURI: string ="";
  plansData: any = {};
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
    this.isLoading = false;
    this.href = this.router.url;
    this.lastURI = this.href.split('/').pop();
    this.formReady.get("id").patchValue(this.lastURI)

    this.plansService.getPlanDetailServices(this.lastURI).subscribe(
      (res:any)=>{
        console.log('res :', res)
        this.plansData = res
        this.onPatchForm(res);
        console.log('this.plansData.module.length', this.plansData.module.length)
        for (let i = 0; i < this.plansData.module.length; i++) {
          for(let j = 0; j < this.plansData.module[i].menus.length; j++) {
            for(let k = 0; k < this.plansData.module[i].menus[j].menuActions.length; k++) {
              console.log('menuActions', this.plansData.module[i].menus[j].menuActions[k].id)
              this.checkedTickets.push(this.plansData.module[i].menus[j].menuActions[k].id);
            }
            console.log('menus', this.plansData.module[i].menus[j].id)
            this.checkedTickets.push(this.plansData.module[i].menus[j].id);
          }
          console.log('module', this.plansData.module[i].id)
          this.checkedTickets.push(this.plansData.module[i].id);
        
        }
      }
    ) 
    this.plansService.getModules().subscribe((data)=>{
      if(data) {
          this.isLoading = true;
          this.modules = data;
        }
    })
  
  }

  onCheck(evt) {
    for (let i = 0; i < this.modules.data.length; i++) {
      if(this.modules.data[i].id == evt){
        if(this.checkedTickets.includes(evt)){
          var index = this.checkedTickets.indexOf(this.modules.data[i].id);
          if (index > -1) {
            this.checkedTickets.splice(index, 1);
          }
          for(let k=0; k < this.modules.data[i].menus.length; k++){
            for(let l=0; l < this.modules.data[i].menus[k].menuActions.length; l++){
              var index = this.checkedTickets.indexOf(this.modules.data[i].menus[k].menuActions[l].idMenuAction[0]);
              if (index > -1) {
                this.checkedTickets.splice(index, 1);
              }
            }
            var index = this.checkedTickets.indexOf(this.modules.data[i].menus[k].id);
            if (index > -1) {
              this.checkedTickets.splice(index, 1);
            }
          }
        } else {
          this.checkedTickets.push(this.modules.data[i].id)
          for(let k=0; k < this.modules.data[i].menus.length; k++){
            for(let l=0; l < this.modules.data[i].menus[k].menuActions.length; l++){
              this.checkedTickets.push(this.modules.data[i].menus[k].menuActions[l].idMenuAction[0]);
            }
            this.checkedTickets.push(this.modules.data[i].menus[k].id)
          }
        }
      }
      for(let o = 0; o < this.modules.data[i].menus.length; o++){
        if(this.modules.data[i].menus[o].id == evt){
          if(this.checkedTickets.includes(evt)){
            var index = this.checkedTickets.indexOf(this.modules.data[i].menus[o].id);
            if (index > -1) {
              this.checkedTickets.splice(index, 1);
            }
            for(let l=0; l < this.modules.data[i].menus[o].menuActions.length; l++){
              var index = this.checkedTickets.indexOf(this.modules.data[i].menus[o].menuActions[l].idMenuAction[0]);
              if (index > -1) {
                this.checkedTickets.splice(index, 1);
              }
            }
          } else {
            this.checkedTickets.push(this.modules.data[i].menus[o].id)
            for(let l=0; l < this.modules.data[i].menus[o].menuActions.length; l++){
              this.checkedTickets.push(this.modules.data[i].menus[o].menuActions[l].idMenuAction[0]);
            }
          }
        }
        for(let x = 0; x < this.modules.data[i].menus[o].menuActions.length; x++){
          if(this.modules.data[i].menus[o].menuActions[x].idMenuAction[0] == evt){
            if(this.checkedTickets.includes(evt[0])){
              var index = this.checkedTickets.indexOf(this.modules.data[i].menus[o].menuActions[x].idMenuAction[0]);if (index > -1) {
                  this.checkedTickets.splice(index, 1);
              }
            } else {
              this.checkedTickets.push(this.modules.data[i].menus[o].menuActions[x].idMenuAction[0])
            }
          }
        }
      }
    }
    console.log(this.checkedTickets)
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
    console.log('this.formReady.value', this.formReady.value)
    this.plansService.updatePlans(this.formReady.value).toPromise().then((data: any)=>{ 
      console.log(data.success)
      if(JSON.parse(data).success === true){
        this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Mengubah data' });
        this.router.navigate([`home/package`])
      } else {
        this.messageService.add({ severity: 'error', summary: 'Gagal', detail: 'Gagal Mengubah data' });
      }
    }) 
  }

  onPatchForm(res){
    this.formReady.patchValue(res)
    // this.formReady.get("id").patchValue(res.id)
    // this.formReady.get("name").patchValue(res.name)
    // this.formReady.get("code").patchValue(res.code)
    // this.formReady.get("actionMenu").patchValue(this.actionMenu)
    // this.formReady.get("version").patchValue(this.actionMenu)
  }
  
  createFormGroup() {
    this.formReady = this.formBuilder.group({
      id: [""],
      name: [""],
      code: [""],
      description: [""],
      actionMenu: [""],
    });
  }

}
