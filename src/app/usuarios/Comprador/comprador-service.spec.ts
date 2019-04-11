// import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
// import {APP_BASE_HREF} from '@angular/common';
// import {HttpClientModule} from '@angular/common/http';

// import {Comprador} from './comprador';
// import {CompradorService} from './comprador.service';
// import {AppModule} from '../app.module';

// describe('Service: CompradorService', () => {
//     let injector: TestBed;
//     let service: CompradorService;
    
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpClientModule, AppModule],
//             declarations: [],
//             providers: [{provide: APP_BASE_HREF, useValue: ''}, CompradorService]
//         });
//         injector = getTestBed();
//         service = injector.get(CompradorService);
//     });
    
//     it('#getBicicletas should return value from observable',
//     (done: DoneFn) => {
//     service.getCompradorCarrito().subscribe(value => {
//         expect(value.length).toBeGreaterThan(0);
//         done();
//         });
//     });
    
// });