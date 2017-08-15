import { Company } from './../company';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from '../company.service';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { AppState } from "../../models/appState";
import { Store } from '@ngrx/store';
import * as companyActions from './../../actions/company.actions';


@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<Company[]>;
  mysucbscription: Subscription;
  companies: Company[];

  constructor(private store: Store<AppState>) {
    this.companies$ = this.store.select(s => s.companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.store.dispatch(new companyActions.LoadCompanies())
  }

  deleteCompany(companyId: number) {
    this.store.dispatch(new companyActions.DeleteCompany(companyId));
  }

}
