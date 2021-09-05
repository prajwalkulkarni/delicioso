import AvailableFoods from './AvailableFoods'
import FoodSummary from './FoodSummary'
import React from 'react'
export default function Food(){

    return(
        <React.Fragment>
            <FoodSummary/>
            <AvailableFoods/>
        </React.Fragment>
    )
}