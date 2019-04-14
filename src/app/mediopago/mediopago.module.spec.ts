import { MediopagoModule } from './mediopago.module';

describe('MediopagoModule', () => {
  let mediopagoModule: MediopagoModule;

  beforeEach(() => {
    mediopagoModule = new MediopagoModule();
  });

  it('should create an instance', () => {
    expect(mediopagoModule).toBeTruthy();
  });
});
