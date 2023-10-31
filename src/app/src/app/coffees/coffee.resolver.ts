import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { loadAllCoffees } from './coffee.actions';
import { finalize, first, tap } from 'rxjs';

@Injectable()
export class CoffeeResolver implements Resolve<any>{
    loading:boolean=false;
    constructor(private store: Store<AppState>){

    }
resolve(router:ActivatedRouteSnapshot, state:RouterStateSnapshot){

    return this.store.pipe(
        tap(()=>{
            if(!this.loading){
                console.log('Dispatching loadAllCoffees action');
                this.store.dispatch(loadAllCoffees())
            }
        }),first(),
        finalize(()=>{
            console.log('Resolver completed');
            this.loading=true
        })
    )
}
}