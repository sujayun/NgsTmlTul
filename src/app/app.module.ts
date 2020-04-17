import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from './app.component';
import { AppNavMduCls } from './AppNavMduCls';
import { AppShrMduCls } from './AppShrMduCls'

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppNavMduCls,
		AppShrMduCls.forRoot()
	],
	declarations: [
		AppComponent
	],
	providers: [{provide: APP_BASE_HREF, useValue: "/"}],
	bootstrap: [AppComponent],
	exports:[ ]
})
export class AppModule { }
