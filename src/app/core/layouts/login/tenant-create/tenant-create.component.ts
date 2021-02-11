import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
import { TenantService } from '../../../services/tenant.service';
import { PlansService } from '../../../services/plans.service';
import * as moment from 'moment';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: "app-tenant-create",
  templateUrl: "./tenant-create.component.html",
  styleUrls: ["./tenant-create.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TenantCreateComponent implements OnInit {
  formReady: FormGroup;
  index: number = 0;
  languages:any[];
  dateFormats:any[];
  currencies:any[];
  plansData: any;
  modules:any;
  isLoading: boolean;
  plansField:any[];
  actionMenu =[];
  checkedTickets = [];

  startDateAPI:any;
  endDateAPI:any;
  constructor(
    private formBuilder: FormBuilder,
    private tenantService: TenantService,
    private plansService: PlansService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.createFormGroup();
  }

  ngOnInit() {
    this.tenantService.getLang().subscribe((data: any)=>{
      this.languages = data;
      console.log(this.languages,"Languages")
    })  
    this.tenantService.getDateFormats().subscribe((data: any)=>{
      this.dateFormats = data;
      console.log(this.dateFormats,"DateFormats")
    })  
    this.tenantService.getCurrencies().subscribe((data: any)=>{
      this.currencies = data;
      console.log(this.currencies,"Currencies")
    })  
    this.tenantService.getPlans().subscribe(data=>{
      this.plansData = data.data;
      console.log(this.plansData,"plansData")
    })  
    this.plansService.getModules().subscribe((data)=>{
      if(data) {
          this.isLoading = true;
          this.modules = data;
          console.log(this.modules,"modules")
        }
    }) 
  }
  

  appToDateApiStrip(value) {
    let momentDate = moment(value).format('YYYY-MM-DD');
    return momentDate;
  }

  submit(){
    this.startDateAPI = this.appToDateApiStrip(this.formReady.value.startDateApp)
    this.endDateAPI = this.appToDateApiStrip(this.formReady.value.endDateApp)
    this.formReady.get("startDate").patchValue(this.startDateAPI)
    this.formReady.get("endDate").patchValue(this.endDateAPI)
    if(this.formReady.value.plans  === 'custom'){
      this.formReady.get('startDateApp').disable();
      this.formReady.get('endDateApp').disable();
      this.formReady.get("actionMenu").patchValue(this.actionMenu)
      this.formReady.get("plans").patchValue(null)
    } else {
      this.formReady.get('startDateApp').disable();
      this.formReady.get('endDateApp').disable();
      this.formReady.get("actionMenu").patchValue([])
    }
//    console.log(this.formReady.value)
    this.tenantService.postTenants(this.formReady.value).toPromise().then((data: any)=>{ 
      console.log(JSON.parse(data).success)
      if(JSON.parse(data).success === true){
        this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Menambah data' });
        this.router.navigate([`home/package`])
      } else {
        this.messageService.add({ severity: 'error', summary: 'Gagal', detail: 'Gagal Menambah data' });
      }
    }) 
  }

  openNext() {
    this.index = this.index === 2 ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = this.index === 0 ? 2 : this.index - 1;
  }

  addCompany() {
    let comp = this.formReady.controls.company as FormArray;
    comp.push(this.createFormCompanies());
  }

  removeCompany(i) {
    let delFOrm = this.formReady.controls["company"] as FormArray;
    delFOrm.removeAt(i);
  }

  createFormGroup() {
    this.formReady = this.formBuilder.group({
      name: [""],
      pic: [""],
      phone: [""],
      email: [""],
      startDateApp: [""],
      startDate:[""],
      endDateApp: [""],
      endDate:[""],
      company: this.formBuilder.array([this.createFormCompanies()]),
      plans:[""],
      actionMenu: [""],
    });
  }

  createFormCompanies() {
    return this.formBuilder.group({
      id: [""],
      name: [""],
      taxNamber: ["000000000000000"],
      languageDefault: ["a4dece22-e292-41bf-9330-41240f977205"],
      dateFormat: ["60b649b0-0e7c-4b21-85b9-a1ddffc9d7bd"],
      curency: ["f702fc4c-0773-4179-998d-60d1443bfe39"],
      address:[""],
      postalCode:[""],
      phone:[""],
      companyPosition:[""],
    });
  }

  emit(event) {
    console.log(event);
    this.actionMenu = [];
    event.actionMenuCache.map(item => {
      this.actionMenu.push(item)
    })
  }
}