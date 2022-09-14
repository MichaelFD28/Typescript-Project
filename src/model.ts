export interface Todo {
  id: number;
  todo: string;
  isDone: Boolean;
}

export type RecipeOptions = {
  q: string;
  ingr?: string;
  diet?: string[];
  health?: string[];
  cuisineType?: string[];
  mealType?: string[];
  dishType?: string[];
  calories?: string;
  time?: string;
  excluded?: string[];
};

export type RecipeAPIResponseIngredientDetails = {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
};

export type RecipeAPIResponseRecipeDetails = {
  uri: string;
  label: string;
  image: string;
  images: {
    THUMBNAIL: {
      url: string;
      width: number;
      height: number;
    };
    SMALL: {
      url: string;
      width: number;
      height: number;
    };
    REGULAR: {
      url: string;
      width: number;
      height: number;
    };
  };
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: RecipeAPIResponseIngredientDetails[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: { [key: string]: any };
  totalDaily: { [key: string]: any };
  digest: { [key: string]: any }[];
};

type RecipeAPIResponseHit = {
  recipe: RecipeAPIResponseRecipeDetails;
  _links: { [key: string]: any };
};

export type RecipeAPIResponse = {
  from: number;
  to: number;
  count: number;
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
  hits: RecipeAPIResponseHit[];
};
