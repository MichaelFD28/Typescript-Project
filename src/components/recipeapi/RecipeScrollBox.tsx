import React, { useState } from "react";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";
import { RecipeAPIResponse } from "../../model";
import Pagination from "../Pagination";

type Props = {
  data: RecipeAPIResponse;
  open: boolean;
  pages: string[];
  pageNumber: number;
  setPageNumber: (value: React.SetStateAction<number>) => void;
  setApiUrl: (value: React.SetStateAction<string>) => void;
  handleNext: () => void;
  handleBack: () => void;
};

const RecipeScrollBox: React.FC<Props> = ({
  data,
  open,
  pages,
  pageNumber,
  setPageNumber,
  setApiUrl,
  handleNext,
  handleBack,
}: Props) => {
  return (
    <div className="m-3 h-96 overflow-y-auto ">
      <div className="flex flex-row justify-between ">
        <p>{data.count} results</p>
      </div>
      {open && (
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 gap-3 justify-center">
          {data.hits.map((r) => (
            <div
              key={r.recipe.uri}
              className="group relative hover:cursor-pointer"
            >
              <a href={r.recipe.url} target="_blank" rel="noreferrer">
                <img
                  src={r.recipe.image}
                  alt={`${r.recipe.label}`}
                  className=" rounded-lg "
                />
                <div className=" bg-indigo-200/75 dark:bg-indigo-900/75 h-fit rounded-b-lg absolute bottom-0 w-full">
                  <p className="text-right p-3 text-lg text-slate-700 dark:text-slate-200 group-hover:text-2xl ">
                    {r.recipe.label}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
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
