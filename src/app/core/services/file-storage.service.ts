import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNil } from 'lodash-es';

import { PageInfo } from 'app/shared/models/page-info.model';
import { AppResponse } from 'app/shared/models/app-response.model';

import { ApiService } from 'app/core/http/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class FileStorageService {
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  saveCSV(file: File, ref: any) {
    const formData = new FormData();
    // formData.append('companyId', this.sessionService.currentCompanyId.toString());
    formData.append('ref', ref);
    formData.append('file', file, file.name);
    return this.api.postUpload('upload/payroll-setting-recurring', formData);
  }
}
