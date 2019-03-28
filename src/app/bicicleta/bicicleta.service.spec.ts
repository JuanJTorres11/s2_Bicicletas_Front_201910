
import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Bicicleta} from './Bicicleta';
import {BicicletaService} from './Bicicleta.service';
import {AppModule} from '../app.module';

describe('Service: BicicletaService', () => {
    let injector: TestBed;
    let service: BicicletaService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, BicicletaService]
        });
        injector = getTestBed();
        service = injector.get(BicicletaService);
    });
    
    it('#getBicicletas should return value from observable',
    (done: DoneFn) => {
    service.getBicicletas().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
});