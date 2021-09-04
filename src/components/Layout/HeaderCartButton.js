import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css'
export default function HeaderCartButton(){

    return(
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>

                Cart
            </span>
            <span className={styles.badge}>
                3 
            </span>
        </button>
    )
}