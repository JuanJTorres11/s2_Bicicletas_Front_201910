import {CompradorModule} from './Comprador.module';

describe('CompradorModule', () => {
    let compradorModule: CompradorModule;

    beforeEach(() => {
        compradorModule = new CompradorModule();
    });

    it('should create an instance', () => {
        expect(compradorModule).toBeTruthy();
    });
});