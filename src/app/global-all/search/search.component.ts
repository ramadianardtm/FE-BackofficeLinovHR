import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { format as formatTgl, subYears } from 'date-fns';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue: string;
  searchStatus: any;
  status: boolean = true;
  formSearch: FormGroup
  @Input() isActive: boolean;
  @Input() isStartDate: boolean;
  @Input() isEndDate: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.formSearch = this.formBuilder.group({
      inquiry: [''],
      isActive: [true],
      startDate: [formatTgl(subYears(new Date(), 1), 'yyyy-MM-dd')],
      endDate: [formatTgl(new Date(), 'yyyy-MM-dd')]
    });
    this.searchStatus = [
      {
        label: 'Active', value: true
      },
      { label: 'Inactive', value: false }
    ]
  }


  @Output() refresh = new EventEmitter<boolean>();
  @Output() search = new EventEmitter<FormGroup>();
  @Output() searchDrop = new EventEmitter<FormGroup>();

  ngOnInit() {
    this.searchValue = "";
  }

  onRefresh() {
    this.refresh.emit(true);
    this.formSearch.patchValue({
      inquiry: "",
      isActive: true,
      startDate: formatTgl(subYears(new Date(), 1), 'yyyy-MM-dd'),
      endDate: formatTgl(new Date(), 'yyyy-MM-dd')
    })
  }

  onPosSearch() {
    this.search.emit(this.formSearch);
  }

  onSearch() {
    this.search.emit(this.formSearch);
  }

  onSelect(event: any) {
    this.search.emit(this.formSearch);
  }

}
