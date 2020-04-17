import { HomMduCls } from './hom-mdu.module';

describe('HomMduModule', () => {
  let homMduModule: HomMduCls;

  beforeEach(() => {
    homMduModule = new HomMduCls();
  });

  it('should create an instance', () => {
    expect(homMduModule).toBeTruthy();
  });
});
