import { useContext} from 'react'
import ModalContext from '../../context/modal-context'
import classes from './Checkout.module.css'
import useForm from '../../hooks/form'
import ItemContext from '../../context/item-context'


export default function Checkout(props){
    const ctx = useContext(ModalContext)
    const {isValid:nameIsValid,isInvalid:nameIsInvalid,onBlurHandler:onNameBlurHandler} = useForm(val=>val.trim()!=="")
    const {isValid:streetIsValid,isInvalid:streetIsInvalid,onBlurHandler:onStreetBlurHandler} = useForm(val=>val.trim()!=="")
    const {isValid:postalIsValid,isInvalid:postalIsInvalid,onBlurHandler:onPostalBlurHandler} = useForm(val=>typeof(parseInt(val))==="number"&&val.toLocaleString().length===6)
    const {isValid:cityIsValid,isInvalid:cityIsInvalid,onBlurHandler:onCityBlurHandler} = useForm(val=>val.trim()!=="")

    let formIsValid = false
    let itm_ctx = useContext(ItemContext)
    let itemsLength = itm_ctx.items.length>=1

    function formSubmitHandler(event){
        event.preventDefault()
        props.onOrderConfirm(
            {
                name:event.target.name.value,
                street:event.target.street.value,
                postal:event.target.postal.value,
                city:event.target.city.value
            }
        )
        

    }
    if(nameIsValid&&streetIsValid&&postalIsValid&&cityIsValid&&itemsLength){
        formIsValid = true
    }

    const controlNameClassName = `${classes.control} ${nameIsInvalid?classes.invalid:''}`
    const controlStreetClassName = `${classes.control} ${streetIsInvalid?classes.invalid:''}`
    const controlPostalClassName = `${classes.control} ${postalIsInvalid?classes.invalid:''}`
    const controlCityClassName = `${classes.control} ${cityIsInvalid?classes.invalid:''}`

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={controlNameClassName}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onBlur={onNameBlurHandler} />
                {nameIsInvalid && <p>Name cannot be empty</p>}
            </div>
            <div className={controlStreetClassName}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' onBlur={onStreetBlurHandler} />
                {streetIsInvalid&& <p>Street name cannot be empty</p>}
            </div>
            <div className={controlPostalClassName}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' onBlur={onPostalBlurHandler} />
                {postalIsInvalid&&<p>Enter valid postal code</p>}
            </div>
            <div className={controlCityClassName}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' onBlur={onCityBlurHandler} />
                {cityIsInvalid&&<p>Please enter city name</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={()=>{ctx.fn()}}>
                    Cancel
                </button>
                <button disabled={!formIsValid} className={classes.submit}>Confirm</button>
            </div>
        </form>

    )
}