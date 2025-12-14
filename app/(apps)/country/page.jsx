"use client";
import React, { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { getCountryData } from "../component/api/Api";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import SearchFilter from "../component/UI/SearchFilter";

const country = () => {
  const [countrydetails, setCountryDetails] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();

      setCountryDetails(res.data);
      console.log(res.data);
    });
  }, []);
  if (isPending) {
    return <h1 className="text-3xl text-white text-center">loading...</h1>;
  }
  // console.log(search, filter);
  const searchCountry = (country) => {
    if (search) {
      return country.name.common
        .toLowerCase()
        .includes(search.toLocaleLowerCase());
    }
    return country;
  };
  const filterRegion = (country) => {
    if (filter === "All") {
      return country;
    }

    return country.region === filter;
  };
  const filtereCountries = countrydetails.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[1150px] mx-auto pt-[20px]">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countrydetails={countrydetails}
          setCountryDetails={setCountryDetails}
        />
      </div>
      <div className="grid grid-cols-4 gap-[50px] p-4 w-[1150px] pl-[30px]">
        {filtereCountries.map((country) => {
          return (
            <CardSpotlight
              className="h-auto w-[250px] flex flex-col items-center justify-center"
              key={country.name.common}
            >
              <div className="z-20 ">
                <div>
                  <img
                    src={country.flags.svg}
                    className="w-[200px] h-[100px]"
                  />
                </div>
                <h1 className="text-xl font-bold relative z-20 mt-2 text-white">
                  {country.name.common}
                </h1>
                <p className="text-white relative z-20">
                  Capital: {country.capital[0]}
                </p>
                <p className="text-white relative z-20">
                  Population: {country.population}
                </p>
                <p className="text-white relative z-20  ">
                  Region: {country.region}
                </p>
              </div>
              <Link href={`/country/${country.name.common}`}>
                <button className="text-white relative z-20 pointer-events-auto">
                  Details
                </button>
              </Link>
            </CardSpotlight>
          );
        })}
      </div>
    </div>
  );
};

export default country;
