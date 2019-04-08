
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BicicletaListComponent} from '../bicicleta/bicicleta-list/bicicleta-list.component';
import {HomeComponent} from '../Home/home-main/home.component';
import {BicicletaDetailComponent} from '../bicicleta/bicicleta-detail/bicicleta-detail.component';
import {BicicletaCreateComponent} from '../bicicleta/bicicleta-create/bicicleta-create.component';
import {MarcaListComponent} from '../marca/marca-list/marca-list.component';
import {MarcaDetailComponent} from '../marca/marca-detail/marca-detail.component';
import { VendedorDetailComponent } from '../usuarios/vendedores/vendedor-detail/vendedor-detail.component';
import { VendedorEditComponent } from '../usuarios/vendedores/vendedor-edit/vendedor-edit.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import {OrdenListComponent} from '../orden/orden-list/orden-list.component';
import {OrdenDetailComponent} from '../orden/orden-detail/orden-detail.component';

const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    

    {
        path: 'bicicletas',
        children: [
            {
                path: 'list',
                component: BicicletaListComponent
            },
			{
                path: 'add',
                component: BicicletaCreateComponent
            },
			{
                path: ':id',
                component: BicicletaDetailComponent
            }		
              
        ]
    },

	{
        path: '**',
        redirectTo: 'home',
    },

    {
        path: 'iniciarSesion',
        component: AuthLoginComponent
    },
   {
        path: 'registrarse',
        component: AuthSignUpComponent
    },
 
    {
		path: 'bicicleta',
		component: BicicletaDetailComponent
    },
    
     {
        path: 'vendedores',
        children: [
            {
                path: ':id',
                component: VendedorDetailComponent,
                children:[
                    {
                        path: 'edit',
                        component: VendedorEditComponent
                    }
                ]
            }
        ]
    },

    {
        path:'marcas',
        children: [
            {
                path: 'list',
                component: MarcaListComponent
            },
            {
                path:':id',
                component: MarcaDetailComponent
            }
              
        ]
    },
    {
        path:'ordenes',
        children: [
            {
                path: 'list',
                component: OrdenListComponent
            },
            {
                path:':id',
                component: OrdenDetailComponent
            }
              
        ]
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
