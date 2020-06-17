import { Component, OnInit } from '@angular/core';
import { ConstNameService } from 'app/services/const-name.service';
import { HomeComponent } from '../../pages/home/home.component';


@Component({
  selector: 'app-header-top-admin',
  templateUrl: './header-top-admin.component.html',
  styleUrls: ['./header-top-admin.component.scss']
})
export class HeaderTopAdminComponent implements OnInit {

  url: string;
  constructor(
    private constName: ConstNameService,
    public home: HomeComponent,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
  }

}
