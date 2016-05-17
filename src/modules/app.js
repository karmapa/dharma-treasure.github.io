const defaultState = {};
const actionsMap = {};

export default function reducer(state = defaultState, action) {
  const reduceFn = actionsMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
