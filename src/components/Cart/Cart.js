import classes from './Cart.module.css';
import Modal from '../UI/Modal'
import React, { useContext, useState } from 'react';
import ModalContext from '../../context/modal-context';
import ItemContext from '../../context/item-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

export default function Cart(props){
    const ctx = useContext(ModalContext)
    const itm_ctx = useContext(ItemContext)
    const [isSubmitting,setIsSubmitting] = useState(false)
    const [didSubmit,setDidSubmit] = useState(false)
    const [ordered,setIsOrdered] = useState(false)
    const items = itm_ctx.items
    let orderEnabled = items.length>=1
    function closeOrder(){
        //ctx.isVisible = false
        ctx.fn()
        // isOrdered(false)
    }
    function incrementItem(name,amt){
        itm_ctx.addItem({type:"ITEM",name:name,quantity:1,amt:amt})
    }

    function decrementItem(id){
        itm_ctx.rmItem({type:"REMOVE",id:id})
    }

    async function orderConfirm(userData){
        setIsSubmitting(true)
        await fetch('https://todo-a1752-default-rtdb.firebaseio.com/orders.json',{
            method:'POST',
            body: JSON.stringify({user:userData,items:itm_ctx.items})
        })
        setIsSubmitting(false)
        setDidSubmit(true)
        itm_ctx.clearCart()
    }

    const modalActions = <div className={classes.actions}>
    <button className={classes['button-alt']} onClick={closeOrder}>Close</button>
    <button disabled={!orderEnabled} className={classes.button} onClick={()=>setIsOrdered(true)}>Order</button>
    </div>

    const cartModalContent =   <React.Fragment>
        <ul className={classes['cart-items']}>
                {itm_ctx.items.map(item => {
                    return <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        amount={item.amt}
                        quantity={item.quantity}
                        onAdd={incrementItem}
                        onRemove={decrementItem}
                    />
                })}
            </ul>

            
            <div className={classes.total}>
                <span>Total</span>
                <span>${itm_ctx.totalAmount.toFixed(2)}</span>
            </div>
            {ordered&&<Checkout onOrderConfirm={orderConfirm}/>}
            {!ordered&&modalActions}
    </React.Fragment> 

    const isSubmittingModalContent = <p>Sending order data...</p>
    const didSubmitModalContent = <React.Fragment>
    <p>Order placed successfully</p>
    <div className={classes.actions}>
    <button className={classes.button} onClick={closeOrder}>Close</button>
    </div>
    </React.Fragment>
    return(
        <Modal>
            {!isSubmitting&& !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting&& didSubmit && didSubmitModalContent}
            
            
        </Modal>
    )
}