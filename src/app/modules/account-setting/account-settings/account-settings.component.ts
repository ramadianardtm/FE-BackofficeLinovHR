import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  displayDeactAcct: boolean;

  countryCode: string;
  countryCodes: string[] = ["Indonesia - ID (+62)", "Malaysia - MY (+60)", "Singapura - SG (+65)"];
  results: any[];

  timezone: string;
  timezones: string[] = ["UTC+07:00 | Jakarta, Bangkok", 
  "UTC+00:00 | London, Lisbon", 
  "UTC+01:00 | Amsterdam, Brussels", 
  "UTC+02:00 | Athens, Beirut", 
  "UTC+03:00 | Kuwait, Moscow, Turkey",
  "UTC+04:00 | Tehran",
  "UTC+05:00 | Dubai"
  ];
  resultsTimezone: any[];

  constructor() { }

  ngOnInit() {
  }

  search(event) {
    this.results = [];
    for(let i = 0; i < this.countryCodes.length; i++) {
        let brand = this.countryCodes[i];
        if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.results.push(brand);
        }
    }
  }

  searchTimezone(event) {
    this.resultsTimezone = [];
    for(let index = 0; index < this.timezones.length; index++){
      let timezone = this.timezones[index];
      if(timezone.toLowerCase().indexOf(event.query.toLowerCase()) == 0){
        this.resultsTimezone.push(timezone);
      }
    }
  }

  showDeact(){
    this.displayDeactAcct = true;
  }

}
