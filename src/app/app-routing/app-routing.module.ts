import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BicicletaListComponent } from '../bicicleta/bicicleta-list/bicicleta-list.component';
import { HomeComponent } from '../Home/home-main/home.component';
import { BicicletaDetailComponent } from '../bicicleta/bicicleta-detail/bicicleta-detail.component';
import { BicicletaCreateComponent } from '../bicicleta/bicicleta-create/bicicleta-create.component';
import { MarcaListComponent } from '../marca/marca-list/marca-list.component';
import { MarcaDetailComponent } from '../marca/marca-detail/marca-detail.component';
import { VendedorDetailComponent } from '../usuarios/vendedores/vendedor-detail/vendedor-detail.component';
import { VendedorEditComponent } from '../usuarios/vendedores/vendedor-edit/vendedor-edit.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { CompradorEditComponent } from '../usuarios/comprador/comprador-edit/comprador-edit.component';
import { CompradorDetailComponent } from '../usuarios/comprador/comprador-detail/comprador-detail.component';
import { VentaCreateComponent } from '../venta/venta-create/venta-create.component';
import { VentaEditComponent } from '../venta/venta-edit/venta-edit.component';
import { OrdenListComponent } from '../orden/orden-list/orden-list.component';
import { OrdenDetailComponent } from '../orden/orden-detail/orden-detail.component';
import { CompradorOrdenComponent } from '../usuarios/comprador/comprador-orden/comprador-orden.component';
import { MarcaCreateComponent } from '../marca/marca-create/marca-create.component';
import { CategoriaListComponent } from '../categoria/categoria-list/categoria-list.component';
import { CategoriaDetailComponent } from '../categoria/categoria-detail/categoria-detail.component';
import { MediopagoListComponent } from '../mediopago/mediopago-list/mediopago-list.component';
import { MediopagoDetailComponent } from '../mediopago/mediopago-detail/mediopago-detail.component';
import { BicicletaEditComponent } from '../bicicleta/bicicleta-edit/bicicleta-edit.component';
import { MarcaEditComponent } from '../marca/marca-edit/marca-edit.component';
import { CompradorCarritoComponent } from '../usuarios/comprador/comprador-carrito/comprador-carrito.component';
import { CompradorListaDeseosComponent } from '../usuarios/comprador/comprador-lista-deseos/comprador-lista-deseos.component';
import { CompradorProcesoCompraComponent } from '../usuarios/comprador/comprador-proceso-compra/comprador-proceso-compra.component';
import { DashboardComponent } from '../usuarios/administrador/dashboard/dashboard.component';
import { VendedorListComponent } from '../usuarios/vendedores/vendedor-list/vendedor-list.component';
import { VentaReviewComponent } from '../usuarios/administrador/venta-review/venta-review.component';

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
                //canActivate: [NgxPermissionsGuard],
                //data: {
                //  permissions: {
                //    only: ['ADMIN']
                //}
                // }
            },
            {
                path: ':id/edit',
                component: BicicletaEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: ':id',
                component: BicicletaDetailComponent
            }

        ]
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
                path: 'edit',
                component: VendedorEditComponent
            },
            {
                path: 'mediosPago',
                component: MediopagoListComponent
            },
            {
                path: 'list',
                component: VendedorListComponent
            },
            {
                path: ':id',
                component: VendedorDetailComponent
            }
        ]
    },

    {
        path: 'ventas',
        component: VentaReviewComponent
    },

    {
        path: 'compradores',
        children: [
            {
                path: 'edit',
                component: CompradorEditComponent
            },
            {
                path: ':id/carrito',
                component: CompradorCarritoComponent
            },
			{
                path: ':id/listadeseos',
                component: CompradorListaDeseosComponent
            },
            {
                path: ':id',
                component: CompradorDetailComponent
            },
            {
                path: 'mediosPago',
                component: MediopagoListComponent
            }

        ]
    },

    {
        path: 'venta',
        children: [
            {
                path: 'add',
                component: VentaCreateComponent
            },
            {
                path: 'edit',
                component: VentaEditComponent
            }
        ]
    },

    {
        path: 'marcas',
        children: [
            {
                path: 'list',
                component: MarcaListComponent
            },
            {
                path: 'create',
                component: MarcaCreateComponent
            },
            {
                path: ':id',
                component: MarcaDetailComponent
            }
        ]
    },
    {
        path: 'ordenes',
        children: [
            {
                path: 'list',
                component: OrdenListComponent
            },
            {
                path: ':id',
                component: OrdenDetailComponent
            }

        ]
    },
    {
        path: 'categorias',
        children: [{
            path: 'list',
            component: CategoriaListComponent
        },
        {
            path: ':nombre',
            component: CategoriaDetailComponent
        }]
    },
    {
        path: 'medioPagos',
        children: [{
            path: 'list',
            component: MediopagoListComponent
        },
        {
            path: ':numeroTarjeta',
            component: MediopagoDetailComponent
        }]
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
