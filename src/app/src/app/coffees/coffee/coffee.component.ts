import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../../model/coffee';
import { Observable, map } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectAllCourses } from '../coffees.selectors';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit{
  totalItems = 50;
  itemsPerPage = 10;
  currentPage = 0;

  coffeeList$!: Observable<Coffee[]>;


  constructor(
     private store: Store<AppState>) {

  }

  ngOnInit() {
    this.reload();
  }
reload() {
  this.coffeeList$ = this.store.pipe(
    select(selectAllCourses)
  );
}

calculateStartIndex() {
  return this.currentPage * this.itemsPerPage;
}

calculateEndIndex() {
  return this.calculateStartIndex() + this.itemsPerPage;
}
  

  pageChanged(event: any) {
    this.currentPage = event.pageIndex;
  }


}
