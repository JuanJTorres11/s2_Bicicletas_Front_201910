
import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Venta} from './venta';
import {VentaService} from './venta.service';
import {AppModule} from '../app.module';

describe('Service: BicicletaService', () => {
    let injector: TestBed;
    let service: VentaService;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, VentaService]
        });
        injector = getTestBed();
        service = injector.get(VentaService);
    });
    
    it('#getVentas should return value from observable',
    (done: DoneFn) => {
    service.getVentas().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
});