import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomKomComponent } from './hom-kom/hom-kom.component';
import { RouterModule,Routes } from '@angular/router';

let NamNavNryVaj:Routes = [
	{ path:'', component: HomKomComponent}
]

@NgModule({
  imports: [
    CommonModule,
	RouterModule.forChild(NamNavNryVaj)
  ],
  declarations: [HomKomComponent]
})
export class HomMduCls { }
