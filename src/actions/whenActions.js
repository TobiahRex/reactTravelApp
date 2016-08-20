import types from './actionTypes';

export function submitDates(dates) {
  return {
    dates,
    type: types.WHEN_SUBMIT_DATE,
  };
}
