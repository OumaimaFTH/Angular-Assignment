import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeHttpService } from './coffee-http.service';
import { CoffeeResolver } from './coffee.resolver';
import { coffeesReducer } from './reducers/coffee.reducers';
import { RouterModule, Routes } from '@angular/router';
import { CoffeesEffects } from './coffees.effects';
import { EffectsModule } from '@ngrx/effects';

export const coffeesRoutes: Routes = [

{
  path: '',
  component: CoffeeComponent,
  resolve:{
    coffees:CoffeeResolver
  }

}
];


@NgModule({
  declarations: [CoffeeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(coffeesRoutes),
    StoreModule.forFeature("coffees", coffeesReducer),
    EffectsModule.forFeature([CoffeesEffects]),
  ],
  exports: [
    CoffeeComponent
  ],
  providers:[CoffeeHttpService,
  CoffeeResolver]
})
export class CoffeeModule { }
