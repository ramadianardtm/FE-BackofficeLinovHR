import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Form } from "@angular/forms";
import { PlansService } from '../../../services/plans.service';
import { TreeViewComponent, NodeKeyPressEventArgs, NodeClickEventArgs } from '@syncfusion/ej2-angular-navigations';


@Component({
  selector: 'app-package-create',
  templateUrl: './package-create.component.html',
  styleUrls: ['./package-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PackageCreateComponent implements OnInit {
  formReady: FormGroup;
  modules:any[];
  constructor(
    private formBuilder: FormBuilder,
    private plansService: PlansService,
  ) {
    this.createFormGroup();
   }

  ngOnInit() {
    this.plansService.getModules().subscribe((data: any)=>{
      this.modules = data;
    })  
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

    public tree: TreeViewComponent;
    // defined the array of data
    public countries: Object[] = [
        { id: 1, name: 'Modul A', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'List' },
        { id: 3, pid: 1, name: 'Add' },
        { id: 4, pid: 1, name: 'Update' },
        { id: 6, pid: 1, name: 'Delete' },
        { id: 7, name: 'Modul B', hasChild: true },
        { id: 8, pid: 7, name: 'Paraná' },
        { id: 9, pid: 7, name: 'Ceará' },
        { id: 10, pid: 7, name: 'Acre' },
        { id: 11, name: 'Modul C', hasChild: true },
        { id: 12, pid: 11, name: 'Guangzhou' },
        { id: 13, pid: 11, name: 'Shanghai' },
        { id: 14, pid: 11, name: 'Beijing' },
        { id: 15, pid: 11, name: 'Shantou' },
        { id: 16, name: 'Modul D', hasChild: true },
        { id: 17, pid: 16, name: 'Pays de la Loire' },
        { id: 18, pid: 16, name: 'Aquitaine' },
        { id: 19, pid: 16, name: 'Brittany' },
        { id: 20, pid: 16, name: 'Lorraine' },
        { id: 21, name: 'Modul E', hasChild: true },
        { id: 22, pid: 21, name: 'Assam' },
        { id: 23, pid: 21, name: 'Bihar' },
        { id: 24, pid: 21, name: 'Tamil Nadu' },
        { id: 25, pid: 21, name: 'Punjab' }
    ];
    // maps the appropriate column to fields property
    public field: Object = { dataSource: this.countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
    // set the CheckBox to the TreeView
    public showCheckBox: boolean = true;
    //set the checknodes to the TreeView
    public checkedNodes: string[] = [];
    public nodeChecked(args: NodeKeyPressEventArgs | NodeClickEventArgs): void{
      console.log(args)
    }

}
