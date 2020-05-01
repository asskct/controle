import { push } from 'connected-react-router'
import { Ativo } from './plantelActions'

export function pelada() {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('pelada').add({           
            verde: 'tive Verde',
            branco: 'time Branco',
            createdAt: new Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_PELADA_SUCCESS'})
            dispatch(push('/pelada'))
        }).catch(err => {
            console.log(err)
            dispatch({ type: 'CREATE_PELADA_ERROR', err })
        })
        
    } 
}