import { push } from 'connected-react-router'

export function pelada() {
    return (dispatch) => {
        dispatch(push('/pelada'))        
    } 
}