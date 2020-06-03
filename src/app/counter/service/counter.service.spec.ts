import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';

import { CounterService } from './counter.service';

describe('SampleServiceService', () => {
  let service: CounterService;
  let mockStore: MockStore<any>;
  const initialState = {
    count: 0,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterService, provideMockStore({ initialState })],
    });
    service = TestBed.inject(CounterService);
    mockStore = TestBed.inject(MockStore);
  });

  it('up() should increase count', () => {
    // service.up();
    expect(service.getCount()).toEqual(of(1));
  });
});
