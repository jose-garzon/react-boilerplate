const INITIAL_STATE = {
  variable: ''
}

export const firstReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}
