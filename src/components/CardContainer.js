import React, { useState } from "react";
import { sampleData } from "../data/sampleData";
import SingleCard from "./SingleCard";

const CardContainer = () => {
  const [data, setData] = useState(sampleData);

  const handleSearch = (e) => {
    const searchResult = sampleData.filter((a) =>
      a.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(searchResult);
  };
  return (
    <div className="container">
      <h1 className="text-center my-3 fw-bold">PremiseHQ</h1>
      <div className="d-flex justify-content-center my-4">
        <input
          className="border border-black rounded p-2"
          placeholder="Search"
          type="text"
          name=""
          id=""
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="card-container">
        {data.map((data) => (
          <SingleCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
