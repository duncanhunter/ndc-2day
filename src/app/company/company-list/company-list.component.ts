import { Company } from './../company';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from '../company.service';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {
  companies$: Observable<Company[]>;
  mysucbscription: Subscription;
  companies: Company[];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
    // this.mysucbscription = this.companyService.getCompanies()
    //   .subscribe(next => this.companies = next);
  }

  deleteCompany(companyId: number) {
    this.companyService.deleteCompany(companyId)
      .subscribe(() => this.getCompanies());
  }

  ngOnDestroy() {
  }

}
