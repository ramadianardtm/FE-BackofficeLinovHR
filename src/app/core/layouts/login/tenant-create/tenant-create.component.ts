import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Form } from '@angular/forms';
import { RegisterTenantService } from '../shared/register-tenant-service';
import { database } from 'faker';
import { Session } from 'app/shared/models/session.interface';
import { MessageService } from 'primeng/api';
import { AppConstant } from 'app/configs/app.config';
import { AuthenticationService } from 'app/core/authentication/authentication.service';
import { ApiService } from 'app/core/http/api.service';
@Component({
  selector: 'app-tenant-create',
  templateUrl: './tenant-create.component.html',
  styleUrls: ['./tenant-create.component.scss']
})
export class TenantCreateComponent implements OnInit {

  login = false
  inquiry: string = '';
  formReady: FormGroup;
  modules: any[] = [];
  selected: any[] = ["0e907e82-f24d-4180-81fd-7fb5d30f9663", "f0ab790a-dda5-4357-baf5-1eba2f2a540f", "bdc2663d-cf88-4255-ac13-16ff44a00a4d"];
  uri: any[] = [{ url: 'register/languages', label: 'Default Languages' }, { url: 'register/date-formats', label: 'Date Format' }, { url: 'register/currencies', label: "Currency" }]

  constructor(private router: Router, private formBuilder: FormBuilder, private regis: RegisterTenantService,
    private messageService: MessageService,
    private authService: AuthenticationService,
    private apiService: ApiService,
  ) {
    this.createFormGroup()
  }

  ngOnInit() {
    this.regis.getLovModules().subscribe(res => {
      this.modules = res;
    })
  }
  createFormGroup() {
    this.formReady = this.formBuilder.group({
      tenantName: [''],
      email: [''],
      startDate: [new Date()],
      endDate: [new Date()],
      companies: this.formBuilder.array([this.createFormCompanies()]),
      modules: [this.selected]
    })
  }

  showSuccess(message) {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: message });
  }

  doLogin() {

    this.user.isEss = false;
    this.user.applicationId = AppConstant.applicationId;

    this.apiService.postLogin('login', this.user).subscribe(
      (resp) => {
        this.authService.createSession(resp);
        console.log('resp login', resp);
        // this._connect();
        // this.socket.connect.subscribe((res) => {
        //     this._connect()
        // }
        // );
        // this.socket.disconnect.subscribe((res) => {
        //     this._disconnect();
        // })

        //get general setting
        const currCompanyId = this.authService.getSession().selectedCompanyId;
        this.apiService.get('company/' + currCompanyId).subscribe((resp) => {
          console.log("company", resp);
          this.authService.createGeneralSetting(resp);
        })

        this.router.navigate(['/dashboard']);
      })

  }

  createFormCompanies() {
    return this.formBuilder.group({
      company: this.formBuilder.group({
        name: [''],
        companyTaxNumber: ['000000000000000']
      }),
      lovGnty: this.formBuilder.array([this.formBuilder.group({ id: '' }), this.formBuilder.group({ id: '' }), this.formBuilder.group({ id: '' })])
    })
  }
  displayBasic: boolean = false
  user: any;
  saveTenant() {
    let mddata = []
    const formValue = this.formReady.value
    for (let item of formValue.modules) {
      mddata.push({ id: item })
    }
    formValue.modules = mddata

    this.regis.saveTenat(formValue).subscribe(res => {
      this.showSuccess("Tenant Registered Succes")
      this.user = JSON.parse(res)
      this.displayBasic = true
      this.formReady.reset()
    })

  }

  search() {
    this.router.navigate(['/home/job-vacancy-nonuser'], { queryParams: { inquiry: this.inquiry } });
    console.log(this.inquiry);

  }

  addCompany() {
    let comp = this.formReady.controls.companies as FormArray
    comp.push(this.createFormCompanies())
  }

  onSelectRef1(event, i, j) {
    console.log("haiaia", event);

    let recCompanies = this.formReady.controls.companies as FormArray
    let companies = recCompanies.controls[i] as FormGroup
    let general = companies.controls.lovGnty as FormArray
    let general0 = general.controls[j] as FormGroup
    general0.get("id").patchValue(event.key)

  }

}
