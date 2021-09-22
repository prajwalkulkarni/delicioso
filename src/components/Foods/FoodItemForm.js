import classes from './FoodItemForm.module.css'
import Input from '../UI/Input'
import ItemContext from '../../context/item-context'
import { useContext,useState } from 'react'
const FoodItemForm = (props)=>{
    const item_ctx = useContext(ItemContext)

    const [err,setErr] = useState('normal')

    
    function sumbitHandler(e){
        //console.log(e.target.form[`${props.id}`].value)
        e.preventDefault()
        
        const qty = e.target.form[`amount${props.id}`].value
        
        if(qty.trim().length>=1){
            //alert("sdsd")
            setErr('normal')
            item_ctx.addItem({type:"ITEM",name:props.name,quantity:qty,amt:props.price})
        }
        else{
            //alert("set")
            setErr('error')

        }
        
        
        //console.log(ctx.)
        //ctx.qty = qty
        //alert(JSON.stringify(item_ctx.items))
        
    }

    return (

        <form className={classes.form}>
            <Input label="Qty" input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
            }} activeclass={err}/>
            <button onClick={sumbitHandler}>Add</button>
        </form>

    )
}

export default FoodItemForm