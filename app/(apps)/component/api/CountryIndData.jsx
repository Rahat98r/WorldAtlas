export default async function countryIndData(id) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${id}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
  return res.json();
}
