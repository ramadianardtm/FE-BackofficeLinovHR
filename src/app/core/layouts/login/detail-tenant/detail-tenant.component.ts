import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-tenant',
  templateUrl: './detail-tenant.component.html',
  styleUrls: ['./detail-tenant.component.scss']
})
export class DetailTenantComponent implements OnInit {
  displayModal:boolean
  categoriesWeb: any[] = [{name: 'Paket Web Hemat', key: 'A'}, {name: 'Paket Web Reguler', key: 'M'}, {name: 'Paket Web Panas', key: 'P'},{name: 'Costum', key: 'C'}];
  categoriesMobileEss :any[] = [{name: 'Paket Mobile Hemat', key: 'A'}, {name: 'Paket Mobile Reguler', key: 'M'}, {name: 'Paket Mobile Panas', key: 'P'},{name: 'Costum', key: 'C'}];
  categoriesWebEss:any[] = [{name: 'Paket WebEss Hemat', key: 'A'}, {name: 'Paket WebEss Reguler', key: 'M'}, {name: 'Paket WebEss Panas', key: 'P'},{name: 'Costum', key: 'C'}];
  constructor() { }

  ngOnInit() {
  }
  showModalDialog() {
    this.displayModal = true;
}

}
