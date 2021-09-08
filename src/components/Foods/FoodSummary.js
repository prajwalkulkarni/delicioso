import classes from './FoodSummary.module.css'
export default function FoodSummary(){
    return(
        <section className={classes.summary}>
        <h2>Delicious Food, just in time!</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are verified for their high-quality ingredients, on-the-go recipes and
          of course curated by experienced chefs!
        </p>
      </section>
         
    )
}
