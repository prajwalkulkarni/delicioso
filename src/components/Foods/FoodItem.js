
import classes from './FoodItem.module.css'
import FoodItemForm from './FoodItemForm'
export default function FoodItem(props){

    

    return(
        
        <div key={props.id} className={classes.foodHolder}>
            <div className={classes.nameDesc}>
                <b>{props.name}</b>
                {props.desc}
               <b className={classes.price}>${props.price}</b>
            </div>

            <div>
                <FoodItemForm id={props.id} price={props.price} name={props.name}/>
            </div>

        </div>
    )

}