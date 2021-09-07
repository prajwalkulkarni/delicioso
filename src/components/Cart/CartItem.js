import classes from './CartItem.module.css';

const CartItem = (props) => {
//   const qty = `$${props.price.toFixed(2)}`;
    const amount = `$${props.amount.toFixed(2)}`

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{amount}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={()=>{props.onRemove(props.id)}}>−</button>
        <button onClick={()=>{props.onAdd(props.name,props.amount)}}>+</button>
      </div>
    </li>
  );
};

export default CartItem;