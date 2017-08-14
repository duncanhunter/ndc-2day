import { Company } from './../company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies: Company[];

  constructor() { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies = [
      {name: 'ssw', email: 'email@ssw.com', phone: 123},
      {name: 'ndc', email: 'email@ndc.com', phone: 123}
    ];
  }

}
