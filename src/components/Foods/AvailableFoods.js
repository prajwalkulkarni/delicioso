import classes from './AvailableFoods.module.css'
import Card from '../UI/Card';
import FoodItem from './FoodItem';
import useHttp from '../../hooks/http';
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

  export default function AvailableFoods(){
    // let foodData = null
    let foodArray = []
    const{foods:foodData,timeout} = useHttp()
    
    // console.log(Object.keys(foodData))
    for(const food of Object.keys(foodData)){
      // console.log(foodData[food].name)
      foodArray.push({id:food,name:foodData[food].name,description:foodData[food].description,price:foodData[food].price,src:foodData[food].src})
    }
      return(
          <Card className={classes.meals}>
              
              {!timeout&&foodArray.length===0&&<CircularProgress/>}
              {timeout&&<h1>Something went wrong, please try refreshing the page.</h1>}
                  {foodArray.map(food => {

                      return <React.Fragment key={food.id}>
                      <FoodItem id={food.id} name={food.name} desc={food.description} pic={food.src} price={food.price}/>
                      
                      </React.Fragment>

                  })}
              
          </Card>
          
      )
  }