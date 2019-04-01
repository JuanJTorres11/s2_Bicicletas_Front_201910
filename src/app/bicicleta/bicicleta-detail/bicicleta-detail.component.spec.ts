import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {BicicletaDetailComponent} from './bicicleta-detail.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {BicicletaService} from '../bicicleta.service';
import {Bicicleta} from '../bicicleta';

describe('BicicletaDetailComponent', () => {
    let component: BicicletaDetailComponent;
    let fixture: ComponentFixture<BicicletaDetailComponent>;
    
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
        fixture = TestBed.createComponent(BookDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});