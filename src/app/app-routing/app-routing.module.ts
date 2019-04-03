
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {BicicletaListComponent} from '../bicicleta/bicicleta-list/bicicleta-list.component';
import {HomeComponent} from '../Home/home-main/home.component';
import {BicicletaDetailComponent} from '../bicicleta/bicicleta-detail/bicicleta-detail.component';

const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    
    {
		path: 'bicicleta',
		component: BicicletaDetailComponent
	},
    
    {
        path: 'bicicletas',
        children: [
            {
                path: 'list',
                component: BicicletaListComponent
            }
              
        ]
    },

	{
        path: '**',
        redirectTo: 'home',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
