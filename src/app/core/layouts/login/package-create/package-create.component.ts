import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
import { PlansService } from '../../../services/plans.service';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  apps: any;
  obser$: any[];
  isLoading: boolean;
  checkedTickets = [];
  actionMenu = [];
  onClickParent: any;
  arrayActions = [];

  names: any;
  checkedAll: boolean;

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
    this.plansService.getModules().subscribe(data => {
      if (data) {
        this.isLoading = true;
        this.modules = data;
        console.log(this.apps, "apps");
        console.log(this.modules.data, "data");
        this.apps = this.modules.data.map(item => item.apps.name).filter((v, i, a) => a.indexOf(v) === i);
      }
    })
  }

  checkMenu(type: String, idxModule?: number, idxMenu?: number, isChecked?: boolean) {
    this.arrayActions = [];
    switch (type) {
      case "ALL":
        while (this.actionMenu.length) {
          this.actionMenu.pop()
        }
        this.modules.data.map(modul => {
          modul.isChecked = isChecked;
          modul.menus.map(menu => menu.menuActions.map(action => {
            action.isChecked = isChecked;
            this.arrayActions.push(action.id);
          }));
        });

        this.proccesToArray(this.arrayActions, isChecked);
        break;
      case "MODULE":
        this.modules.data[idxModule].isChecked = isChecked;
        this.modules.data[idxModule].menus.map(menu => {
          menu.menuActions.map(action => {
            action.isChecked = isChecked;
            this.arrayActions.push(action.id);
          });
        });
        this.proccesToArray(this.arrayActions, isChecked);
        break;

      case "MENU":
        this.modules.data[idxModule].menus[idxMenu].menuActions.map(action => {
          action.isChecked = isChecked;
          this.arrayActions.push(action.id)
        });
        this.proccesToArray(this.arrayActions, isChecked);
        break;

      default:
        this.arrayActions = []
        break;
    }
  }

  proccesToArray(arrayAct: any[], isChecked: boolean) {
    const firstIndex: String = arrayAct[0];

    if (arrayAct.length > 0) {
      if (isChecked) {
        this.actionMenu.push(arrayAct);
      } else {
        const idx = this.actionMenu.findIndex(item => item.includes(firstIndex));
        if (idx > -1) {
          this.actionMenu.splice(idx, 1);
        }
      }
    }
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
    let arraySplit = this.actionMenu.join().split(",");
    let actMenu = arraySplit.filter(function (item, pos) {
      return arraySplit.indexOf(item) == pos
    });
    this.validation()
    this.formReady.get("actionMenu")
      .patchValue(actMenu)
    console.log(this.formReady.value, "form");
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
