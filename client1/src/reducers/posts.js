import { FETCH_ALL, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes'

export default (state = { isLoading: true, Congti: [] }, action) => {
  switch (action.type) {
   
    case COMMENT:
      return {
        ...state,
        Congti: state.Congti.map((element) => {
          if (element._id == +action.payload._id) {
            return action.payload
          }
          return element;
        })
      }
   
    default:
      return state;
  }
}
