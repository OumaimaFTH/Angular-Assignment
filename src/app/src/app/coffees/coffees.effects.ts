import { Injectable } from '@angular/core';
import { allCoffeesLoaded } from './coffee.actions';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CoffeeActions } from "./action-types";
import { concatMap, map } from "rxjs";
import { CoffeeHttpService } from "./coffee-http.service";

@Injectable()
export class CoffeesEffects{

    loadCoffees$= createEffect(
        ()=> this.actions$
        .pipe(
            ofType(CoffeeActions.loadAllCoffees),
            concatMap(actions=>
                this.coffeeHttpService.findAllCoffees()),
                map(coffees => allCoffeesLoaded({coffees}))
        )
    );
    constructor(private actions$:Actions, private coffeeHttpService:CoffeeHttpService){}
}