import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import DefNgsCls from '../../DefNgsCod'
import { PrdAryVar } from '../AdmBodCfg'

@Component({
	selector: 'adm-prd-mat-tbl-kom',
	templateUrl: './prd-mat-tbl-kom.component.html',
	styleUrls: ['./prd-mat-tbl-kom.component.scss', '../AdmDsnCod.scss']
})
export class PrdMatTblKomComponent implements OnInit
{
	@ViewChild(MatTable) NamTblVap: MatTable<any>;
	@ViewChild(MatSort) NamTblDtaSrtVap: MatSort;
	@ViewChild(MatPaginator) NamTblDtaPejVap: MatPaginator;

	PrdAryVar= PrdAryVar
	NamTblKolAryVar = [ "TtlVak", "DtlVak", "AmtVak", "EdtVak", "DelVak"]
	NamTblDtaSrcVar

	SkdIdxVar
	NquUquModVar = "Nqu"
	PrdItmVar: any

	constructor(public DefNgsVac :DefNgsCls,
		public changeDetectorRefs: ChangeDetectorRef) { }

	ngOnInit()
	{
		this.NamTblDtaSrcVar = new MatTableDataSource(this.PrdAryVar);
		this.NamTblDtaSrcVar.sort = this.NamTblDtaSrtVap;
		this.NamTblDtaSrcVar.paginator = this.NamTblDtaPejVap;
		this.InlPrdItmFnc()
		this.refresh();
	}

	NamTblSchFnc(SchTxtRsgVar)
	{
		this.NamTblDtaSrcVar.filter = SchTxtRsgVar.trim().toLowerCase();
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

	refresh() 
	{
		this.changeDetectorRefs.detectChanges();
	}
}
