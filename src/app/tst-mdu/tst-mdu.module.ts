import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { InlKomComponent } from './inl-kom/inl-kom.component';

const TstMduNavAryVaj: Routes = [
	{ path: '', component: InlKomComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(TstMduNavAryVaj),
	],
	declarations: [],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class TstMduCls { }
