import { Component } from '@angular/core';
import { MealsHeaderComponent } from './components/meals-header/meals-header.component';
import { MealsBodyComponent } from './components/meals-body/meals-body.component';
import { Meal, MealCategory } from './Data/meals-categories';

@Component({
  selector: 'app-meals',
  imports: [MealsHeaderComponent, MealsBodyComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css',
})
export class MealsComponent {
  mealsCategory?: MealCategory[] | Meal[];
  regionBoolean?: boolean;
}
