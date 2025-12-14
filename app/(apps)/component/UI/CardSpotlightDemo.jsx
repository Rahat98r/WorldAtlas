import { CardSpotlight } from "@/components/ui/card-spotlight";

export function CardSpotlightDemo({
  id,
  countryName,
  capital,
  population,
  interestingFact,
}) {
  return (
    <CardSpotlight className="h-auto w-[350px] flex flex-col items-center justify-center">
      <div>
        <h1 className="text-xl font-bold relative z-20 mt-2 text-white">
          {countryName}
        </h1>
        <p className="text-white relative z-20">Capital: {capital}</p>
        <p className="text-white relative z-20">Population: {population}</p>
        <p className="text-white relative z-20  w-[320px]">
          Interesting-fact: {interestingFact}
        </p>
      </div>
    </CardSpotlight>
  );
}
