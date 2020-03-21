const initialState = { submitError: null }
  
export function useForm(state=initialState, action) {
    switch (action.type) { 
        case "SUBMIT_ERROR":
            return {
                ...state,
                submitError: action.error
            }    
        case "SUBMIT_SUCCESS":
            return {
                ...state,
                submitError: null
            }
        default:
            return state
    }
}
    
    