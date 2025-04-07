"use client";
import React, { useEffect, useState } from "react";
import PaginaionFooter from "./PaginaionFooter";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  console.log(Loading);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=6`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [page]);

  return (
    <>
      {Loading ? (
        <div className="text-center py-4 text-gray-500 font-medium h-screen flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <div className="max-w-[1100px] mx-auto px-4 py-10 flex flex-col overflow-hidden h-screen">
          <div className="grow overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-9 ">
              {data.map((img) => (
                <div key={img.id} className="max-w-[400px] w-full">
                  <img
                    className="rounded-xl w-full h-auto object-cover"
                    src={img.download_url}
                    alt={img.author}
                  />
                  <p className="mt-2 text-center text-sm text-gray-700 pt-5">
                    {img.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <PaginaionFooter setPage={setPage} page={page} />
        </div>
      )}
    </>
  );
};

export default Pagination;
