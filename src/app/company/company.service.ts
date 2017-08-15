import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { AppState } from "../models/appState";
import { LOAD_COMPANIES } from "../reducers/company.reducer";
import * as companyActions from './../actions/company.actions';


@Injectable()
export class CompanyService {
  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(
    private store: Store<AppState>,
    private httpClient: HttpClient) { }

  loadCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`);
  }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
      .catch(this.errorHandler);
  }
  getCompany(companyId: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_BASE}/company/${companyId}`)
      .catch(this.errorHandler);
  }
  addCompany(company: Company) {
    console.log('company service add');
    return this.httpClient.post(`${this.API_BASE}/company/`, company, { headers: new HttpHeaders().set('content-type', 'application/json') })
      .catch(this.errorHandler);
  }

  updateCompany(company: Company): Observable<Company> {

    return this.httpClient.put(`${this.API_BASE}/company/${company.id}`, company, { headers: new HttpHeaders().set('content-type', 'application/json') })
      .catch(this.errorHandler);
  }


  deleteCompany(companyId: number): Observable<Company> {
    return this.httpClient
      .delete<Company>(`${this.API_BASE}/company/${companyId}`)
      .catch(this.errorHandler);
  }


  private errorHandler(error) {
    console.log('ERROR FROM SERVICE', error);
    return Observable.throw(error);
  }

}
