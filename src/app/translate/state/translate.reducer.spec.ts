import { TranslateState } from '../state/translate.state';
import * as TranslateActions from './translate.actions';
import { translateReducer } from './translate.reducer';

let initialState: TranslateState;

beforeEach(() => {
  initialState = {
    result: '',
    loading: false,
  };
});

describe('TranslateReducer', () => {
  it('should convert loading to true', () => {
    const state = initialState;
    const action = TranslateActions.translateJaToEn({ text: '犬' });
    const newState = translateReducer(state, action);
    const expected = true;

    expect(newState.loading).toBe(expected);
  });

  it('should convert loading to true', () => {
    const state = initialState;
    const action = TranslateActions.translateEnToJa({ text: 'dog' });
    const newState = translateReducer(state, action);
    const expected = true;

    expect(newState.loading).toBe(expected);
  });

  it('should set result and convert loading to false', () => {
    const state = initialState;
    const action = TranslateActions.setResult({ result: 'dog' });
    const newState = translateReducer(state, action);
    const expected = { result: 'dog', loading: false };

    expect(newState).toEqual(expected);
  });

  it('should convert loading to false', () => {
    const state = initialState;
    const action = TranslateActions.alertError({ error: {} });
    const newState = translateReducer(state, action);
    const expected = false;

    expect(newState.loading).toEqual(expected);
  });
});
