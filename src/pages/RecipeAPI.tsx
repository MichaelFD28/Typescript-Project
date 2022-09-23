import React, { useEffect, useState } from "react";
import useSWR from "swr";
import InputText from "../components/subcomponents/InputText";
import Button from "../components/subcomponents/Button";
import { RecipeOptions, RecipeAPIResponse } from "../model";
import buildRecipeApiUrl from "../api/common/buildApiUrl";
import RecipeScrollBox from "../components/recipeapi/RecipeScrollBox";
import RecipeSearchFilter from "../components/recipeapi/RecipeSearchFilter";

// TODO need to handle all input options
// TODO yup validation query cant be empty or contain numbers/symbols
// TODO cache data
// TODO handle open better than currently :(
// TODO separate this file
// https://developer.edamam.com/edamam-docs-recipe-api

const fetcher = (path: string): Promise<RecipeAPIResponse> => {
  return fetch(path).then((response) => response.json());
};

const RecipeAPI: React.FC = () => {
  const [recipeOptions, setRecipeOptions] = useState<RecipeOptions>({
    q: "",
    ingr: "1-20",
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

  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const handleFilter = () => {
    setFilterOpen(!filterOpen);
    console.log(filterOpen);
  };

  const handleRecipeOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setRecipeOptions({ ...recipeOptions, [target?.id]: target?.value });
  };
  const [apiUrl, setApiUrl] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setPages((pages) => [buildRecipeApiUrl(recipeOptions)]);
    setApiUrl(buildRecipeApiUrl(recipeOptions));
    setLoading(true);
    setFilterOpen(false);
  };
  useEffect(() => {
    console.log("apiUrl", apiUrl);
  }, [apiUrl]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl]);

  const handleBack = () => {
    setApiUrl(pages[pageNum - 1]);
    setPageNum(pageNum - 1);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center dark:bg-slate-800 dark:text-white">
      <div className="w-full  px-4 text-center">
        {!data && (
          <h1 className="font-bold text-3xl mb-4 hover:cursor-pointer">
            Recipes
          </h1>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          <InputText
            id="q"
            type="text"
            onChange={(e) => handleRecipeOptions(e)}
            placeholder="search recipes..."
          />
          <Button type="submit" text="Search" />
          <RecipeSearchFilter
            open={filterOpen}
            handleOpen={handleFilter}
            recipeOptions={recipeOptions}
            setRecipeOptions={setRecipeOptions}
            handleRecipeOptions={handleRecipeOptions}
          />
        </form>
        {error && <p className=" text-rose-700">there was an error</p>}
        {data ? (
          <>
            <RecipeScrollBox
              data={data}
              open={!filterOpen}
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
