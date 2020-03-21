const initialState = { user: {} }

function auth(state=initialState, action) {
  switch (action.type) { 
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        user: {},
      }    
    case "LOGOUT_ERROR":
      return { 
        ...state,
      }
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
  
 export default auth
  