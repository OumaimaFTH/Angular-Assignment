import { allCoffeesLoaded } from './../coffee.actions';
import { Coffee } from './../../model/coffee';
import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { CoffeeActions } from "../action-types";
import { createReducer, on } from '@ngrx/store';


export interface CoffeeState extends EntityState<Coffee>{
 allCoffeesLoaded:boolean
}

export const adapter = createEntityAdapter<Coffee>();

export const initialCoffeeState = adapter.getInitialState({
    allCoffeesLoaded:false
});

export const coffeesReducer = createReducer(
    initialCoffeeState,

    on(CoffeeActions.allCoffeesLoaded,
        (state,action)=>adapter.setAll(action.coffees,
             {...state, allCoffeesLoaded:true}))
);

export const {selectAll}=adapter.getSelectors()