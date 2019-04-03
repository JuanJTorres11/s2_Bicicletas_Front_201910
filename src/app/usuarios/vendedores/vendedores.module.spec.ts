import { VendedoresModule } from './vendedores.module';

describe('VendedoresModule', () => {
  let vendedoresModule: VendedoresModule;

  beforeEach(() => {
    vendedoresModule = new VendedoresModule();
  });

  it('should create an instance', () => {
    expect(vendedoresModule).toBeTruthy();
  });
});
