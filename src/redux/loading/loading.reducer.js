const initialState = {};

const loadingReducer = (state = initialState, action) => {
  const {type} = action;
  const matches = /(.*)_(HANDLE|SUCCESS|FAIL)/.exec(type);
  if (!matches) {
    return state;
  }
  const [, requestName, requestState] = matches;
  const newState = {
    ...state,
    [requestName]: requestState === 'HANDLE',
  };
  return newState;
};

export default loadingReducer;
