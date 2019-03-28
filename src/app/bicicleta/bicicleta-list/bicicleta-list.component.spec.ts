

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppModule} from '../../app.module';
import {BicicletaListComponent} from './bicicleta-list.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {BicicletaService} from '../bicicleta.service';
import {Bicicleta} from '../bicicleta';

describe('BicicletaListComponent', () => {
    let component: BicicletaListComponent;
    let fixture: ComponentFixture<BicicletaListComponent>;
    const bicicletas: Bicicleta[] = require('../../../assets/bicicletas.json');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, BicicletaService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BicicletaListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('should have a list of bicicletas', () => {
        component.bicicletas = bicicletas;
        expect(component.bicicletas.length).toEqual(bicicletas.length);
    });

    it('a bike should be a bike (first and last)', () => {
        component.bicicletas = bicicletas;
        //revisar todos los libros
        expect(component.bicicletas[0].referencia).toEqual(bicicletas[0].referencia);
        expect(component.bicicletas[bicicletas.length - 1].referencia).toEqual(bicicletas[bicicletas.length - 1].referencia);
    });
});