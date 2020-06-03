import { TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';

import { CounterService } from './counter.service';
import { counterFeatureName } from '../state/counter.state';
import { counterReducer } from '../state/counter.reducer';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: CounterService }],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(counterFeatureName, counterReducer),
      ],
    });
    service = TestBed.inject(CounterService);
  });

  it('up() should increase count', () => {
    service.up();
    service.getCount().subscribe((count) => {
      expect(count).toBe(1);
    });
  });

  describe('power() should square count', () => {
    it('if count is initialstate', () => {
      service.power();
      service.getCount().subscribe((count) => {
        expect(count).toBe(0);
      });
    });

    it('if count is not initialstate', () => {
      service.up();
      service.up();
      service.power();
      service.getCount().subscribe((count) => {
        expect(count).toBe(4);
      });
    });
  });
});
