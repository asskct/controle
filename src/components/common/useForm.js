import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from  'react-redux'

const useForm = (callback, validate, inputRefs=[]) => {
    const [changeError, setChangeError] = useState({})
    const submitError = useSelector(state => state.useForm.submitError)
    const [values, setValues] = useState({})
    const dispatch = useDispatch()   
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {       
        if(isSubmitting && Object.keys(changeError).length === 0 && Object.keys(values).length !== 0) {             
            dispatch(callback(values))
            setIsSubmitting(false)
        }
    }, [isSubmitting, changeError, values, dispatch, callback ])

    const getData = inputRefs => {
        const data = {}
        inputRefs.map(inputRef => data[inputRef.current.name] = inputRef.current.value)
        return data
    }

    const handleSubmit = e => {
        e.preventDefault()
        const data = getData(inputRefs)
        setIsSubmitting(true)
        setChangeError(validate(data))
        setValues(data)      
    }

    return [handleSubmit, changeError, submitError]
}

export default useForm
