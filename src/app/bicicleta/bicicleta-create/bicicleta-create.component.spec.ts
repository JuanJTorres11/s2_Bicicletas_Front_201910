import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { BicicletaCreateComponent } from './bicicleta-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {BicicletaService} from '../bicicleta.service';
import {Bicicleta} from '../bicicleta';

describe('BicicletaCreateComponent', () => {
  let component: BicicletaCreateComponent;
    let fixture: ComponentFixture<BicicletaCreateComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                BicicletaService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BicicletaCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});