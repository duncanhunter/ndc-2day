import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CompanyService } from "../company.service";

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyId: any;
  isNewCompany: boolean;
  companyForm: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
      this.companyId = this.activatedRoute.snapshot.params['id'];
      this.isNewCompany = this.companyId == 'new';
      this.buildForm();

      if(!this.isNewCompany){
        //load the company record
        this.getCompany();
      }
  }
  getCompany(){
    this.companyService.getCompany(this.companyId)
      .subscribe(company => {
        this.companyForm.patchValue(company);
      });
  }
  buildForm(){
    this.companyForm = this.fb.group({
      name: ['',Validators.required],
      phone: [''],
      email: ['', , ]
    });
  }
  saveCompany(){
      console.log('save company called');
      if(this.isNewCompany){
        this.companyService.addCompany(this.companyForm.value)
        .subscribe(() => this.router.navigate(['/company/list']));
      } else {
        const newCompany = { ...this.companyForm.value, id: this.companyId };
        this.companyService.updateCompany(newCompany)
        .subscribe(() => this.router.navigate(['/company/list']));
      }
  }

}
