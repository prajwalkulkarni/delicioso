import { useEffect, useState } from "react"

const useHttp = () => {
    const URL = "https://todo-a1752-default-rtdb.firebaseio.com/foods.json"

    const [foods,setFoods] = useState([])
    const [timeout,setTimeOut] = useState(false)
    
    
    useEffect(()=>{
        fetch(URL).then(res => {
            return res.json()
        }).then(data => setFoods(data))
        .catch(err=>setTimeOut(true))

    },[])
    


    // console.log(foods)
    return {
        foods,
        timeout
    }
}

export default useHttp