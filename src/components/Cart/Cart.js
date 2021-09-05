import classes from './Cart.module.css';
import Modal from '../UI/Modal'
import { useContext } from 'react';
import ModalContext from '../../context/modal-context';

export default function Cart(props){
    const ctx = useContext(ModalContext)

    function closeOrder(){
        //ctx.isVisible = false
        ctx.fn()
    }

    return(
        <Modal>

            <div className={classes.total}>
                <span>Total</span>
                <span>69.69</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={closeOrder}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}