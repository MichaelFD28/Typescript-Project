import React from "react";
import { RecipeOptions } from "../../model";
import ExpandingButton from "../subcomponents/ExpandingButton";
import InputText from "../subcomponents/InputText";

// TODO yup validation & react-hoook-forms
// checkbox input
// api ingredient autofill?
// dropdown input

type RecipeSearchFilterProps = {
  recipeOptions: RecipeOptions;
  handleRecipeOptions: (e: React.FormEvent<HTMLFormElement>) => void;
};

const RecipeSearchFilter: React.FC<RecipeSearchFilterProps> = ({
  recipeOptions,
  handleRecipeOptions,
}: RecipeSearchFilterProps) => {
  return (
    <ExpandingButton text="filter">
      <InputText
        id="contains-ingredient"
        onChange={(e) => handleRecipeOptions(e)}
        placeholder="contains ingredient..."
      />
    </ExpandingButton>
  );
};

export default RecipeSearchFilter;
