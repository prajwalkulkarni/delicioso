import { useEffect, useState } from "react"

const useForm = (validate) => {
    const [touched,setIsTouched] = useState(false)
    const [value,setValue]= useState('')
    
    
    const onBlurHandler = (event) =>{
        setIsTouched(true)
        setValue(event.target.value)
        
        // console.log(isValid)
    }
    // console.log(value)
    const isValid = validate(value)
    const isInvalid = !isValid && touched
    

    return {
        isValid,
        isInvalid,
        onBlurHandler
    }

}

export default useForm