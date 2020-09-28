import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
import { RegisterTenantService } from "../shared/register-tenant-service";
import { MessageService } from "primeng/api";
import { AppConstant } from "app/configs/app.config";
import { AuthenticationService } from "app/core/authentication/authentication.service";
import { ApiService } from "app/core/http/api.service";
import { modules_radio } from "./json-modules";
import { TenantService } from '../../../services/tenant.service';

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
  plansData:any[];

  constructor(
    private formBuilder: FormBuilder,
    private tenantService: TenantService,
  ) {
    this.createFormGroup();
  }

  ngOnInit() {
    this.tenantService.getLang().subscribe((data: any)=>{
      this.languages = data;
    })  
    this.tenantService.getDateFormats().subscribe((data: any)=>{
      this.dateFormats = data;
    })  
    this.tenantService.getCurrencies().subscribe((data: any)=>{
      this.currencies = data;
    })  
    this.tenantService.getPlans().subscribe((data: any)=>{
      this.plansData = data;
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
      tenantName: [""],
      email: [""],
      startDate: [new Date()],
      endDate: [new Date()],
      company: this.formBuilder.array([this.createFormCompanies()]),
      plans:[""],
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
      companyPosition:[""],
    });
  }
}