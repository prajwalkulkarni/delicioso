import classes from './AvailableFoods.module.css'
import Card from '../UI/Card';
import FoodItem from './FoodItem';
import React from 'react';
import vso from '../../assets/v_so.jpg'
import at from '../../assets/a_toast.jpg'
import hb from '../../assets/h_burger.jpg'
import gb from '../../assets/v_bowl.jpg'
import mgw from '../../assets/m_green.jpg'
import fries from '../../assets/fr_fries.jpg'
import donuts from '../../assets/du_donut.jpg'
import juice from '../../assets/fruit_juice.jpg'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Vegan Spanish omlette',
      description: 'Finest vegan omlette',
      price: 22.99,
      src:vso
    },
    {
      id: 'm2',
      name: 'Avocado toast',
      description: 'Breakfast done right!',
      price: 16.5,
      src:at
    },
    {
      id: 'm3',
      name: 'Herb burger',
      description: 'Herb bun and potato patty',
      price: 12.99,
      src:hb
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green salad',
      price: 18.99,
      src:gb
    },
    {
      id: 'm5',
      name: 'The Mexican greenwave',
      description: 'Thin crust pizza',
      price: 25.25,
      src:mgw
    },
    {
      id: 'm6',
      name: 'Peri Peri French fries',
      description: 'Crispy,spicy and tasty fries',
      price: 5.0,
      src:fries
    },{
      id: 'm7',
      name: 'Rainbow crunch donuts',
      description: 'Sugary treat',
      price: 1.99,
      src:donuts
    },{
      id: 'm8',
      name: 'Fresh fruit juice',
      description: 'Healthy...and fresh',
      price: 3.99,
      src:juice
    },
  ];

  export default function AvailableFoods(){
      return(
          <Card className={classes.meals}>
              

                  {DUMMY_MEALS.map(food => {

                      return <React.Fragment key={food.id}>
                      <FoodItem id={food.id} name={food.name} desc={food.description} pic={food.src} price={food.price}/>
                      
                      </React.Fragment>

                  })}
              
          </Card>
          
      )
  }