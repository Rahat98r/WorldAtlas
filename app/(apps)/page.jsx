import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Countrycard from "./component/UI/Countrycard";

import Link from "next/link";
import Footer from "./component/UI/Footer";

const page = () => {
  return (
    <div className=" w-[1150px] mx-auto min-h-full border">
      <section className="pt-[40px]">
        <div className="grid grid-cols-2">
          <div className=" text-white  h-full">
            <h1 className="text-4xl font-bold mt-2.5 ">
              Explore the world,One <br />
              country at a time
            </h1>
            <p className="my-[30px] text-[15px]">
              Discover the history, culture, and beauty of every nation. Sort,
              search, and filter through countries to find the details you need.
            </p>
            <div>
              <Link
                className="inline-flex items-center justify-center gap-2 px-[10px] py-[2px] bg-[#2f2b2b] text-white rounded-[20px]  
            text-center"
                href="/country"
              >
                <span className="mb-1">Start Exploring</span>

                <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/world-1.png"
              width={400}
              height={400}
              alt="img"
              className="w-full "
            />
          </div>
        </div>
      </section>
      <section className=" pt-10 ">
        <Countrycard />
      </section>
    </div>
  );
};

export default page;
