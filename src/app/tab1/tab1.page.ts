import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  contacts :any;
  constructor() {
    this.contacts = [{"name":"harish","num":"32423423424"},{"name":"harish","num":"32423423424"},{"name":"harish","num":"32423423424"},{"name":"harish","num":"32423423424"},{"name":"harish","num":"32423423424"},{"name":"harish","num":"32423423424"}]
  }

}
