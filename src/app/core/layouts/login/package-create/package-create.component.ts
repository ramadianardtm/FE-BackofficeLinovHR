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
  modules: any;
  datas: any[];
  apps: any[];
  isLoading: boolean;
  checkedTickets = [];
  actionMenu = [];
  onClickParent: any;
  arrayActions = [];

  names: any;
  selectedAll: any;
  selectedNames: any;

  checkedMenu: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private plansService: PlansService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.createFormGroup();
    // this.names = [
    //   { name: 'Prashobh', selected: false },
    //   { name: 'Abraham', selected: false },
    //   { name: 'Anil', selected: false },
    //   { name: 'Sam', selected: false },
    //   { name: 'Natasha', selected: false },
    //   { name: 'Marry', selected: false },
    //   { name: 'Zian', selected: false },
    //   { name: 'karan', selected: false },
    // ]
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }

  ngOnInit() {
    this.isLoading = false;
    this.plansService.getModules().subscribe((data) => {
      this.isLoading = true;
      this.modules = data;
     this.apps = this.modules.data.map(item => item.apps.name).filter((v, i, a) => a.indexOf(v) === i);

      console.log(this.modules, "modules");
    })
  }

  checkMenu(idxMenu: number, idxAction: number, isChecked: boolean) {
    this.arrayActions = [];

    this.modules.data[idxMenu].isChecked = isChecked;
    if(idxAction > -1){
      this.modules.data[idxMenu].menus[idxAction].menuActions.map(action => {
        this.arrayActions.push(action.id)
      });
      console.log("idxAction triggered");
    } else {
      this.modules.data[idxMenu].menus.map(menu => menu.menuActions.map(action => {
        this.arrayActions.push(action.id)}));
    }

    const firstIndex: String = this.arrayActions[0];

    if (this.arrayActions.length > 0) {
      if (isChecked) {
        this.actionMenu.push(this.arrayActions);
      } else {
        const idx = this.actionMenu.findIndex(item => item.includes(firstIndex));
        if (idx > -1) {
          this.actionMenu.splice(idx, 1);
        }
        console.log(idx, "idx");
      }
    }

    console.log(this.actionMenu,"actionMenuInside");
    console.log(this.modules.data[idxMenu].isChecked,"menuSelected");
  }

  checkAll(idxMenu, isChecked){
    this.checkMenu(idxMenu, -1, isChecked);
  }

  // selectAll() {
  //   this.selectedAll = !this.selectedAll;
  //   console.log(this.selectedAll, "selectAll()");
  //   for (var i = 0; i < this.names.length; i++) {
  //     this.names[i].selected = this.selectedAll;
  //   }
  // }
  // checkIfAllSelected() {
  //   var totalSelected = 0;
  //   for (var i = 0; i < this.names.length; i++) {
  //     if (this.names[i].selected) totalSelected++;
  //   }
  //   this.selectedAll = totalSelected === this.names.length;

  //   return true;
  // }

  onCheck(evt) {
    // for (let i = 0; i < this.modules.data.length; i++) {
    //   if(this.modules.data[i].id == evt){
    //     if(this.checkedTickets.includes(evt)){
    //       var index = this.checkedTickets.indexOf(this.modules.data[i].id);
    //       if (index > -1) {
    //         this.checkedTickets.splice(index, 1);
    //       }
    //       for(let k=0; k < this.modules.data[i].menus.length; k++){
    //         for(let l=0; l < this.modules.data[i].menus[k].menuActions.length; l++){
    //           var index = this.checkedTickets.indexOf(this.modules.data[i].menus[k].menuActions[l].idMenuAction[0]);
    //           if (index > -1) {
    //             this.checkedTickets.splice(index, 1);
    //           }
    //         }
    //         var index = this.checkedTickets.indexOf(this.modules.data[i].menus[k].id);
    //         if (index > -1) {
    //           this.checkedTickets.splice(index, 1);
    //         }
    //       }
    //     } else {
    //       this.checkedTickets.push(this.modules.data[i].id)
    //       for(let k=0; k < this.modules.data[i].menus.length; k++){
    //         for(let l=0; l < this.modules.data[i].menus[k].menuActions.length; l++){
    //           this.checkedTickets.push(this.modules.data[i].menus[k].menuActions[l].idMenuAction[0]);
    //         }
    //         this.checkedTickets.push(this.modules.data[i].menus[k].id)
    //       }
    //     }
    //   }
    //   for(let o = 0; o < this.modules.data[i].menus.length; o++){
    //     if(this.modules.data[i].menus[o].id == evt){
    //       if(this.checkedTickets.includes(evt)){
    //         var index = this.checkedTickets.indexOf(this.modules.data[i].menus[o].id);
    //         if (index > -1) {
    //           this.checkedTickets.splice(index, 1);
    //         }
    //         for(let l=0; l < this.modules.data[i].menus[o].menuActions.length; l++){
    //           var index = this.checkedTickets.indexOf(this.modules.data[i].menus[o].menuActions[l].idMenuAction[0]);
    //           if (index > -1) {
    //             this.checkedTickets.splice(index, 1);
    //           }
    //         }
    //       } else {
    //         this.checkedTickets.push(this.modules.data[i].menus[o].id)
    //         for(let l=0; l < this.modules.data[i].menus[o].menuActions.length; l++){
    //           this.checkedTickets.push(this.modules.data[i].menus[o].menuActions[l].idMenuAction[0]);
    //         }
    //       }
    //     }
    //     for(let x = 0; x < this.modules.data[i].menus[o].menuActions.length; x++){
    //       if(this.modules.data[i].menus[o].menuActions[x].idMenuAction[0] == evt){
    //         if(this.checkedTickets.includes(evt[0])){
    //           var index = this.checkedTickets.indexOf(this.modules.data[i].menus[o].menuActions[x].idMenuAction[0]);if (index > -1) {
    //               this.checkedTickets.splice(index, 1);
    //           }
    //         } else {
    //           this.checkedTickets.push(this.modules.data[i].menus[o].menuActions[x].idMenuAction[0])
    //         }
    //       }
    //     }
    //   }
    // }
    // console.log(this.checkedTickets)
  }
  validation() {
    // for(let i = 0; i < this.modules.data.length; i++) {
    //   if(this.checkedTickets.includes(this.modules.data[i].id)){
    //     var index = this.checkedTickets.indexOf(this.modules.data[i].id);
    //     if (index > -1) {
    //       this.checkedTickets.splice(index, 1);
    //     } 
    //   }
    //   if(this.modules.data[i].menus == undefined){
    //   } else {
    //     for(let a = 0; a < this.modules.data[i].menus.length; a++){
    //       if(this.checkedTickets.includes(this.modules.data[i].menus[a].id)){
    //         var index = this.checkedTickets.indexOf(this.modules.data[i].menus[a].id);
    //         if (index > -1) {
    //           this.checkedTickets.splice(index, 1);
    //         } 
    //       }
    //     }
    //   }
    // }
  }

  nodeParentClick(data) {
    this.onClickParent = data
    console.log('hello', this.onClickParent)
  }

  submit() {
    console.log(this.actionMenu.join().split(","), "array");
    this.validation()
    this.formReady.get("actionMenu")
      .patchValue(this.actionMenu.join().split(","))
    this.plansService.postPlans(this.formReady.value).toPromise().then((data: any) => {
      console.log(JSON.parse(data).success)
      if (JSON.parse(data).success === true) {
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
