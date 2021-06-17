// @flow

export type Store<State, Action> = {
  getState: () => State,
  dispatch: (Action) => State,
};

export function createStore<State, Action>(
  reducer: (State, Action) => State,
  initialState: State
): Store<State, Action> {
  let state = initialState;

  const dispatch = (action: Action): State => {
    state = reducer(state, action);
    return state;
  };

  const getState = () => state;

  return {
    getState,
    dispatch,
  };
}
