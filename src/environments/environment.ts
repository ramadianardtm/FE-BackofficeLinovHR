// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: 'http://api-dev-bo.linovhr.com/api/v1/',
 //   apiUrl: 'http://192.168.15.69:8080/api/v1/',
    mockApiUrl: 'http://localhost:3000/',
    reportUrl: 'http://api-dev.linovhr.com:7080/report/',
    socketUrl: 'http://api-dev4.linovhr.com:8080/linov/api/v1/socket',
    translateUrl: '/assets/i18n/',
};  

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
