import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import {
  HeaderComponent,
  LaunchDetailsComponent
} from './components/index';
import {
  SpaceXApiService,
  ManipulateDataService
} from './services/index';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        LaunchDetailsComponent
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
