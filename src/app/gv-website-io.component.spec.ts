import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GvWebsiteIoAppComponent } from '../app/gv-website-io.component';

beforeEachProviders(() => [GvWebsiteIoAppComponent]);

describe('App: GvWebsiteIo', () => {
  it('should create the app',
      inject([GvWebsiteIoAppComponent], (app: GvWebsiteIoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'gv-website-io works!\'',
      inject([GvWebsiteIoAppComponent], (app: GvWebsiteIoAppComponent) => {
    expect(app.title).toEqual('gv-website-io works!');
  }));
});
