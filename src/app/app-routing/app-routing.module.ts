
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {BicicletaListComponent} from '../bicicleta/bicicleta-list/bicicleta-list.component';


const routes: Routes = [

    {
        
        path: 'home',
        redirectTo: '/bicicletas/list', pathMatch: 'full'
    }
    
    {
        path: '**',
        redirectTo: 'home',
    },
    
     {
        path: 'bicicletas',
        children: [
            {
                path: 'list',
                component: BicicletaListComponent
            }
              
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
