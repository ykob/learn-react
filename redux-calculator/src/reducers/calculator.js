import * as actionTypes from '../utils/actionTypes';

const initAppState = {
  inputValue: 0,
  resultValue: 0,
  isShownResult: false,
};

const calculator = (state = initAppState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.num,
        isShownResult: false,
      };
    case actionTypes.PLUS:
      return {
        ...state,
        inputValue: 0,
        resultValue: state.resultValue + state.inputValue,
        isShownResult: true
      };
    default:
      return state;
  }
};

export default calculator;
