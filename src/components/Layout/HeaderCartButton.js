import { useContext, useEffect,useState } from "react";
import CartIcon from "../Cart/CartIcon";
import ModalContext from "../../context/modal-context";
import ItemContext from "../../context/item-context";
import styles from './HeaderCartButton.module.css'
// import { useState } from "react/cjs/react.development";
export default function HeaderCartButton(){

    const ctx = useContext(ModalContext)
    const itm_ctx = useContext(ItemContext)
    const [btnHighlight,setBtnHighlight] = useState(false)

    let btnClass = `${styles.button} ${btnHighlight?styles.bump:''}`

    useEffect(()=>{
        setBtnHighlight(true)
        setTimeout(()=>setBtnHighlight(false),500)
        //btnClass = `${styles.button} ${styles.bump}`
        //alert("use effect run")
        //setTimeout(()=>{btnClass=`${styles.button}`},2000)
    },[itm_ctx.items])
    
    function displayOrder(){
        window.scrollTo(0,0)
        ctx.show()
        //alert("ssd")
    }

    const qty = itm_ctx.items.length>0?itm_ctx.items.reduce((accumulator,cItem)=>({quantity: parseInt(cItem.quantity)+parseInt(accumulator.quantity)})).quantity:0
    

    return(
        <button className={btnClass} onClick={displayOrder}>
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