import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavBarAryVar } from '../AdmBodCfg'

@Component({
	selector: 'app-inl-kom',
	templateUrl: './inl-kom.component.html',
	styleUrls: [ './inl-kom.component.scss', '../AdmDsnCod.scss' ]
})
export class InlKomComponent implements OnInit
{
	CpnNamVar = "Company Name"
	UsrNamVar = "User Name"
	BodNamVar = "Product"

	NavBarAryVar = NavBarAryVar
	SkdBodIdxVar = 0;

	constructor(public NavVap: Router) { }

	ngOnInit()
	{
		
	}

	AdmSgtFnc()
	{
		this.NavVap.navigate(['']);
	}
}
