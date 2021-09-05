import classes from './AvailableFoods.module.css'
import Card from '../UI/Card';
import FoodItem from './FoodItem';
import React from 'react';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Vegan Spanish omlette',
      description: 'Finest vegan omlette',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Avocado toast',
      description: 'Breakfast done right!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Herb burger',
      description: 'Herb bun with black sesame seeds, potato patty and creamy mayo',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  export default function AvailableFoods(){
      return(
          <Card className={classes.meals}>
              <ul>

                  {DUMMY_MEALS.map(food => {

                      return <React.Fragment key={food.id}>
                      <FoodItem id={food.id} name={food.name} desc={food.description} price={food.price}/>
                      <hr/>
                      </React.Fragment>

                  })}
              </ul>
          </Card>
          
      )
  }