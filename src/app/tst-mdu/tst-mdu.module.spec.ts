import { TstMduCls } from './tst-mdu.module';

describe('TstMduModule', () => {
  let tstMduModule: TstMduCls;

  beforeEach(() => {
    tstMduModule = new TstMduCls();
  });

  it('should create an instance', () => {
    expect(tstMduModule).toBeTruthy();
  });
});
