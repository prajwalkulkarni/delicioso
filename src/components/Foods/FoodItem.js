
import classes from './FoodItem.module.css'
import FoodItemForm from './FoodItemForm'
import { CircularProgress } from '@material-ui/core'
import { useState } from 'react'
export default function FoodItem(props){

    const [load,setLoad] = useState(false)

    function toggleSpinner(){
        console.log("called")
        setLoad(true)

    }
    const imgClassName = load? classes.img: classes.img+classes.nodisplay

    return(
        
        <div key={props.id} className={classes.foodHolder}>
            <div className={classes.foodItem}>
                {!load&&<CircularProgress/>}
                <img src={props.pic} alt="food" height="180" width="180" className={imgClassName} onLoad ={toggleSpinner} />
                
                <div className={classes.nameDesc}>
                    <b>{props.name}</b>
                    {props.desc}
                    <b className={classes.price}>${props.price}</b>
                </div>
                <div>
                <FoodItemForm id={props.id} price={props.price} name={props.name}/>
            </div>

            </div>
            

            

        </div>
    )

}