import countryIndData from "../../component/api/CountryIndData";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = await params;
  const data = await countryIndData(id);
  const datas = data[0];
  console.log(data);

  return (
    <div className="flex items-center justify-center min-h-full">
      <div className="text-white bg-[#1a1818] w-[1100px] h-[500px] mx-auto grid grid-cols-2 rounded-xl">
        <section className="flex items-center justify-center">
          <Image
            src={datas.flags.svg}
            width={400}
            height={400}
            alt="img"
            className=" "
            priority
          />
        </section>
        <section className="pt-[60px] pl-[40px]">
          <div>
            <h1 className="text-4xl pb-[12px]">{datas.name.official}</h1>
            <p className="text-[17px] mt-[10px]">
              Native Name:
              {Object.keys(datas.name.nativeName)
                .map((key) => datas.name.nativeName[key].common)
                .join(", ")}
            </p>
            <p className="text-[17px] mt-[10px]">
              Population:{datas.population}
            </p>
            <p className="text-[17px] mt-[10px]">Region:{datas.region}</p>
            <p className="text-[17px] mt-[10px]">
              Sub Region:{datas.subregion}
            </p>
            <p className="text-[17px] mt-[10px]">Capital:{datas.capital}</p>
            <p className="text-[17px] mt-[10px]">
              Top Level Domain:{datas.tld[0]}
            </p>
            <p className="text-[17px] mt-[10px]">
              Currencies:{" "}
              {Object.keys(datas.currencies)
                .map((curElem) => datas.currencies[curElem].name)
                .join(", ")}
            </p>
            <p className="text-[17px] mt-[10px]">
              Languages:{" "}
              {Object.keys(datas.languages)
                .map((key) => datas.languages[key])
                .join(", ")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
