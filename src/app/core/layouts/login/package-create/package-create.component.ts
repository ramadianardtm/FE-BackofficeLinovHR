import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
import { PlansService } from '../../../services/plans.service';

@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackageCreateComponent implements OnInit {
  formReady: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private plansService: PlansService,
  ) {
    this.createFormGroup();
   }

  ngOnInit() {
   
  }
  
  createFormGroup() {
    this.formReady = this.formBuilder.group({
      name: [""],
      code: [""],
      description: [""],
      menuActionsList: this.formBuilder.array([this.createFormCompanies()]),
    });
  }

  createFormCompanies() {
    return this.formBuilder.group({
      id: [""],
    });
  }

}
