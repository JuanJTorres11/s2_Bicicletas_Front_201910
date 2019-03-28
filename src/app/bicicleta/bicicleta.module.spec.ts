import {BicicletaModule} from './bicicleta.module';

describe('BicicletaModule', () => {
    let bicicletaModule: BicicletaModule;

    beforeEach(() => {
        bicicletaModule = new BicicletaModule();
    });

    it('should create an instance', () => {
        expect(bicicletaModule).toBeTruthy();
    });
});