export type Store<State, Action> = {
  getState: () => State;
  dispatch: (a: Action) => State;
};

export function createStore<State, Action>(
  reducer: (s: State, a: Action) => State,
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
