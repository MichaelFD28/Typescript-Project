import React from "react";
import Button from "./subcomponents/Button";

type PaginationProps = {
  pagesArray: string[];
  pageNumber: number;
  setPageNumber: (value: React.SetStateAction<number>) => void;
  setLink: (value: React.SetStateAction<string>) => void;
  handleNext: () => void;
  handleBack: () => void;
};

// TODO minimise at a certain number of pages

const Pagination: React.FC<PaginationProps> = ({
  pagesArray,
  pageNumber,
  setPageNumber,
  setLink,
  handleNext,
  handleBack,
}: PaginationProps) => {
  const handlePageNumber = (p: string, index: number) => {
    setLink(p);
    setPageNumber(index);
  };

  const handleActive = (i: number) => {
    let active;
    if (i === pageNumber) {
      active = true;
    } else {
      active = false;
    }
    return active;
  };

  return (
    <div className=" flex flex-row justify-center">
      {pagesArray.length > 1 && (
        <>
          <Button type="button" text="back" onClick={handleBack} />
          {pagesArray.map((p, index) => (
            <div key={index}>
              <Button
                active={handleActive(index)}
                type="button"
                text={(index + 1).toString()}
                onClick={() => {
                  handlePageNumber(p, index);
                }}
              />
            </div>
          ))}
        </>
      )}
      <Button type="button" text="next" onClick={handleNext} />
    </div>
  );
};

export default Pagination;
