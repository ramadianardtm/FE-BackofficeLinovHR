import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNil } from 'lodash-es';

import { LookupTable } from 'app/shared/models/workbench-lookup-table.interface';
import { PageInfo } from 'app/shared/models/page-info.model';
import { AppResponse } from 'app/shared/models/app-response.model';

import { ApiService } from 'app/core/http/api.service';

@Injectable({
    providedIn: 'root',
})
export class RegisterTenantService {
    constructor(private api: ApiService) { }

    getLovModules() {
        return this.api.get("modules");
    }

    saveTenat(data) {
        const param = new HttpParams().set('key', '12345')

        return this.api.post("register", data, param)
    }

}