import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
import { PlansService } from '../../../services/plans.service';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
@Component({
  selector: 'app-package-update',
  templateUrl: './package-update.component.html',
  styleUrls: ['./package-update.component.scss'],
})

export class PackageUpdateComponent implements OnInit, OnChanges {
  formReady: FormGroup;
  formPackage: FormGroup;
  checkedTickets = [];
  actionMenu = [];
  actionMenuCache = [];
  actionResults = [];
  isLoading: boolean;
  href: string = "";
  lastURI: string = "";
  plansData: any;
  modules: any;

  selectedModules: any[];
  arrayActions = [];

  apps: any;
  results: any[];

  isRendered: boolean = true;
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

  ngOnInit(): void {
    this.isLoading = false;
    this.href = this.router.url;
    this.lastURI = this.href.split('/').pop();

    this.formReady.get("id").patchValue(this.lastURI)

    this.plansService.getApps().subscribe(data => {
        this.isRendered = true;
        this.apps = data;
        console.log(this.apps, "newApp");
    });

    forkJoin([this.plansService.getPlanDetailServices(this.lastURI), this.plansService.getModules()]).subscribe(results => {
      this.plansData = results[0];
      this.modules = results[1].data;
      this.selectedModules = this.plansData.module;

      this.compareSelectedModules(this.modules, this.selectedModules)
    })
  }

  compareSelectedModules(originModules, selectedModules) {
    const modulId = selectedModules.map(({ id }) => { return id });
    const menuId = selectedModules.map(({ menus }) => menus.map(menu => { return menu.id }));
    const menuIdJoin = menuId.join().split(",");

    this.results = originModules.map(module => {
      const isChecked = modulId.includes(module.id)

      if (isChecked) {
        module.menus.map(menu => {
          const isChecked = menuIdJoin.includes(menu.id);
          menu.isChecked = isChecked;

          if (menu.isChecked) {
            menu.menuActions.map(action => {
              this.actionMenuCache.push(action.id);
            })
          }
        })
        
        return { ...module, isChecked }
      } else {
        return { ...module };
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
        this.results.map(modul => {
          modul.isChecked = isChecked;
          modul.menus.map(menu => menu.menuActions.map(action => {
            action.isChecked = isChecked;
            this.arrayActions.push(action.id);
          }));
        });
        this.proccesToArray(this.arrayActions, isChecked, isChecked);
        break;
      case "MODULE":
        this.results[idxModule].isChecked = isChecked;
        this.results[idxModule].menus.map(menu => {
          menu.menuActions.map(action => {
            action.isChecked = isChecked;
            this.arrayActions.push(action.id);
          });
        });
        this.proccesToArray(this.arrayActions, isChecked, isChecked);
        break;

      case "MENU":
        this.results[idxModule].menus[idxMenu].menuActions.map(action => {
          action.isChecked = isChecked;
          this.arrayActions.push(action.id)
        });
        this.proccesToArray(this.arrayActions, isChecked, isChecked);
        break;

      default:
        this.arrayActions = []
        break;
    }
    
  }

  proccesToArray(arrayAct: any[], isChecked: boolean, isUpdate?: boolean) {
    // actionMenuCache === actionMenu

    //if remove checkbox
    this.actionResults = this.actionMenuCache;
    if(!isUpdate) {
      this.actionResults = this.actionMenuCache.filter(item => {
        if (arrayAct.indexOf(item) == -1 ) return item;
      })
    }

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
    // for (let i = 0; i < this.modules.data.length; i++) {
    //   if (this.checkedTickets.includes(this.modules.data[i].id)) {
    //     var index = this.checkedTickets.indexOf(this.modules.data[i].id);
    //     if (index > -1) {
    //       this.checkedTickets.splice(index, 1);
    //     }
    //   }
    //   if (this.modules.data[i].menus == undefined) {
    //   } else {
    //     for (let a = 0; a < this.modules.data[i].menus.length; a++) {
    //       if (this.checkedTickets.includes(this.modules.data[i].menus[a].id)) {
    //         var index = this.checkedTickets.indexOf(this.modules.data[i].menus[a].id);
    //         if (index > -1) {
    //           this.checkedTickets.splice(index, 1);
    //         }
    //       }
    //     }
    //   }
    // }
  }

  submit() {
    this.validation()
    this.actionMenu.push(this.actionResults)
    let arraySplit = this.actionMenu.join().split(",");
    let actMenu = arraySplit.filter(function (item, pos) {
      return arraySplit.indexOf(item) == pos
    });

    this.formReady.get("actionMenu")
    .patchValue(actMenu)
    console.log(this.formReady.value);
    this.plansService.updatePlans(this.formReady.value).toPromise().then((data: any) => {
      console.log(data.success)
      if (JSON.parse(data).success === true) {
        this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Mengubah data' });
        this.router.navigate([`home/package`])
      } else {
        this.messageService.add({ severity: 'error', summary: 'Gagal', detail: 'Gagal Mengubah data' });
      }
    })
  }



  onPatchForm(res) {
    this.formReady.patchValue(res)
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
