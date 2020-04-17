import { Injectable, Directive, Input } from '@angular/core';
import { Validator, FormGroup, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export default class DefNgsCls
{
	constructor() { 
		
	}

	NamTstFnc()
	{
		console.log("NamTstFnc() : Tst Txt")
	}

	JsnHtpHdrOpnVar = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
		})
	};

	GetFomHtpHdrAthOpnFnc()
	{
		return {
			headers: new HttpHeaders({
				'Authorization': "Bearer " + localStorage.getItem('UsrSgnCodVak')
			})
		}
	};

	GetJsnHtpHdrAthOpnFnc()
	{
		return {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': "Bearer " + localStorage.getItem('UsrSgnCodVak')
			})
		}
	};

	OrgOrdFlt = (a, b) =>
	{
		return a;
	}

	DscOrdFlt = (a, b) =>
	{
		return b - a;
	}

	AlwOlyAlfFnc(EvtRsgVar)
	{
		var ChrKeyVar = EvtRsgVar.charCode
		return (ChrKeyVar == 0 || ChrKeyVar == 8 || ChrKeyVar == 13) ? null :
			(ChrKeyVar >= 65 && ChrKeyVar <= 90)
			|| (ChrKeyVar >= 97 && ChrKeyVar <= 122)
			|| (ChrKeyVar == 32)
	}

	AlwOlyNumFnc(EvtRsgVar)
	{
		var ChrKeyVar = EvtRsgVar.charCode
		return (ChrKeyVar == 0 || ChrKeyVar == 8 || ChrKeyVar == 13) ? null :
			(ChrKeyVar >= 48 && ChrKeyVar <= 57)
	}

	AlwOlyDecNumFnc(EvtRsgVar)
	{
		var ChrKeyVar = EvtRsgVar.charCode
		return (ChrKeyVar == 0 || ChrKeyVar == 8 || ChrKeyVar == 13) ? null :
			(ChrKeyVar >= 48 && ChrKeyVar <= 57) || ChrKeyVar == 46
	}

	GetCsvNumFnc(NumRsgVar, UntPsgVar="")
	{
		var NumVar = Number(NumRsgVar);
		if(UntPsgVar == "INR")
			return NumVar.toLocaleString('en-IN');
		else
			return NumVar.toLocaleString();
	}

	CnvLngTooAbrNumFnc(NumPsgVar)
    {
		var NumVar:any = Math.abs(NumPsgVar)
		if (NumVar >= 10000000)
			NumVar = (NumVar / 10000000) + ' Cr'; 
		else if (NumVar >= 100000)
			NumVar = (NumVar / 100000) + ' L';
		else if(NumVar >= 1000) 
			NumVar = (NumVar/1000) + ' K';
		return NumVar;
    }

	CnvCodTooPrpKesFnc(SrgPsgVar)
	{
		return SrgPsgVar.toLowerCase().
			replace(/_/g, ' ').
			replace(/\b\S/g, l => l.toUpperCase());;
	}

	CnvJsnTooFomDtaFnc(JsnDtaPsgVar)
	{
		let FomDtaVar = new FormData()
		for (let IdxVar in JsnDtaPsgVar)
			FomDtaVar.set(IdxVar, JsnDtaPsgVar[IdxVar])
		return FomDtaVar;
	}

	DldJryTooCsvFylFnc(JryPsgVar)
	{
		var DldCsvTxtVar = this.CnvJryTooCsvFnc(JryPsgVar);
		this.DldCsvFylFnc(DldCsvTxtVar, "PrdLys")
	}

	DldCsvFylFnc(FylFwtPsgVar, FylNamPsgVar)
	{
		var XclCodVaj = new Blob([FylFwtPsgVar], { type: "application/csv" });
		var DldLnkVar = document.createElement('a');
		DldLnkVar.href = window.URL.createObjectURL(XclCodVaj);
		DldLnkVar.setAttribute('download', FylNamPsgVar + '.csv');
		DldLnkVar.click();
	}

	CnvJryTooCsvFnc(JryPsgVar)
	{
		var ResCsvTxtVar = "";
		var CsvHdgAryVar = Object.keys(JryPsgVar[0])

		CsvHdgAryVar.forEach(CsvHdgVar =>
		{
			ResCsvTxtVar += CsvHdgVar + ","
		})
		ResCsvTxtVar = ResCsvTxtVar.substr(0, ResCsvTxtVar.length - 1) + "\n"

		JryPsgVar.forEach(CsvDtaVar =>
		{
			CsvHdgAryVar.forEach(CsvHdgVar =>
			{
				ResCsvTxtVar += CsvDtaVar[CsvHdgVar] + ","
			})
			ResCsvTxtVar = ResCsvTxtVar.substr(0, ResCsvTxtVar.length - 1) + "\n";
		});
		return ResCsvTxtVar;
	}

	ChkAllBoxStsChjFnc(ChkBoxAryNgsPsgVav, ChkAllBoxNgsPsgVav)
	{
		ChkBoxAryNgsPsgVav.forEach((ItmVar, IdxVar) =>
		{
			ChkBoxAryNgsPsgVav[IdxVar] = ChkAllBoxNgsPsgVav;
		})
	}

	ChkIdxBoxStsChjFnc(ChkBoxAryNgsPsgVav, ChkAllBoxNgsPsgVav)
	{
		var InlVar = ChkBoxAryNgsPsgVav[0];
		var ChkVar = true;
		for (var IdxVar = 1; IdxVar < ChkBoxAryNgsPsgVav.length; IdxVar++)
		{
			if (InlVar != ChkBoxAryNgsPsgVav[IdxVar])
			{
				ChkVar = false;
				break;
			}
		}
		return { ChkVar, InlVar };
	}
}

