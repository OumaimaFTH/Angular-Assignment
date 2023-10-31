import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoffeeState } from "./reducers/coffee.reducers";

import * as fromCoffees from "./reducers/coffee.reducers"
export const selectCoursesState = createFeatureSelector<CoffeeState>("coffees");

export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCoffees.selectAll
)