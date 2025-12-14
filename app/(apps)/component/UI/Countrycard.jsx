"use client";
import React, { useState, useEffect } from "react";
import { CardSpotlightDemo } from "../UI/CardSpotlightDemo";

import { CardSpotlight } from "@/components/ui/card-spotlight";

const Countrycard = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/data/countryData.json");
      const data = await res.json();
      setCountry(data);
    }
    loadData();
  }, []);

  return (
    <div className=" flex flex-col  items-center justify-center w-[1150px]  mx-auto ">
      <h2 className="text-white text-3xl text-center pb-[15px]">
        Here are the interesting facts <br /> we are proud of
      </h2>
      <div className=" grid grid-cols-3 gap-6 p-4  ">
        {country.map((elem, id) => {
          return <CardSpotlightDemo key={id} {...elem} />;
        })}
      </div>
    </div>
  );
};

export default Countrycard;
