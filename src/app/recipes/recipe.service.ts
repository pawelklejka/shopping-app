import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is simply a recpie',
      'https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1-768x1075.jpg'
    ),
    new Recipe(
      'Test second recipe',
      'This is simply a recipe too',
      'https://mommyshomecooking.com/wp-content/uploads/2018/03/Easy-Whole-30-Chicken-and-Asparagus-Skillet-1-768x1075.jpg'
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
