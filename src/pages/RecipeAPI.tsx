import React, { useEffect, useState } from "react";
import useSWR from "swr";
import InputText from "../components/subcomponents/InputText";
import Button from "../components/subcomponents/Button";
import { RecipeOptions, RecipeAPIResponse } from "../model";
import buildRecipeApiUrl from "../api/common/buildApiUrl";
import RecipeScrollBox from "../components/recipeapi/RecipeScrollBox";

// TODO need to handle all input options
// TODO yup validation query cant be empty or contain numbers/symbols
// TODO separate this file
// https://developer.edamam.com/edamam-docs-recipe-api

const fetcher = (path: string): Promise<RecipeAPIResponse> => {
  return fetch(path).then((response) => response.json());
};

const RecipeAPI: React.FC = () => {
  const [recipeOptions, setRecipeOptions] = useState<RecipeOptions>({
    q: "",
    ingr: "",
    diet: [],
    health: [],
    cuisineType: [],
    mealType: [],
    dishType: [],
    calories: "",
    time: "",
    excluded: [],
  });

  const [pages, setPages] = useState<string[]>([]);
  const [pageNum, setPageNum] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRecipeOptions = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    setRecipeOptions({ ...recipeOptions, [target?.id]: target?.value });
  };
  const [apiUrl, setApiUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPages((pages) => [buildRecipeApiUrl(recipeOptions)]);
    setApiUrl(buildRecipeApiUrl(recipeOptions));
    setLoading(true);
  };
  const { data, error } = useSWR<RecipeAPIResponse>(apiUrl, fetcher);

  const handleNext = () => {
    if (data) {
      setApiUrl(data._links.next.href);
      setPageNum(pageNum + 1);
    }
  };

  useEffect(() => {
    if (!pages.includes(apiUrl)) {
      setPages((pages) => [...pages, apiUrl]);
    }
  }, [apiUrl]);

  const handleBack = () => {
    setApiUrl(pages[pageNum - 1]);
    setPageNum(pageNum - 1);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full  px-4 text-center">
        <h1 className="font-bold text-3xl mb-4 hover:cursor-pointer">
          Recipes
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputText
            id="q"
            onChange={(e) => handleRecipeOptions(e)}
            placeholder="search recipes..."
          />
          <Button type="submit" text="Search" />
        </form>
        {error && <p className=" text-rose-700">there was an error</p>}
        {data ? (
          <>
            <RecipeScrollBox
              data={data}
              handleNext={handleNext}
              handleBack={handleBack}
              pages={pages}
              pageNumber={pageNum}
              setPageNumber={setPageNum}
              setApiUrl={setApiUrl}
            />
          </>
        ) : (
          loading && <p className="font-bold">loading...</p>
        )}
      </div>
    </div>
  );
};

export default RecipeAPI;
