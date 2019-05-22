import { ShareModuleModule } from './share-module.module';

describe('ShareModuleModule', () => {
  let shareModuleModule: ShareModuleModule;

  beforeEach(() => {
    shareModuleModule = new ShareModuleModule();
  });

  it('should create an instance', () => {
    expect(shareModuleModule).toBeTruthy();
  });
});
