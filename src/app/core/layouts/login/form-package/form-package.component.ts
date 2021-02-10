import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlansService } from '@core-service/plans.service';

@Component({
  selector: 'app-form-package',
  templateUrl: './form-package.component.html',
  styleUrls: ['./form-package.component.scss']
})
export class FormPackageComponent implements OnInit {
  @Input() isCreateForm: boolean = true;
  @Input() isModuleOnly: boolean = true;
  @Input() plans: any;
  @Input() packageId: String;

  @Output() emitFormPackage: EventEmitter<any> = new EventEmitter<any>();

  formReady: FormGroup;
  title: String = "Create Custom Plan"

  modules: any;
  apps: any;
  arrayActionsClicked = [];
  actionMenuCache = [];
  actionMeuResults = []

  constructor(
    private formBuilder: FormBuilder,
    private plansService: PlansService
  ) { }

  ngOnInit() {
    this.createFormGroup();
    this.checkFormType();
    this.getApps();
    this.onChange();
  }

  checkFormType() {
    if (this.isCreateForm) {
      this.getModules();
    } else {
      this.title = "Update Plan"
    }
  }

  getApps(){
    this.plansService.getApps().subscribe(data => {
      this.apps = data;
    });
  }

  getModules(){
    this.plansService.getModules().subscribe(data => {
      if (data) {
        this.modules = data;
      }
    })
  }

  checkMenu(type: String, idxModule?: number, idxMenu?: number, isChecked?: boolean) {
    this.arrayActionsClicked = [];
    switch (type) {
      case "ALL":
        while (this.actionMenuCache.length) {
          this.actionMenuCache.pop()
        }
        this.modules.data.map(modul => {
          modul.isChecked = isChecked;
          modul.menus.map(menu => menu.menuActions.map(action => {
            action.isChecked = isChecked;
            this.arrayActionsClicked.push(action.id);
          }));
        });

        this.proccesToArray(this.arrayActionsClicked, isChecked);
        break;
      case "MODULE":
        this.modules.data[idxModule].isChecked = isChecked;
        this.modules.data[idxModule].menus.map(menu => {
          menu.menuActions.map(action => {
            action.isChecked = isChecked;
            this.arrayActionsClicked.push(action.id);
          });
        });
        this.proccesToArray(this.arrayActionsClicked, isChecked);
        break;

      case "MENU":
        this.modules.data[idxModule].menus[idxMenu].menuActions.map(action => {
          action.isChecked = isChecked;
          this.arrayActionsClicked.push(action.id)
        });
        this.proccesToArray(this.arrayActionsClicked, isChecked);
        break;

      default:
        this.arrayActionsClicked = []
        break;
    }
  }

  proccesToArray(arrayAct: any[], isChecked: boolean) {
    const firstIndex: String = arrayAct[0];

    if (arrayAct.length > 0) {
      if (isChecked) {
        arrayAct.map(item => {
          this.actionMenuCache.push(item)
        })
      } else {
        // const idx = this.actionMenuCache.findIndex(item => item.includes(firstIndex));
        // if (idx > -1) {
        //   this.actionMenuCache.splice(idx, 1);
        // }
        this.actionMenuCache = this.actionMenuCache.filter(item => {
          if (arrayAct.indexOf(item) == -1) {
            return item;
          }
        })
      }
    }

    this.actionMeuResults = this.actionMenuCache.filter(function (item, pos, self) {
      return self.indexOf(item) == pos
    });


    this.emitFormPackage.emit({form: this.formReady.value, actionMenuCache: this.actionMeuResults})
  }

  createFormGroup() {
    this.formReady = this.formBuilder.group({
      name: [""],
      code: [""],
      description: [""],
      actionMenu: [""],
    });
  }

  onChange(){
    this.formReady.valueChanges.subscribe(val => {
      this.emitFormPackage.emit({form: val, actionMenuCache: this.actionMenuCache})
    })
  }

}
