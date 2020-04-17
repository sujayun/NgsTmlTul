import { Component, OnInit } from '@angular/core';
import { DshBodAryVar } from '../AdmBodCfg'

@Component({
	selector: 'adm-dsh-bod-kom',
	templateUrl: './dsh-bod-kom.component.html',
	styleUrls: ['./dsh-bod-kom.component.scss', '../AdmDsnCod.scss']
})
export class DshBodKomComponent implements OnInit
{
	DshBodAryVar = DshBodAryVar

	constructor() { }

	ngOnInit()
	{

	}
}
