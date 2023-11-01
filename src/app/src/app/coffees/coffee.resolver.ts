import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import {  allCoffeesLoaded, loadAllCoffees } from './coffee.actions';
import { filter, finalize, first, tap } from 'rxjs';
import { areCoffeesLoaded } from './coffees.selectors';

@Injectable()
export class CoffeeResolver implements Resolve<any>{
    loading:boolean=false;
    constructor(private store: Store<AppState>){

    }
resolve(router:ActivatedRouteSnapshot, state:RouterStateSnapshot){

    return this.store.pipe(
        select(areCoffeesLoaded),
        tap((coffeesLoaded)=>{
            if(!this.loading && !coffeesLoaded){
                this.store.dispatch(loadAllCoffees());
                this.loading=true;
            }
        }),
        filter(coffeesLoaded=>coffeesLoaded),
        first(),
        finalize(()=>{
            this.loading=false
        })
    )

}
}