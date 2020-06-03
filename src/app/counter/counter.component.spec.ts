import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { BehaviorSubject } from 'rxjs';

import { CounterComponent } from './counter.component';
import { CounterService } from './service/counter.service';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let mockStore: MockStore<any>;
  const initialState = {
    count: 0,
  };

  const counterServiceMock = {
    count: new BehaviorSubject(0),
    increment: () => void 0,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: CounterService, useValue: counterServiceMock }],
      declarations: [CounterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    mockStore = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have point value`, () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const counter = fixture.debugElement.componentInstance;
    expect(counter.count).toEqual(0);
  });
});
