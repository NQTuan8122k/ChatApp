export const getLoadingSelector = (state, actionTypes) => {
  if (Array.isArray(actionTypes)) {
    return actionTypes.some(r => {
      const matches = /(.*)_(HANDLE|SUCCESS|FAIL)/.exec(r);
      if (!matches) {
        return false;
      }
      const [, requestName, requestState] = matches;
      return state.loading[`${requestName}`] || false;
    });
  }
  return false;
};
