import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { SpaceXApiService } from './space-x-api.service';

describe('SpaceXApiService', () => {
  let service: SpaceXApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpaceXApiService]
    });
    service = TestBed.get(SpaceXApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET data to the SpaceX API', () => {
    service.load()
      .subscribe(() => { });

    const req = httpMock.expectOne(
      `${environment.BASE_API}/v3/launches?limit=10&order=desc`
    );
    expect(req.request.method).toEqual("GET");
  });
});
