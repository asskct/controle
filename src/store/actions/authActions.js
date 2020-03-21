import { push } from 'connected-react-router'

export function signIn(credencials) {
    return (dispatch, getState, getFirebase) => {
        const firebase = getFirebase()
        firebase.auth()
        .signInWithEmailAndPassword(
            credencials.email,
            credencials.password
        ).then(user => {
            dispatch({ type: 'LOGIN_SUCCESS', user })
            localStorage.setItem("userProvider", JSON.stringify(user))
            dispatch({ type: 'SUBMIT_SUCCESS'})
            dispatch(push('/'))           
        }).catch(err => {           
            dispatch({ type: 'SUBMIT_ERROR', error: err.message })
        })
    } 
}

export function signOut() {
    return (dispatch, getState, getFirebase) => {        
        const firebase = getFirebase()
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS'})
            localStorage.removeItem("userProvider")
            dispatch(push("/login"))
        }).catch(err => {            
            dispatch({ type: 'LOGOUT_ERROR', error: err.message })
        })
    } 
} 