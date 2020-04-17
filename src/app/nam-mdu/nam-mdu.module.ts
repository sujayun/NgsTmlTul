import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NamKomComponent } from './nam-kom/nam-kom.component';

const NamMduNavAryVaj: Routes = [
	{ path: '', component: NamKomComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(NamMduNavAryVaj)
	],
	declarations: []
})
export class NamMduCls { }
