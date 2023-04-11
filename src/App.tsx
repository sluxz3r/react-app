import React from "react";
import XMark from "./assets/icon/XMark";
import Calendar from "./assets/icon/Calendar";
import Location from "./assets/icon/Location";
import User from "./assets/user.png";

function App() {
  return (
    <div className="bg-[#FFFFFF] font-noto tracking-[-0.3px]">
      <div className="flex bg-[#262626] px-8 lg:p-[50px] p-6">
        <div className="flex-1 lg:w-full font-bold text-[25px] lg:text-[50px] text-white">
          Choose the form of payment
        </div>
        <div className="lg:py-6 py-2 flex justify-center text-white">
          <XMark width={22} height={22} />
        </div>
      </div>
      <div className="p-8 lg:p-[50px] pb-[107px] bg-[#FFFFFF] flex flex-col gap-y-6 lg:gap-y-[50px]">
        {/* user section*/}
        <div className="justify-between bg-[#F7FAFC] w-full border border-[#D3DEE9] rounded-[20px] p-6 lg:p-[39px] flex">
          <div className="flex items-center">
            <div className="h-[50px] w-[50px] lg:h-[90px] mr-2 lg:mr-[26px] lg:w-[90px] bg-[#EDF2F7] text-xl lg:text-[40px] leading-[54px] font-bold rounded-full flex justify-center items-center">
              J
            </div>
            <div>
              <div className="lg:text-[40px] text-lg md:text-xl font-semibold text-[#262626]">
                John
              </div>
              <div className="text-[#718096] lg:text-[26px] font-medium">
                (88) 99602-2404
              </div>
            </div>
          </div>
          <div>
            <button className="px-2 lg:px-12 bg-[#EDF2F7] rounded-[10px] h-full lg:text-[26px] font-semibold">
              Log out
            </button>
          </div>
        </div>
        {/* Selected Service section */}
        <div className="flex flex-col gap-y-5 lg:gap-y-[40px]">
          <div className="text-2xl lg:text-[40px] font-bold">
            Selected service
          </div>
          <div className="w-full flex gap-x-5 smgap-x-6 lg:gap-x-[27px] items-center p-6 rounded-[20px] border border-[#D3DEE9] bg-[#FFFFFF] lg:p-[35px]">
            <div className="w-1/5 md:w-1/6 lg:w-1/12">
              <img className="rounded-xl w-full" src={User} alt="user-img" />
            </div>
            <div className="flex flex-1 flex-col gap-y-0.5 lg:gap-y-[12px]">
              <div className="font-semibold text-lg lg:text-[30px]">
                Japanese lessons
              </div>
              <div className="flex items-center gap-x-2 lg:gap-x-[14px]">
                <div className="lg:w-[24px] w-5">
                  <Calendar />
                </div>
                <div className="lg:text-[20px] font-medium text-[#718096]">
                  Nov 7, 2020 · 11:30
                </div>
              </div>
              <div className="flex items-center gap-x-2 lg:gap-x-[14px]">
                <div className="lg:w-[24px] w-5">
                  <Location />
                </div>
                <div className="lg:text-[20px] font-medium text-[#718096]">
                  Client`s place
                </div>
              </div>
              <div className="font-semibold lg:text-[30px] text-lg">
                Rp 350.000
              </div>
            </div>
          </div>
          {/* Details section */}
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <div className="font-semibold text-xl md:text-[30px]">
              Enter your location
            </div>
            <input
              className="h-14 md:h-[100px] border border-[#D3DEE9] rounded-xl px-4 lg:px-[26px] text-lg md:text-[30px] placeholder:text-[#D3DEE9]"
              type="text"
              placeholder="Enter address"
            />
          </div>
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <div className="font-semibold text-xl md:text-[30px]">
              Note (optional)
            </div>
            <input
              className="h-14 md:h-[100px] border border-[#D3DEE9] rounded-xl px-4 lg:px-[26px] text-lg md:text-[30px] placeholder:text-[#D3DEE9]"
              type="text"
              placeholder="Enter text here"
            />
          </div>
        </div>
        {/* Payment section */}
        <div className="flex flex-col gap-y-[50px]">
          <div className="text-3xl md:text-[50px] font-bold">
            Choose a way to pay
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6">
            <div className="w-full text-center flex justify-center items-center px-2 text-xl md:text-[30px] font-semibold h-16 md:h-[100px] border-2 border-[#262626] rounded-xl">
              Cash
            </div>
            <div className="w-full flex text-center  justify-center items-center px-2 text-xl md:text-[30px] font-semibold h-16 md:h-[100px] bg-[#EDF2F7] rounded-xl">
              Credit card
            </div>
            <div className="w-full flex text-center  justify-center items-center px-2 text-xl md:text-[30px] font-semibold h-16 md:h-[100px] bg-[#EDF2F7] rounded-xl">
              eWallet/ Virtual bank
            </div>
          </div>
        </div>
        {/* checkbox */}
        <div className="flex gap-x-3 md:gap-x-[25px] items-start">
          <input
            className="h-4 w-4 md:h-[30px] md:w-[30px] mt-2 ring-2 rounded-sm ring-black"
            type="checkbox"
          />
          <label className="text-sm md:text-[26px] text-[#718096]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
            <span className="underline text-[#1E21FF]">do eiusmod</span>
          </label>
        </div>
        {/* buttom */}
      </div>
      <div className="py-6 md:py-[30px] items-center px-8 md:px-[50px] bg-[#FFFFFF] flex justify-between border-[#D3DEE9] border-t">
        <div className="text-xl md:text-[30px] font-medium">Previous</div>
        <button className="bg-[#1E21FF] rounded-xl md:text-[30px] font-semibold px-14 py-6 text-white">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
