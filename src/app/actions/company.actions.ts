import { Action } from '@ngrx/store';  
import { Company } from '../company/company';

export const LOAD_COMPANIES = '[Companies] Load';  
export const LOAD_COMPANIES_SUCCESS = '[Companies] Load Success';  
export const LOAD_COMPANIES_ERROR = '[Companies] Load Error';  
export const DELETE_COMPANY = '[Companies] Delete';  
export const DELETE_COMPANY_SUCCESS = '[Companies] Delete Success';  
export const DELETE_COMPANY_ERROR = '[Companies] Delete Error';

export class LoadCompanies implements Action {  
  readonly type = LOAD_COMPANIES;
}

export class LoadCompaniesSuccess implements Action {  
  readonly type = LOAD_COMPANIES_SUCCESS;
  constructor(public payload: Company[]) { }
}

export class LoadCompaniesError implements Action {  
  readonly type = LOAD_COMPANIES_ERROR;
}

export class DeleteCompany implements Action {  
  readonly type = DELETE_COMPANY;
  constructor(public payload: number) {}
}

export class DeleteCompanySuccess implements Action {  
  readonly type = DELETE_COMPANY_SUCCESS;
  constructor(public payload: number) { }
}

export class DeleteCompanyError implements Action {  
  readonly type = DELETE_COMPANY_ERROR;
}

export type All  
  = LoadCompanies
  | LoadCompaniesSuccess
  | LoadCompaniesError
  | DeleteCompany
  | DeleteCompanySuccess
  | DeleteCompanyError;