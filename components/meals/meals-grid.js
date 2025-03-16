import classes from './meals-grid.module.css'

export default function MealsGrid({meals}) {
    return <ul className={classes.meal}>
        {meals.map(meal => <li key={meal.id}></li>)}
    </ul>

}