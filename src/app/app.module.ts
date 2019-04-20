import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {BicicletaModule} from './bicicleta/bicicleta.module';
import {HomeModule} from './Home/home.module';
import {UsuariosModule} from './usuarios/usuarios.module';
import {MarcaModule} from './marca/marca.module'
import {OrdenModule} from './orden/orden.module'
import { AuthModule } from './auth/auth.module';
import { VendedoresModule } from './usuarios/vendedores/vendedores.module';
import { CategoriaModule } from './categoria/categoria.module';
import { MediopagoModule } from './mediopago/mediopago.module';

import { CompradorModule } from './usuarios/comprador/comprador.module';
import { VentaModule } from './venta/venta.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        BicicletaModule,
        HomeModule, 
        UsuariosModule,
        VendedoresModule,
        MarcaModule,
        OrdenModule,
        AuthModule,
        CategoriaModule,
        MediopagoModule, 
        CompradorModule, 
        VentaModule

    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
