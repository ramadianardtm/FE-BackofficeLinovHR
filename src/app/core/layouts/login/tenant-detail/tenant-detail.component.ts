import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TenantService } from '../../../services/tenant.service';
import { LazyLoadEvent, MessageService, ConfirmationService } from 'primeng/api';
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
import { PlansService } from '../../../services/plans.service';
@Component({
  selector: 'app-tenant-detail',
  templateUrl: './tenant-detail.component.html',
  styleUrls: ['./tenant-detail.component.scss']
})
export class TenantDetailComponent implements OnInit {

  href: string = "";
  lastURI: string ="";
  tenantDetail: any = {};
  companyTenant: any ={};
  menuActionList: any = {};
  tempNameCode: string = "";
  closeResult = '';
  companyData: any;
  display: boolean = false;
  displayAddCompany: boolean = false;

  // form edit company
  formReady: FormGroup;
  dateFormats:any[];
  currencies:any[];
  languages:any[];

  //form add company
  formReadyAddCompany: FormGroup;

  //form edit plans
  displayEditPlans: boolean = false;
  formReadyEditPlans: FormGroup;
  checkedTickets = [];
  actionMenu =[];
  isLoading: boolean;
  plansData: any = {};
  modules:any;

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private tenantService: TenantService,
    private route : ActivatedRoute,
    private messageService: MessageService,
    private plansService: PlansService,
    ) { 
      this.createFormGroup()
      this.createAddCompanyFormGroup()
      this.createFormGroupEditPlans()
    }

    ngOnInit() {
      this.href = this.router.url;
      this.lastURI = this.href.split('/').pop();
      this.tenantService.getLang().subscribe((data: any)=>{
        this.languages = data;
      })  
      this.tenantService.getDateFormats().subscribe((data: any)=>{
        this.dateFormats = data;
      })  
      this.tenantService.getCurrencies().subscribe((data: any)=>{
        this.currencies = data;
      })  
      this.tenantService.sendGetTenantDetailServices(this.lastURI).subscribe(
        (res:any)=>{

          this.companyTenant = res.data.company
          this.menuActionList = res.data.subPlans.module
          this.tempNameCode = `Name: ${res.data.subPlans.name} / ${res.data.subPlans.code}`
          this.tenantDetail = res.data
          this.plansData = res.data
          for (let i = 0; i < this.plansData.subPlans.module.length; i++) {
            for(let j = 0; j < this.plansData.subPlans.module[i].menus.length; j++) {
              for(let k = 0; k < this.plansData.subPlans.module[i].menus[j].menuActions.length; k++) {
                console.log('menuActions', this.plansData.subPlans.module[i].menus[j].menuActions[k].id)
                this.checkedTickets.push(this.plansData.subPlans.module[i].menus[j].menuActions[k].id);
              }
              console.log('menus', this.plansData.subPlans.module[i].menus[j].id)
              this.checkedTickets.push(this.plansData.subPlans.module[i].menus[j].id);
            }
            console.log('module', this.plansData.subPlans.module[i].id)
            this.checkedTickets.push(this.plansData.subPlans.module[i].id);
          }
        }
      )
      
      this.plansService.getModules().subscribe((data)=>{
        if(data) {
            this.isLoading = true;
            this.modules = data;
            console.log(this.modules,"MODULE");
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

    createFormGroupEditPlans() {
      this.formReadyEditPlans = this.formBuilder.group({
        id: [""],
        actionMenu: [""],
      });
    }

    submitEditPlans(){
      this.validation()
      this.actionMenu = this.checkedTickets
      this.formReadyEditPlans.get("id").patchValue(this.tenantDetail.subPlans.id)
      this.formReadyEditPlans.get("actionMenu").patchValue(this.actionMenu)
      console.log('this.formReadyEditPlans.value', this.formReadyEditPlans.value)
      this.tenantService.updateTenantPlans(this.formReadyEditPlans.value).subscribe(
        (data:any)=>{
          console.log(JSON.parse(data))
          this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Melakukan Update Plans Company' });
          this.reloadCurrentRoute()
        }
      )  
    }

    createAddCompanyFormGroup(){
      this.formReadyAddCompany = this.formBuilder.group({
        tenantId: [""],
        subplanId: [""],
        name: [""],
        taxNamber: [""],
        languageDefault: [""],
        dateFormat: [""],
        curency: [""],
        address: [""],
        postalCode: [""],
        phone: [""],
      });
    }

    createFormGroup() {
      this.formReady = this.formBuilder.group({
        id: [""],
        name: [""],
        companyTaxNumber: [""],
        phone: [""],
        tenantId: [""],
        languageDefaultIDBefore: [""],
        languageDefaultIDAfter: [""],
        dateFormatIDBefore: [""],
        dateFormatIDAfter: [""],
        curremcyIDBefore: [""],
        curremcyIDAfter: [""],
        companyAddresses: this.formBuilder.group({
          id: [''],
          name: [''],
          description: [''],
          address: [''],
          postalCode: [''],
          latitude: [''],
          longitude: ['']
        }),
      });
    }

    onPatchForm(res){
      this.formReady.patchValue(res)
    }

    reloadCurrentRoute() {
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
    }

    submitEditMenu(){
      this.tenantService.updateCompany(this.formReady.value).subscribe(
        (data:any)=>{
          console.log(JSON.parse(data).success)
          if(JSON.parse(data).success === true){
            this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Mengubah Company' });
            this.reloadCurrentRoute()
          } else {
            this.messageService.add({ severity: 'error', summary: 'Gagal', detail: 'Gagal Mengubah Company' });
          }
        }
      )  
    }

    submitAddCompanny(){
      this.formReadyAddCompany.get("tenantId").patchValue(this.route.snapshot.params.uuid)
      this.formReadyAddCompany.get("subplanId").patchValue(this.tenantDetail.subPlans.id)
      this.tenantService.createCompany(this.formReadyAddCompany.value).subscribe(
        (data:any)=>{
          console.log(JSON.parse(data))
          this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Menambahkan Company' });
          this.reloadCurrentRoute()
        }
      )  
    }
  

  reports(){
    this.tenantService.getReports(this.route.snapshot.params.uuid).subscribe(
      (res:any)=>{
        let pdfWindow = window.open("")
        pdfWindow.document.write(
            "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
            encodeURI(res.file) + "'></iframe>"
        )
      }
    )  
  }

  editPlans(){
    this.displayEditPlans=true;
  }
  addCompany(){
    this.displayAddCompany = true;
  }

  changeCompany(item){
    this.companyData = item;
    console.log(item)
    this.onPatchForm(item);
    this.formReady.get("tenantId").patchValue(this.route.snapshot.params.uuid)
    this.formReady.get("languageDefaultIDBefore").patchValue(item.generalCompanies[2].lovGnty.id)
    this.formReady.get("languageDefaultIDAfter").patchValue(item.generalCompanies[2].lovGnty.id)
    this.formReady.get("dateFormatIDBefore").patchValue(item.generalCompanies[1].lovGnty.id)
    this.formReady.get("dateFormatIDAfter").patchValue(item.generalCompanies[1].lovGnty.id)
    this.formReady.get("curremcyIDBefore").patchValue(item.generalCompanies[0].lovGnty.id)
    this.formReady.get("curremcyIDAfter").patchValue(item.generalCompanies[0].lovGnty.id)
    this.display = true;
  }


  deactiveCompany(uid){
    this.tenantService.deactiveCompany(uid).subscribe(
      (data:any)=>{
        console.log(JSON.parse(data).success)
        if(JSON.parse(data).success === true){
          this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Melakukan Deactive Company' });
          this.reloadCurrentRoute()
        } else {
          this.messageService.add({ severity: 'error', summary: 'Gagal', detail: 'Gagal Melakukan Deactive Company' });
        }
      }
    )  
  }

  deleteCompany(item){
    this.tenantService.deleteCompany(item).subscribe(
      (data:any)=>{
        console.log(JSON.parse(data).success)
        if(JSON.parse(data).success === true){
          this.messageService.add({ severity: 'success', summary: 'Berhasil', detail: 'Berhasil Melakukan Delete Company' });
          this.reloadCurrentRoute()
        } else {
          this.messageService.add({ severity: 'error', summary: 'Gagal', detail: 'Gagal Melakukan Delete Company' });
        }
      }
    )  
  }

}
