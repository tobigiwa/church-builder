import { FunctionComponent } from "react";

const MainInteraction: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[1322px] flex flex-col items-start justify-start text-left text-base text-white font-heading-x-small-600 font-public-sans">
      <div className="self-stretch bg-white overflow-hidden flex flex-col py-[13px] pr-0 pl-[105px] items-start justify-start border-b-[1px] border-solid border-lightgray-300">
        <div className="self-stretch flex flex-row py-0 pr-[21px] pl-0 items-center justify-between">
          <div className="rounded-lg bg-gainsboro w-[325px] flex flex-row py-[23px] px-[31px] box-border items-center justify-start">
            <input
              className="[border:none] font-medium  text-base bg-[transparent] self-stretch flex-1 relative leading-[18px] text-dimgray-200 text-left flex items-center [outline:none]"
              type="text"
              placeholder="Search for projects"
            />
          </div>
          <div className="w-[376px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-[12.25px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[26.5px] font-semibold  text-black text-center inline-block">
                People
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[26.5px] font-semibold  text-black text-center inline-block">
                Event
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[26.5px] font-semibold  text-black text-center inline-block">
                Give now
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[26.5px] font-semibold  text-black text-center inline-block">
                Worship Planning
              </button>
            </div>
          </div>
          <div className="w-[62px] flex flex-row items-center justify-center">
            <div className="relative w-[38px] h-[38px]">
              <img
                className="absolute h-[78.59%] w-[78.59%] top-[10.94%] right-[9.61%] bottom-[10.47%] left-[11.8%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/rectangle@2x.png"
              />
              <img
                className="absolute top-[0px] left-[0px] rounded-[235.06px] w-[38px] h-[38px] object-cover"
                alt=""
                src="/frame-130@2x.png"
              />
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/remixiconslinesystemarrowdownsline2.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 bg-whitesmoke overflow-hidden flex flex-row items-start justify-start">
        <div className="bg-royalblue-100 w-[230px] h-[1238px] overflow-hidden shrink-0 flex flex-row pt-[130px] px-0 pb-0 box-border items-start justify-start">
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <button className="cursor-pointer [border:none] py-4 pr-4 pl-3.5 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center [outline:none] md:active:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/remixiconsfilldesignlayoutmasonryfill1.svg"
                />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-heading-x-small-600 text-white text-left">
                  Individuals
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-4 pr-0 pl-1.5 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] md:active:bg-slateblue">
              <div className="flex flex-row items-end justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfilluserteamfill.svg"
                />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-heading-x-small-600 text-white text-left">
                  Groups
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconslinesystemarrowdownsline21.svg"
                />
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-4 pr-[13px] pl-[31px] bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] md:active:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/remixiconsfillbusinessmailfill.svg"
                />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-heading-x-small-600 text-white text-left">
                  Mass contact
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-4 pr-4 pl-12 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] md:active:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfillcommunicationdiscussfill1.svg"
                />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-heading-x-small-600 text-white text-left">
                  Interaction
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconslinesystemarrowdownsline1.svg"
                />
              </div>
            </button>
            <div className="self-stretch bg-gray-300 h-[226px] overflow-hidden shrink-0 flex flex-col items-end justify-between mt-[-1px]">
              <div className="self-stretch h-11 flex flex-row py-0 pr-0 pl-[54.5px] box-border items-center justify-between md:active:bg-royalblue-300">
                <div className="flex-1 relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  My Outstanding
                </div>
                <div className="relative bg-white w-2 h-11 overflow-hidden shrink-0 hidden md:active:flex" />
              </div>
              <div className="self-stretch h-11 flex flex-row py-0 pr-0 pl-[54.5px] box-border items-center justify-between md:active:bg-royalblue-300">
                <div className="flex-1 relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Outstanding
                </div>
                <div className="relative bg-white w-2 h-11 overflow-hidden shrink-0 hidden md:active:flex" />
              </div>
              <div className="self-stretch h-11 flex flex-row py-0 pr-0 pl-[54.5px] box-border items-center justify-between md:active:bg-royalblue-300">
                <div className="flex-1 relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Completed
                </div>
                <div className="relative bg-white w-2 h-11 overflow-hidden shrink-0 hidden md:active:flex" />
              </div>
              <div className="bg-royalblue-300 w-[230px] h-11 flex flex-row py-4 pr-0 pl-[54.5px] box-border items-center justify-center md:active:bg-royalblue-300">
                <div className="flex-1 relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Assign
                </div>
                <div className="relative bg-white w-2 h-11 overflow-hidden shrink-0 hidden md:active:flex" />
              </div>
              <div className="self-stretch h-11 flex flex-row py-0 pr-0 pl-[54.5px] box-border items-center justify-between md:active:bg-royalblue-300">
                <div className="flex-1 relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Log
                </div>
                <div className="relative bg-white w-2 h-11 overflow-hidden shrink-0 hidden md:active:flex" />
              </div>
            </div>
            <div className="rounded-lg w-[230px] overflow-hidden flex flex-col py-4 pr-4 pl-[55px] box-border items-center justify-center mt-[-1px] md:active:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfilldesignlayoutmasonryfill2.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Attendance
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconslinesystemarrowdownsline21.svg"
                />
              </div>
            </div>
            <div className="rounded-lg w-[230px] overflow-hidden flex flex-col py-4 pr-[35px] pl-0 box-border items-center justify-center mt-[-1px] md:active:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfillbusinesslinechartfill.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Report
                </div>
              </div>
            </div>
            <div className="rounded-lg w-[230px] overflow-hidden flex flex-col py-4 pr-4 pl-0 box-border items-center justify-center mt-[-1px] md:active:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img className="relative w-6 h-6" alt="" src="/group.svg" />
                <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Calendar
                </div>
              </div>
            </div>
            <div className="rounded-lg w-[230px] overflow-hidden flex flex-col py-4 pr-4 pl-[9px] box-border items-center justify-center mt-[-1px] md:active:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfillbusinesscalendarcheckfill.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Schedules
                </div>
              </div>
            </div>
            <div className="rounded-lg w-[230px] overflow-hidden flex flex-col py-4 pr-4 pl-[13px] box-border items-center justify-center gap-[10px] mt-[-1px] md:active:bg-slateblue">
              <div className="rounded-lg w-[230px] overflow-hidden flex flex-col py-4 pr-4 pl-1 box-border items-center justify-center md:active:bg-slateblue">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/remixiconsfillfinancehandheartfill1.svg"
                  />
                  <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                    My Giving
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfillbusinessstackfill.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Workflows
                </div>
              </div>
            </div>
            <div className="rounded-lg w-[230px] overflow-hidden flex flex-col p-4 box-border items-center justify-center mt-[-1px] md:active:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfilldesignlayoutmasonryfill.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Dashboard
                </div>
              </div>
            </div>
            <div className="rounded-lg w-[230px] overflow-hidden flex flex-col py-4 pr-[39px] pl-0 box-border items-center justify-center mt-[-1px] md:active:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfilldocumentdraftfill.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                  Forms
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[1181px] flex flex-col py-0 pr-[30px] pl-0 box-border items-start justify-start gap-[92px] text-21xl text-black">
          <div className="self-stretch bg-white h-[226px] overflow-hidden shrink-0 flex flex-col py-11 px-7 box-border items-start justify-start">
            <div className="w-[430px] flex flex-row p-2.5 box-border items-center justify-start">
              <div className="relative tracking-[-0.05em] leading-[64px] font-semibold">
                Interaction
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                <button className="cursor-pointer p-0 bg-white rounded-lg box-border w-[150px] h-12 flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100 hover:bg-royalblue-100 active:bg-royalblue-100">
                  <div className="self-stretch flex-1 relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-heading-x-small-600 text-gray-200 text-center flex items-center justify-center hover:text-white active:text-white">
                    My Outstanding
                  </div>
                </button>
                <button className="cursor-pointer p-0 bg-white rounded-lg box-border w-[150px] h-12 flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100 hover:bg-royalblue-100 active:bg-royalblue-100">
                  <div className="self-stretch flex-1 relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-heading-x-small-600 text-gray-200 text-center flex items-center justify-center hover:text-white active:text-white">
                    Outstanding
                  </div>
                </button>
                <button className="cursor-pointer p-0 bg-white rounded-lg box-border w-[150px] h-12 flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100 hover:bg-royalblue-100 active:bg-royalblue-100">
                  <div className="self-stretch flex-1 relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-heading-x-small-600 text-gray-200 text-center flex items-center justify-center hover:text-white active:text-white">
                    Completed
                  </div>
                </button>
                <button className="cursor-pointer p-0 bg-white rounded-lg box-border w-[150px] h-12 flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100 hover:bg-royalblue-100 active:bg-royalblue-100">
                  <div className="self-stretch flex-1 relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-heading-x-small-600 text-gray-200 text-center flex items-center justify-center hover:text-white active:text-white">
                    Assign
                  </div>
                </button>
                <button className="cursor-pointer p-0 bg-white rounded-lg box-border w-[150px] h-12 flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100 hover:bg-royalblue-100 active:bg-royalblue-100">
                  <div className="self-stretch flex-1 relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-heading-x-small-600 text-gray-200 text-center flex items-center justify-center hover:text-white active:text-white">
                    Log
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row py-0 pr-0 pl-[30px] items-start justify-start text-center text-sm text-gray-200 ">
            <div className="self-stretch flex-1 rounded-lg bg-white flex flex-col py-[62px] px-11 box-border items-start justify-start relative gap-[30px] max-w-[1440px]">
              <div className="flex flex-col items-start justify-start gap-[8px] z-[0]">
                <div className="relative leading-[18px] font-extrabold">
                  <span>Action</span>
                  <span className="text-crimson">*</span>
                </div>
                <div className="rounded-lg bg-gainsboro w-[484px] h-12 overflow-hidden shrink-0 flex flex-row py-0 px-4 box-border items-center justify-start gap-[8px]">
                  <input
                    className="[border:none] font-medium  text-base bg-[transparent] self-stretch flex-1 relative leading-[18px] text-dimgray-200 text-left flex items-center [outline:none]"
                    type="email"
                    placeholder="Email"
                  />
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/remixiconslinesystemarrowdownsline3.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[1]">
                <div className="relative leading-[18px] font-extrabold">
                  <span>{`Assign To `}</span>
                  <span className="text-crimson">*</span>
                </div>
                <div className="self-stretch rounded-lg bg-gainsboro h-12 overflow-hidden shrink-0 flex flex-row py-0 px-6 box-border items-start justify-start">
                  <input
                    className="[border:none] font-medium  text-base bg-[transparent] self-stretch flex-1 relative leading-[18px] text-dimgray-200 text-left flex items-center [outline:none]"
                    type="text"
                    placeholder="E.g Emmanuel"
                  />
                </div>
              </div>
              <div className="relative text-3xs leading-[18px] font-medium text-dimgray-200 text-left z-[2]">
                Choose a name from the suggestion list.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[3]">
                <div className="relative leading-[18px] font-extrabold">
                  <span>Individual</span>
                  <span className="text-crimson">*</span>
                </div>
                <div className="self-stretch rounded-lg bg-gainsboro h-12 overflow-hidden shrink-0 flex flex-row py-0 px-6 box-border items-start justify-start">
                  <input
                    className="[border:none] font-medium  text-base bg-[transparent] self-stretch flex-1 relative leading-[18px] text-dimgray-200 text-left flex items-center [outline:none]"
                    type="text"
                    placeholder="E.g Emmanuel"
                  />
                </div>
              </div>
              <div className="relative text-3xs leading-[18px] font-medium text-dimgray-200 text-left z-[4]">
                Choose a name from the suggestion list.
              </div>
              <div className="self-stretch flex flex-col items-start justify-center gap-[8px] z-[5]">
                <div className="relative leading-[18px] font-extrabold">
                  <span>{`Instruction `}</span>
                  <span className="text-crimson">*</span>
                </div>
                <textarea className="[border:none] bg-gainsboro self-stretch rounded-lg h-[131px] overflow-hidden shrink-0 [outline:none]" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] z-[6]">
                <div className="relative leading-[18px] font-extrabold">
                  <span>Completed By</span>
                  <span className="text-crimson">*</span>
                </div>
                <div className="self-stretch rounded-lg bg-gainsboro h-12 overflow-hidden shrink-0 flex flex-row py-0 px-6 box-border items-center justify-between">
                  <input
                    className="[border:none] font-medium  text-base bg-[transparent] self-stretch flex-1 relative leading-[18px] text-dimgray-200 text-left flex items-center [outline:none]"
                    type="date"
                    placeholder="17/06/23"
                  />
                </div>
              </div>
              <div className="relative w-[143px] h-6 z-[7] text-left text-3xs text-dimgray-200">
                <div className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden">
                  <input
                    className="cursor-pointer absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [outline:none]"
                    type="checkbox"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_3px)] left-[29px] leading-[18px] font-medium">
                  Notify me on completion
                </div>
              </div>
              <div className="rounded-lg bg-royalblue-200 box-border w-[168px] h-12 flex flex-row py-0 px-[30px] items-center justify-center z-[8] border-[1px] border-solid border-royalblue-100 hover:bg-midnightblue">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex-1 relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-heading-x-small-600 text-white text-center flex items-center justify-center">
                  Save
                </button>
              </div>
              <select className="my-0 mx-[!important] absolute top-[127px] left-[43px] bg-white shadow-[0px_18px_21px_rgba(0,_0,_0,_0.1)] w-[486px] h-[129px] overflow-hidden shrink-0 hidden flex-col p-[11px] box-border items-start justify-start gap-[16px] z-[9]">
                <option value="email">Email</option>
                <option value="note">General Note</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInteraction;
