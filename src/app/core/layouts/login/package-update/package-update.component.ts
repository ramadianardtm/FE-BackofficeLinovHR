import { map } from 'jquery';
import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
import { PlansService } from '../../../services/plans.service';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-package-update',
  templateUrl: './package-update.component.html',
  styleUrls: ['./package-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PackageUpdateComponent implements OnInit, OnChanges {
  formReady: FormGroup;
  formPackage: FormGroup;
  checkedTickets = [];
  actionMenu = [];
  isLoading: boolean;
  href: string = "";
  lastURI: string = "";
  plansData: any;
  modules: any;

  selectedModules: any[];
  arrayActions = [];

  apps: any;
  results: any[];

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

    forkJoin([this.plansService.getPlanDetailServices(this.lastURI), this.plansService.getModules()]).subscribe(results => {
      this.plansData = results[0];
      this.modules = results[1].data;
      this.selectedModules = this.plansData.module;

      this.compareSelectedModules(this.modules, this.selectedModules)
    })
  }

  compareSelectedModules(originModules, selectedModules) {
    console.log(originModules);
    console.log(selectedModules, "selectedModule");

    this.apps = originModules.map(item => item.apps.name).filter((v, i, a) => a.indexOf(v) === i);

    const modulId = selectedModules.map(({ id }) => { return id });
    const menuId = selectedModules.map(({ menus }) => menus.map(menu => { return menu.id }));
    const menuIdJoin = menuId.join().split(",");

    console.log(modulId, "modulId");

    this.results = originModules.map(module => {
      const isModuleSelected = modulId.includes(module.id)

      if (isModuleSelected) {
        module.menus.map(menu => {
          const isMenuSelected = menuIdJoin.includes(menu.id);
          menu.isMenuSelected = isMenuSelected;
        })
        return { ...module, isModuleSelected }
      } else {
        return { ...module };
      }
    })
  }

  checkMenu(idxMenu: number, idxAction: number, isChecked: boolean) {
    this.arrayActions = [];

    this.modules[idxMenu].menus[idxAction].menuActions.map(action => {
      this.arrayActions.push(action.id)
    });

    const firstIndex: String = this.arrayActions[0];
    if (this.arrayActions.length > 0) {
      if (isChecked) {
        this.actionMenu.push(this.arrayActions);
      } else {
        const idx = this.actionMenu.findIndex(item => item.includes(firstIndex));
        if (idx > -1) {
          this.actionMenu.splice(idx, 1);
        }
      }
    }

    console.log(this.arrayActions, "name : ")
    console.log(this.actionMenu, "action");
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

    let all = [
      {
        "id": "1430f951-5917-4cb1-8df0-81e39d5add38",
        "updatedAt": "2019-09-24T06:56:10.000+0000",
        "version": 0,
        "code": "PE",
        "name": "Payroll",
        "sortOrder": 6,
        "menus": [
          {
            "id": "78e7cbfa-423d-49bb-9d75-010f69cb6e4e",
            "updatedAt": "2020-01-14T09:11:02.000+0000",
            "version": 0,
            "code": "PEP01",
            "name": "Payslip",
            "parent": "def32238-43f1-468c-a747-5c71c5cea424",
            "level": 1,
            "sortOrder": 1,
            "menuActions": [
              {
                "id": "2737920d-e64f-41a6-b605-23d135d20fef",
                "updatedAt": "2020-02-05T07:28:36.000+0000",
                "version": 0,
                "code": "PEP0102",
                "name": "Add"
              },
              {
                "id": "27b598d3-5ad6-47c1-9e5f-54835fc45262",
                "updatedAt": "2020-02-05T07:28:36.000+0000",
                "version": 0,
                "code": "PEP0104",
                "name": "Edit"
              },
              {
                "id": "477bbfe7-4a83-465d-8312-e8305f0a4819",
                "updatedAt": "2020-02-05T07:28:36.000+0000",
                "version": 0,
                "code": "PEP0101",
                "name": "View"
              },
              {
                "id": "80e2a8e5-53c5-4eab-be15-15c88d5e33f6",
                "updatedAt": "2020-02-05T07:28:36.000+0000",
                "version": 0,
                "code": "PEP0103",
                "name": "Delete"
              }
            ],
            "child": null
          }
        ],
        "apps": {
          "id": "5e8813da-6f7d-40d0-b0f5-2511318e5882",
          "updatedAt": null,
          "version": 0,
          "isActive": true,
          "code": "WESS",
          "name": "WEB-ESS"
        }
      },
      {
        "id": "7a2e133c-5bf0-4c93-a19d-6f91d59e2e84",
        "updatedAt": "2019-09-24T06:56:10.000+0000",
        "version": 0,
        "code": "TC",
        "name": "Tax Calculator",
        "sortOrder": 98,
        "menus": [
          {
            "id": "46f99dd7-b661-438b-86f6-6b03023072c7",
            "updatedAt": "2020-11-12T07:02:20.155+0000",
            "version": 0,
            "code": "TCC",
            "name": "Tax Calculator",
            "parent": null,
            "level": 0,
            "sortOrder": 0,
            "menuActions": [
              {
                "id": "6ddaad09-5b06-49d2-a416-a88de28790c8",
                "updatedAt": "2020-11-12T07:04:50.097+0000",
                "version": 0,
                "code": "TCC01",
                "name": "View"
              }
            ],
            "child": null
          }
        ],
        "apps": {
          "id": "e507789e-80bd-4560-b926-260b7d47634f",
          "updatedAt": null,
          "version": 0,
          "isActive": true,
          "code": "WADM",
          "name": "WEB-ADM"
        }
      },
      {
        "id": "903ffe91-177e-4d31-9ea0-a36207bfcee6",
        "updatedAt": "2019-09-24T06:56:10.000+0000",
        "version": 0,
        "code": "TS",
        "name": "Tax Simulation",
        "sortOrder": 99,
        "menus": [
          {
            "id": "eec4d554-4861-43bd-b0e9-2f4f8fc87c12",
            "updatedAt": "2020-11-12T07:41:49.093+0000",
            "version": 0,
            "code": "TSS",
            "name": "Tax Simulation",
            "parent": null,
            "level": 0,
            "sortOrder": 0,
            "menuActions": [
              {
                "id": "f08d1222-1373-4c98-ae0b-b81130ceecbd",
                "updatedAt": "2020-11-12T07:43:26.746+0000",
                "version": 0,
                "code": "TSS01",
                "name": "View"
              }
            ],
            "child": null
          }
        ],
        "apps": {
          "id": "e507789e-80bd-4560-b926-260b7d47634f",
          "updatedAt": null,
          "version": 0,
          "isActive": true,
          "code": "WADM",
          "name": "WEB-ADM"
        }
      }
    ];

    let own = [
      {
        "id": "903ffe91-177e-4d31-9ea0-a36207bfcee6",
        "updatedAt": "2019-09-24T06:56:10.000+0000",
        "version": 0,
        "code": "TS",
        "name": "Tax Simulation",
        "sortOrder": 99,
        "menus": [
          {
            "id": "eec4d554-4861-43bd-b0e9-2f4f8fc87c12",
            "updatedAt": "2020-11-12T07:41:49.093+0000",
            "version": 0,
            "code": "TSS",
            "name": "Tax Simulation",
            "parent": null,
            "level": 0,
            "sortOrder": 0,
            "menuActions": [
              {
                "id": "f08d1222-1373-4c98-ae0b-b81130ceecbd",
                "updatedAt": "2020-11-12T07:43:26.746+0000",
                "version": 0,
                "code": "TSS01",
                "name": "View"
              }
            ],
            "child": null
          }
        ],
        "apps": {
          "id": "e507789e-80bd-4560-b926-260b7d47634f",
          "updatedAt": null,
          "version": 0,
          "isActive": true,
          "code": "WADM",
          "name": "WEB-ADM"
        }
      }
    ];
    this.validation()
    console.log(this.actionMenu);
    this.formReady.get("actionMenu")
      .patchValue(this.actionMenu.join().split(","))
    console.log(this.formReady.value, 'form')
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
