/**
 *  Construct Table Header
 *  @param  list List of Table Value
 */
export function onConstructTableValue(list: any[]) {
    list.forEach((item, index) => {
        for (let key in item) {
            // @ts-ignore
            if (
                key === 'isDefault' ||
                key === 'default' ||
                key === 'isPrimary' ||
                key === 'isEmergency'
            ) {
                if (item[key] === undefined || item[key] === null) {
                    item[key] = false;
                }
            } else {
                if (item[key] === undefined || item[key] === null) {
                    item[key] = '-';
                }
            }
        }
    });

    return list;
}
