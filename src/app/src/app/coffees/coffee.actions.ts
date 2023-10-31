import { Coffee } from './../model/coffee';
import { createAction, props } from "@ngrx/store";


export const loadAllCoffees = createAction(
    "[Coffees Resolver] Load All Coffees"
);

export const allCoffeesLoaded =createAction(
    "[Load Coffees Effect] All Cofees Loaded",
    props<{coffees:Coffee[]}>()
)

