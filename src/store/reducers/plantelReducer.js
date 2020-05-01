const initialState = { 
    ativos: []
}
  
function plantel(state=initialState, action) {    
    switch (action.type) {        
        case "AXIOS_SUCCESS":
            return {
                ...state,
                ativos: action.ativos
            }
        case "CREATE_PELADA_SUCCESS":
            return {
                ...state
            }
            case "CREATE_PELADA_ERROR":
                console.log(action.err.message)
                return {
                    ...state
                }
        default:
            return state
    }
}

export default plantel