//[==] Search Array :

@Pipe({
	name: 'DefArySchFlt',
	pure: false
})
export class DefArySchFltCls implements PipeTransform
{
	transform(NamAryPsgVar: any[], QryPsgVar: string): any
	{
		if (!NamAryPsgVar || !QryPsgVar) { return NamAryPsgVar; }
		let QryVar = QryPsgVar.toLowerCase();
		return NamAryPsgVar.filter(ItmVar => ItmVar.toLowerCase().indexOf(QryVar) !== -1);
	}
}

//[==] Search Array with case :

@Pipe({
	name: 'DefArySchWitCasFlt',
	pure: false
})
export class DefArySchWitCasFltCls implements PipeTransform
{
	transform(NamAryPsgVar: any[], QryPsgVar: string): any
	{
		if (!NamAryPsgVar || !QryPsgVar) { return NamAryPsgVar; }
		return NamAryPsgVar.filter(ItmVar => ItmVar.indexOf(QryPsgVar) !== -1);
	}
}

//[==] Search Json Array :

@Pipe({
	name: 'DefNrySchFlt',
	pure: false
})
export class DefNrySchFltCls implements PipeTransform
{
	transform(NamAryPsgVar: any[], KeyPsgVar: string, QryPsgVar: string): any
	{
		if (!NamAryPsgVar || !KeyPsgVar || !QryPsgVar) { return NamAryPsgVar; }
		let QryVar = QryPsgVar.toLowerCase();
		return NamAryPsgVar.filter(ItmVar => ItmVar[KeyPsgVar].toLowerCase().indexOf(QryVar) !== -1);
	}
}

//[==] Search Json Array with Case :

@Pipe({
	name: 'DefNrySchWitCasFlt',
	pure: false
})
export class DefNrySchWitCasFltCls implements PipeTransform
{
	transform(NamAryPsgVar: any[], KeyPsgVar: string, QryPsgVar: string): any
	{
		if (!NamAryPsgVar || !KeyPsgVar || !QryPsgVar) { return NamAryPsgVar; }
		return NamAryPsgVar.filter(ItmVar => ItmVar[KeyPsgVar].indexOf(QryPsgVar) !== -1);
	}
}


//[==] Search Json Array with Case :

@Pipe({
	name: 'DefNrySchTruFlt',
	pure: false
})
export class DefNrySchTruFltCls implements PipeTransform
{
	transform(NamAryPsgVar: any[], KeyPsgVar: string): any
	{
		if (!NamAryPsgVar || !KeyPsgVar) { return NamAryPsgVar; }
		return NamAryPsgVar.filter(ItmVar => ItmVar[KeyPsgVar]);
	}
}

//[==] Search Json Array with Case :

@Pipe({
	name: 'DefNrySchFlsFlt',
	pure: false
})
export class DefNrySchFlsFltCls implements PipeTransform
{
	transform(NamAryPsgVar: any[], KeyPsgVar: string): any
	{
		if (!NamAryPsgVar || !KeyPsgVar) { return NamAryPsgVar; }
		return NamAryPsgVar.filter(ItmVar => !ItmVar[KeyPsgVar]);
	}
}

@Directive({
	selector: '[MchIptFomVldChkNgsDtv]',
	providers: [
		{ provide: NG_VALIDATORS, useExisting: MchIptFomVldChkNgsDtvCls, multi: true }
	]
})
export class MchIptFomVldChkNgsDtvCls implements Validator
{
	@Input('MchIptFomVldChkNgsDtv') MchIptAryVav: string[];

	constructor() { }

	validate(FomGrpRsgVar: FormGroup): ValidationErrors | null
	{
		let MchIptTxtAryVar = [];
		if (this.MchIptAryVav)
		{
			for (let IptNamItmVar of this.MchIptAryVav)
			{
				const IptItmLmnVav = FomGrpRsgVar.controls[IptNamItmVar];
				if (IptItmLmnVav && (IptItmLmnVav.touched || IptItmLmnVav.dirty))
					MchIptTxtAryVar.push(IptItmLmnVav.value);
			}

			if (MchIptTxtAryVar[0] != MchIptTxtAryVar[1])
			{
				return { IptNotMchErrVak: true };
			}
		}
		return null;
	}
}

