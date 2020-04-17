import { NgModule, ModuleWithProviders, ErrorHandler, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import
{
	MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule,
	MatCheckboxModule, MatRadioModule, MatSlideToggleModule,
	MatDatepickerModule, MatNativeDateModule, MatMenuModule,
	MatAutocompleteModule, MatCardModule,
	MatDialogModule, MatStepperModule, MatTableModule, MatPaginatorModule, MatSortModule,
	MatSnackBarModule
} from '@angular/material';
import { AppSvcCls } from './AppSvcCls'
import { DefArySchFltCls,DefArySchWitCasFltCls,DefNrySchFltCls,DefNrySchWitCasFltCls } from './DefNgsCod';

@NgModule({
	declarations:[
		DefArySchFltCls,DefArySchWitCasFltCls,DefNrySchFltCls,DefNrySchWitCasFltCls
	],
	imports: [
		FormsModule, ReactiveFormsModule, HttpClientModule,
		MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule,
		MatCheckboxModule, MatRadioModule, MatSlideToggleModule,
		MatDatepickerModule, MatNativeDateModule, MatMenuModule,
		MatAutocompleteModule, MatCardModule,
		MatDialogModule, MatStepperModule, MatTableModule, MatPaginatorModule, MatSortModule,
		MatSnackBarModule
	],
	exports: [
		FormsModule, ReactiveFormsModule, HttpClientModule,
		MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule,
		MatCheckboxModule, MatRadioModule, MatSlideToggleModule,
		MatDatepickerModule, MatNativeDateModule, MatMenuModule,
		MatAutocompleteModule, MatCardModule,
		MatDialogModule, MatStepperModule, MatTableModule, MatPaginatorModule, MatSortModule,
		MatSnackBarModule,
		DefArySchFltCls,DefArySchWitCasFltCls,DefNrySchFltCls,DefNrySchWitCasFltCls
	],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppShrMduCls
{ 
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: AppShrMduCls,
			providers: [
				AppSvcCls,
			]
		};
	}
}