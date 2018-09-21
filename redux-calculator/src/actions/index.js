import * as actionTypes from '../utils/actionTypes';

export const onNumClick = (num) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});

export const onPlusClick = () => {
  type: actionTypes.PLUS,
}
