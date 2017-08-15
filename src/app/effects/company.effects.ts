
import { Injectable } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as companyActions from './../actions/company.actions';

@Injectable()
export class CompanyEffects {

    @Effect() loadCompanies$ = this.actions$
        .ofType(companyActions.LOAD_COMPANIES)
        .switchMap(() => {
            return this.companyService.loadCompanies()
                .map(companies => (new companyActions.LoadCompaniesSuccess(companies)))
                .catch(() => of(new companyActions.LoadCompaniesError()));
        });

    @Effect() deleteCompany$ = this.actions$
        .ofType(companyActions.DELETE_COMPANY)
        .map(toPayload)
        .switchMap(companyId => {
            return this.companyService.deleteCompany(companyId)
                .map(company => (new companyActions.DeleteCompanySuccess(company.id)))
                .catch(() => of(new companyActions.DeleteCompanyError()));
        });

    constructor(
        private actions$: Actions,
        private companyService: CompanyService
    ) { }
}