import { Component, OnInit } from '@angular/core';

import DefNgsCls from '../../DefNgsCod'
import { PrdAryVar } from '../AdmBodCfg'

@Component({
	selector: 'adm-prd-grd-kom',
	templateUrl: './prd-grd-kom.component.html',
	styleUrls: ['./prd-grd-kom.component.scss', '../AdmDsnCod.scss']
})
export class PrdGrdKomComponent implements OnInit
{
	SkdIdxVar
	NquUquModVar = "Nqu"
	PrdItmVar: any

	PrdAryVar = PrdAryVar

	constructor(public DefNgsVac :DefNgsCls) { }

	ngOnInit()
	{
		this.InlPrdItmFnc()
	}

	InlPrdItmFnc()
	{
		this.PrdItmVar =
		{
			UidVak: "",
			TtlVak: "",
			DtlVak: "",
			AmtVak: "",
		}
		this.NquUquModVar = "Nqu"
	}

	SquPrdBtnKlkFnc()
	{
		if (this.NquUquModVar == "Nqu")
			this.PrdAryVar.push(this.PrdItmVar);
		else
			this.PrdAryVar[this.SkdIdxVar] = this.PrdItmVar;
	}

	EdtPrdBtnKlkFnc(IdxPsgVar)
	{
		this.NquUquModVar = "Uqu"
		this.PrdItmVar = this.PrdAryVar[IdxPsgVar];
	}

	DquPrdBtnKlkFnc(IdxPsgVar)
	{
		this.SkdIdxVar = IdxPsgVar;
	}

	DquPrdCnfBtnKlkFnc()
	{
		this.PrdAryVar.splice(this.SkdIdxVar, 1);
	}

	DldJryTooCsvFylFnc()
	{
		this.DefNgsVac.DldJryTooCsvFylFnc(this.PrdAryVar)
	}
}
