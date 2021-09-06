import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import ModalContext from "../../context/modal-context";
import ItemContext from "../../context/item-context";
import styles from './HeaderCartButton.module.css'
export default function HeaderCartButton(){

    const ctx = useContext(ModalContext)
    const itm_ctx = useContext(ItemContext)

    function displayOrder(){
        ctx.show()
        //alert("ssd")
    }

    const qty = itm_ctx.items.length>0?itm_ctx.items.reduce((accumulator,cItem)=>({quantity: parseInt(cItem.quantity)+parseInt(accumulator.quantity)})).quantity:0
    

    return(
        <button className={styles.button} onClick={displayOrder}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>
                Cart
            </span>
            <span className={styles.badge}>
                {qty}
            </span>
        </button>
    )
}