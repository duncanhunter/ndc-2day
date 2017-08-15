import { Company } from './../company/company';  
import { ActionReducer, Action } from '@ngrx/store';  
import * as companyActions from './../actions/company.actions';  
import { LOAD_COMPANIES_SUCCESS } from '../actions/company.actions';

export function companyReducer(state = [], action: companyActions.All) {  
  switch (action.type) {
    case companyActions.LOAD_COMPANIES_SUCCESS:
      return action.payload;
    case companyActions.DELETE_COMPANY_SUCCESS:
          return state.filter(company => company.id !== action.payload);
    default:
      return state;
  }
}