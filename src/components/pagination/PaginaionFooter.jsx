import React from "react";

const PaginaionFooter = ({ page, setPage }) => {
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };
  const PrevThreeNo = Array.from({ length: 3 }, (_, index) => page - 1 - index)
    .filter((value) => value > 0)
    .reverse();
  const NextFourNo = Array.from({ length: 4 }, (_, index) => page + index);

  const PaginationArray = [...PrevThreeNo, ...NextFourNo];
  console.log(PaginationArray);

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center gap-5 pt-7">
        {page > 1 && (
          <button
            onClick={handlePrev}
            className="bg-blue-500 text-white font-poppins text-2xl font-bold text-center px-5 py-2 rounded-lg"
          >
            Prev
          </button>
        )}
        {PaginationArray.map((number, index) => (
          <button
            key={index}
            onClick={() => setPage(number)}
            className={`" text-white font-poppins text-2xl font-bold text-center px-5 py-2 rounded-lg ${
              number === page ? "bg-green-500" : "bg-blue-500"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={handleNext}
          className="bg-blue-500 text-white font-poppins text-2xl font-bold text-center px-5 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginaionFooter;
