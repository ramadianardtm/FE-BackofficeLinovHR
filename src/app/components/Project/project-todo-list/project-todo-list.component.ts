import { Component, OnInit } from '@angular/core';
import {ConstNameService} from '../../../services/const-name.service';

@Component({
  selector: 'app-project-todo-list',
  templateUrl: './project-todo-list.component.html',
  styleUrls: ['./project-todo-list.component.scss']
})
export class ProjectTodoListComponent implements OnInit {

  url: string;
  constructor(
    private constName: ConstNameService,
  ) { }

  ngOnInit() {
    this.url = this.constName.baseImage.file_img_url;
  }

}
