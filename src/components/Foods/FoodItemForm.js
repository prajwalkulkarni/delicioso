import classes from './FoodItemForm.module.css'
import Input from '../UI/Input'
import ItemContext from '../../context/item-context'
import { useContext } from 'react'
const FoodItemForm = (props)=>{
    const item_ctx = useContext(ItemContext)

    
    function sumbitHandler(e){
        //console.log(e.target.form[`${props.id}`].value)
        e.preventDefault()
        
        const qty = e.target.form[`amount${props.id}`].value
        const amount = qty*props.price
        if(item_ctx.quantity===0){
            item_ctx.changeQty({type:"FIRST",quantity:qty})
            item_ctx.changeAmt({type:"FIRST",amount:amount})
        }
        else{
            item_ctx.changeQty({type:"SUBSEQUENT",quantity:qty})
            item_ctx.changeAmt({type:"SUBSEQUENT",amount:amount})

        }
        
        //console.log(ctx.)
        //ctx.qty = qty
        
    }

    return (

        <form className={classes.form}>
            <Input label="Qty" input={{
                id: 'amount' + props.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1'
            }} />
            <button onClick={sumbitHandler}>Add</button>
        </form>

    )
}

export default FoodItemForm