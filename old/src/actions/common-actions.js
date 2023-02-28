export function resetLastMessage(dispatch) {
  return function (dispatch) {
    dispatch(resetMessage());
  };
}

export function resetMessage() {
  return {
    type: 'RESET_MESSAGE',
  };
}
