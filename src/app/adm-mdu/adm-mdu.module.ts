import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppShrMduCls } from '../AppShrMduCls';
import { InlKomComponent } from './inl-kom/inl-kom.component';
import { DshBodKomComponent } from './dsh-bod-kom/dsh-bod-kom.component';
import { PrdTblKomComponent } from './prd-tbl-kom/prd-tbl-kom.component';
import { PrdGrdKomComponent } from './prd-grd-kom/prd-grd-kom.component';
import { PrdMatTblKomComponent } from './prd-mat-tbl-kom/prd-mat-tbl-kom.component';

const AdmMduNavAryVaj: Routes = [
	{ path: '',  component: InlKomComponent },
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(AdmMduNavAryVaj),
		AppShrMduCls
	],
	declarations: [
		InlKomComponent,
		PrdTblKomComponent,
		PrdGrdKomComponent,
		DshBodKomComponent,
		PrdMatTblKomComponent
	],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AdmMduCls { }
