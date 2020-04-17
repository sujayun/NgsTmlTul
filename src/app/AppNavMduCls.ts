import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

let AppNavNryVaj: Routes = [
	{ path: '', loadChildren: './hom-mdu/hom-mdu.module#HomMduCls' },
	{ path: 'nam', loadChildren: './nam-mdu/nam-mdu.module#NamMduCls' },
	{ path: 'adm', loadChildren: './adm-mdu/adm-mdu.module#AdmMduCls' },
	{ path: 'tst', loadChildren: './tst-mdu/tst-mdu.module#TstMduCls' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(AppNavNryVaj,
			{
				scrollPositionRestoration: 'enabled',
				anchorScrolling: 'enabled'
			}),
	],
	exports: [RouterModule]
})
export class AppNavMduCls { }