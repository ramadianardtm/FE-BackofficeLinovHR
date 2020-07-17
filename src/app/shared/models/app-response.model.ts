/**
 * Default application response JSON data
 *
 * status     : status from server. Usually, it same with httpStatus
 * message    : message from server
 * data       : payload data
 * httpStatus : Http status code from server
 *
 * Ex:
 *  {
 *    "status"     : 200,
 *    "message"    : "Data saved successfully!",
 *    "data"       : {"id" : 3, "name" : "It's example"},
 *    "httpStatus" : 200
 *  }
 */

export class AppResponse {
    data: any;
    count: number;

    constructor(obj?: any) {
        this.data = (obj && obj.data) || '';
    }

    getData() {
        return this.data;
    }

    setData(data: any) {
        this.data = data;
    }
}
