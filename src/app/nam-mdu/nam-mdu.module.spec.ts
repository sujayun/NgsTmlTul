import { NamMduCls } from './nam-mdu.module';

describe('NamMduModule', () => {
  let namMduModule: NamMduCls;

  beforeEach(() => {
    namMduModule = new NamMduCls();
  });

  it('should create an instance', () => {
    expect(namMduModule).toBeTruthy();
  });
});
