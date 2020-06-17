import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'app/core/core.module';

@Component({
  selector: 'app-search-with-date',
  templateUrl: './search-with-date.component.html',
  styleUrls: ['./search-with-date.component.scss']
})
export class SearchWithDateComponent implements OnInit {

  searchValue: string;
  settingDate:any;
  constructor(
    private formBuilder: FormBuilder,
    private setting:AuthenticationService
  ) {
    this.createFormGrup();
    const { dateFormat} = this.setting.getSetting();
    this.settingDate = this.setting.getSetting().dateFormat
  }

  ngOnInit() {
  }

  today:Date = new Date();
  formBody: FormGroup;
  createFormGrup() {
    this.formBody = this.formBuilder.group({
      periodBegin: [''],
      periodEnd: [''],
      inquiry: [''],
    })
  }

  @Output() refresh = new EventEmitter<FormGroup>();
  @Output() search = new EventEmitter<FormGroup>();

  onRefresh() {
    // this.formBody.reset()
    this.refresh.emit(this.formBody);
  }

  onSearch() {
    this.search.emit(this.formBody);
  }  

  // onPosSearch() {
  //   this.store.dispatch(
  //     new GetUnprocessedTimeSheetList(
  //       new TimeDefinitionRequest().pageInfo, this.formBody.getRawValue()
  //     )
  //   );
  // }

}
