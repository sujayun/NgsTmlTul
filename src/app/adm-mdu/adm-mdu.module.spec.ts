import { AdmMduCls } from './adm-mdu.module';

describe('AdmModule', () => {
  let admModule: AdmMduCls;

  beforeEach(() => {
    admModule = new AdmMduCls();
  });

  it('should create an instance', () => {
    expect(admModule).toBeTruthy();
  });
});
