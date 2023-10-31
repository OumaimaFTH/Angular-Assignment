import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeesCardListComponent } from './coffees-card-list.component';

describe('CoffeesCardListComponent', () => {
  let component: CoffeesCardListComponent;
  let fixture: ComponentFixture<CoffeesCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeesCardListComponent]
    });
    fixture = TestBed.createComponent(CoffeesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
