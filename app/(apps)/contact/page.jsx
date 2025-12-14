import React from "react";
import Countrycard from "../component/UI/Countrycard";
import Navbar from "../component/UI/Navbar";

const contact = () => {
  return (
    <>
      <div className="w-full bg-black   relative flex flex-col items-center gap-[30px] pt-10 ">
        <h2 className="text-white text-4xl font-bold">Contact Us</h2>
        <form
          action=""
          className=" text-white w-[400px] flex flex-col gap-[20px] "
        >
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
            className="text-white border rounded-full py-3 px-4"
          />
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your email"
            name="email"
            className="text-white border rounded-full py-3 px-4"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            required
            autoComplete="off"
            rows="10"
            className="text-white border rounded-[20px] py-3 px-4"
          ></textarea>
          <button
            type="submit"
            value="send"
            className=" px-[180px] bg-[#444] py-[10px] rounded-[30px] text-center mx-auto"
          >
            Send
          </button>
        </form>
      </div>
      {/* removed duplicate absolute Navbar that overlapped the footer */}
    </>
  );
};

export default contact;
