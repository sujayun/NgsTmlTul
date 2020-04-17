import { TestBed } from '@angular/core/testing';

import { AppSvcCls } from './AppSvcCls';

describe('AppSvcCls', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSvcCls = TestBed.get(AppSvcCls);
    expect(service).toBeTruthy();
  });
});
