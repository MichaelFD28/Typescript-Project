import React, { useEffect, useState } from "react";
import { RecipeOptions } from "../../model";
import Dropdown from "../subcomponents/Dropdown";
import ExpandingButton from "../subcomponents/ExpandingButton";
import InputText from "../subcomponents/InputText";

// TODO yup validation & react-hoook-forms
// TODO while filter is expanded, set results collapsed
// checkbox input
// api ingredient autofill?
// dropdown input

type RecipeSearchFilterProps = {
  open: boolean;
  handleOpen: () => void;
  recipeOptions: RecipeOptions;
  setRecipeOptions: React.Dispatch<React.SetStateAction<RecipeOptions>>;
  handleRecipeOptions: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RecipeSearchFilter: React.FC<RecipeSearchFilterProps> = ({
  open,
  handleOpen,
  recipeOptions,
  setRecipeOptions,
  handleRecipeOptions,
}: RecipeSearchFilterProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(20);
  const handleIngredients = () => {
    setRecipeOptions({
      ...recipeOptions,
      ingr: `${min}-${max}`,
    });
  };
  useEffect(() => {
    isLoaded && handleIngredients();
    setIsLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max, min]);

  const dietOptions = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium",
  ];

  const handleDiet = (e: React.SyntheticEvent<HTMLOptionElement, Event>) => {
    const target = e.target as HTMLOptionElement;
    if (recipeOptions.diet) {
      setRecipeOptions({
        ...recipeOptions,
        diet: [...recipeOptions.diet, target.value],
      });
    } else {
      setRecipeOptions({ ...recipeOptions, diet: [target.value] });
    }
  };

  useEffect(() => {
    console.log(recipeOptions);
  }, [recipeOptions]);
  return (
    <ExpandingButton text="filter" open={open} handleOpen={handleOpen}>
      <div className="flex flex-row justify-between items-center">
        <InputText
          className="w-1/3"
          id="max-ingr"
          type="number"
          min={0}
          onChange={(e) => {
            setMin(Number(e.target.value));
          }}
          placeholder="0"
        />
        <p>to</p>
        <InputText
          className="w-1/3"
          id="ingr"
          type={"number"}
          onChange={(e) => setMax(Number(e.target.value))}
          placeholder="20"
        />
      </div>
      <Dropdown
        label="diet"
        id="diet-options"
        options={dietOptions}
        multiple
        onClick={(e) => handleDiet(e)}
      />
    </ExpandingButton>
  );
};

export default RecipeSearchFilter;
