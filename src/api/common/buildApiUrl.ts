import config from "../../configuration";
import { RecipeOptions } from "../../model";

const buildRecipeApiUrl = (recipeOptions: RecipeOptions): string => {
  //check recipeOptions for value in each item
  //if value, add string `&${item}={value}`
  let path: string = config.recipeAPIBaseUrl;
  for (const [key, value] of Object.entries(recipeOptions)) {
    if (value.length) {
      path += `&${key}=${JSON.stringify(value)}`;
    }
  }
  return path;
};

export default buildRecipeApiUrl;
