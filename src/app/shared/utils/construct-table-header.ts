import { TableColumn } from 'app/shared/models/table.interface';

/**
 *  Construct Table Header
 *  @param  headers List of Table Header name
 */
export function onConstructTableHeader(headers: string[]): TableColumn[] {
    const columns: TableColumn[] = [];

    headers.forEach(column => {
        columns.push({
            label: column,
            value: column,
        });
    });

    return columns;
}
