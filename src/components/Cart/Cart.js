import classes from './Cart.module.css';
import Modal from '../UI/Modal'
import { useContext } from 'react';
import ModalContext from '../../context/modal-context';
import ItemContext from '../../context/item-context';
import CartItem from './CartItem';

export default function Cart(props){
    const ctx = useContext(ModalContext)
    const itm_ctx = useContext(ItemContext)

    function closeOrder(){
        //ctx.isVisible = false
        ctx.fn()
    }
    function incrementItem(name,amt){
        itm_ctx.addItem({type:"ITEM",name:name,quantity:1,amt:amt})
    }

    function decrementItem(id){
        itm_ctx.rmItem({type:"REMOVE",id:id})
    }
    return(
        <Modal>


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
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={closeOrder}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}