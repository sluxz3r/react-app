import React from "react";
import XMark from "./assets/icon/XMark";
import Calendar from "./assets/icon/Calendar";
import Location from "./assets/icon/Location";
import User from "./assets/user.png";

function App() {
  return (
    <div className="bg-[#FFFFFF] font-noto tracking-[-0.3px]">
      <div className="flex bg-[#262626]  px-[50px] pt-[34px] pb-[47px]">
        <div className="w-[570px] lg:w-full font-bold text-[50px] text-white">
          Choose the form of payment
        </div>
        <div className="flex-1 py-6 flex justify-center text-white">
          <XMark />
        </div>
      </div>
      <div className="p-[50px] pb-[107px] bg-[#FFFFFF] flex flex-col gap-y-[50px]">
        {/* user section*/}
        <div className="h-[164px] justify-between bg-[#F7FAFC] w-full border border-[#D3DEE9] rounded-[20px] py-[37px] pl-[39px] pr-[41px] flex">
          <div className="flex items-center">
            <div className="h-[90px] mr-[26px] w-[90px] bg-[#EDF2F7] text-[40px] leading-[54px] font-bold rounded-full flex justify-center items-center">
              J
            </div>
            <div>
              <div className="text-[40px] font-semibold text-[#262626]">
                John
              </div>
              <div className="text-[#718096] text-[26px] font-medium">
                (88) 99602-2404
              </div>
            </div>
          </div>
          <div>
            <button className="w-[142px] bg-[#EDF2F7] rounded-[10px] h-full text-[26px] font-semibold">
              Log out
            </button>
          </div>
        </div>
        {/* Selected Service section */}
        <div className="flex flex-col gap-y-[40px]">
          <div className="text-[40px] font-bold">Selected service</div>
          <div className="h-[240px] w-full flex gap-x-[27px] items-center rounded-[20px] border border-[#D3DEE9] bg-[#FFFFFF] p-[35px]">
            <div className="w-[120px] h-[120px]">
              <img className="rounded-xl" src={User} alt="user-img" />
            </div>
            <div className="flex flex-col gap-y-[12px]">
              <div className="font-semibold text-[30px]">Japanese lessons</div>
              <div className="flex items-center gap-x-[14px]">
                <div className="w-[24px]">
                  <Calendar />
                </div>
                <div className="text-[20px] font-medium text-[#718096]">
                  Nov 7, 2020 · 11:30
                </div>
              </div>
              <div className="flex items-center gap-x-[14px]">
                <div className="w-[24px]">
                  <Location />
                </div>
                <div className="text-[20px] font-medium text-[#718096]">
                  Client`s place
                </div>
              </div>
              <div className="font-semibold text-[30px]">Rp 350.000</div>
            </div>
          </div>
          {/* Details section */}
          <div className="flex flex-col gap-y-5">
            <div className="font-semibold text-[30px]">Enter your location</div>
            <input
              className="h-[100px] border border-[#D3DEE9] rounded-xl px-[26px] text-[30px] placeholder:text-[#D3DEE9]"
              type="text"
              placeholder="Enter address"
            />
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="font-semibold text-[30px]">Note (optional)</div>
            <input
              className="h-[100px] border border-[#D3DEE9] rounded-xl px-[26px] text-[30px] placeholder:text-[#D3DEE9]"
              type="text"
              placeholder="Enter text here"
            />
          </div>
        </div>
        {/* Payment section */}
        <div className="flex flex-col gap-y-[50px]">
          <div className="text-[50px] font-bold">Choose a way to pay</div>
          <div className="flex flex-row gap-5 flex-wrap">
            <div className="w-[315px] px-14 text-center flex justify-center items-center text-[30px] font-semibold h-[100px] border-2 border-[#262626] rounded-xl">
              Cash
            </div>
            <div className="w-[315px] px-14 text-center flex justify-center items-center text-[30px] font-semibold h-[100px] bg-[#EDF2F7] rounded-xl">
              Credit card
            </div>
            <div className="w-[315px] px-14 text-center flex justify-center items-center text-[30px] font-semibold h-[100px] bg-[#EDF2F7] rounded-xl">
              eWallet/ Virtual bank
            </div>
          </div>
        </div>
        {/* checkbox */}
        <div className="flex gap-x-[25px] items-start">
          <input
            className="h-[30px] w-[30px] mt-2 ring-2 rounded-sm ring-black"
            type="checkbox"
          />
          <label className="text-[26px] not-italic text-[#718096]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
            <span className="underline text-[#1E21FF]">do eiusmod</span>
          </label>
        </div>
        {/* buttom */}
      </div>
      <div className="py-[30px] items-center px-[50px] bg-[#FFFFFF] flex justify-between border-[#D3DEE9] border-t">
        <div className="text-[30px] font-medium">Previous</div>
        <button className="bg-[#1E21FF] rounded-xl text-[30px] font-semibold w-[240px] h-[100px] text-white">Next</button>
      </div>
    </div>
  );
}

export default App;
