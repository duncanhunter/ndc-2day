import './core/rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company/company-list/company-list.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from './company/company.service';
import { HttpClientModule } from '@angular/common/http';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

import { StoreModule } from '@ngrx/store';
import { companyReducer } from "./reducers/company.reducer";
import {  StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CompanyEffects } from "./effects/company.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyTableComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule.forRoot(),
    HttpClientModule,
    // FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      companies: companyReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    EffectsModule.forRoot([CompanyEffects])
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
