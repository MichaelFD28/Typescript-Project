import React from "react";
import { RecipeAPIResponse } from "../../model";
import Pagination from "../Pagination";

type Props = {
  data: RecipeAPIResponse;
  pages: string[];
  pageNumber: number;
  setPageNumber: (value: React.SetStateAction<number>) => void;
  setApiUrl: (value: React.SetStateAction<string>) => void;
  handleNext: () => void;
  handleBack: () => void;
};

const RecipeScrollBox: React.FC<Props> = ({
  data,
  pages,
  pageNumber,
  setPageNumber,
  setApiUrl,
  handleNext,
  handleBack,
}: Props) => {
  return (
    <div>
      <div className=" h-96 overflow-y-auto p-4 grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-3 justify-center">
        {data.hits.map((r) => (
          <div key={r.recipe.uri} className="group relative">
            <img
              src={r.recipe.image}
              alt={`${r.recipe.label}`}
              className="w-60 rounded-lg "
            />
            <div className="absolute bottom-0 w-60 bg-indigo-200/75 dark:bg-indigo-500/75 h-fit rounded-b-lg">
              <p className="text-right p-3 text-lg text-slate-700 dark:text-slate-200 group-hover:text-2xl ">
                {r.recipe.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination
          pagesArray={pages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          setLink={setApiUrl}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </div>
    </div>
  );
};

export default RecipeScrollBox;
