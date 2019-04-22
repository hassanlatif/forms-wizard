// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // apiBaseUri: 'http://firewhirl.lan.noggin.com.au:9999/api' //Will
  // apiBaseUri: 'http://192.168.1.149:8080/api'               //Geoff
  apiBaseUri: 'http://192.168.1.40:9999/api'                 //Will
  // apiBaseUri: 'http://192.168.1.36:9999/api'          //Naveen
  // apiBaseUri: 'http://127.0.0.1:9000/api' // localhost

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
