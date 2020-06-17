import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { TableColumn } from 'app/shared/models/table.interface';

import { Paginator } from 'app/configs/paginator.config';

@Component({
    selector: 'list-table-simple',
    template: `
        <p-table
            [columns]="column"
            [value]="data"
            [paginator]="true"
            [rows]="rowsPerPage"
            [rowsPerPageOptions]="rowsPerPageOptions"
            [totalRecords]="data.length"
            [scrollable]="true"
            [style]="{ minWidth: '100%' }"
        >
            <ng-template pTemplate="colgroup" let-columns>
                <colgroup>
                    <col style="width: 3em;" />
                    <col *ngFor="let col of columns" style="width: 200px;" />
                </colgroup>
            </ng-template>
            <ng-template pTemplate="header" let-columns>
                <tr>
                    <th class="text-center" style="width: 3em;" id="checkbox">
                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                    </th>
                    <th
                        *ngFor="let column of columns"
                        class="text-center"
                        id="header"
                    >
                        {{ column.label | translate }}
                    </th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-rowData let-columns="columns">
                <tr>
                    <td>
                        <p-tableCheckbox [value]="rowData"></p-tableCheckbox>
                    </td>
                    <td *ngFor="let column of columns">
                        {{ rowData[column.value] }}
                    </td>
                </tr>
            </ng-template>
        </p-table>
    `,
})
export class TableSimpleComponent {
    @Input() column: TableColumn[];
    @Input() data: any[];

    @Input() label: string;
    @Input() item: string;

    rowsPerPage = Paginator.rowsPerPage;
    rowsPerPageOptions = Paginator.rowsPerPageOptions;

    constructor(private location: Location) {}

    /**
     *  Back to List
     *  @return void
     */
    onBack(): void {
        this.location.back();
    }
}
