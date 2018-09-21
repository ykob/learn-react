import * as actionTypes from '../utils/actionTypes';

export const onNumClick = (num) => ({
  type: actionTypes.INPUT_NUMBER,
  num,
});

export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});
