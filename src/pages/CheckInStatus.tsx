import { FunctionComponent } from "react";

const CheckInStatus: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center text-right text-base text-dimgray-300 font-public-sans">
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <div className="relative font-medium">Wednesday June 14th,2023</div>
          <div className="self-stretch rounded-lg bg-night-ghost-text h-[100px] flex flex-row py-0 px-4 box-border items-center justify-between text-left">
            <div className="flex flex-row items-start justify-start gap-[30px]">
              <div className="rounded-lg bg-gainsboro-100 w-[200px] h-[58px] flex flex-row py-[17px] px-4 box-border items-center justify-between">
                <div className="relative font-medium">Search by name</div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconslinesystemsearchline1.svg"
                />
              </div>
              <div className="rounded-lg bg-gainsboro-100 w-[200px] flex flex-row py-[17px] px-4 box-border items-center justify-between">
                <div className="relative font-medium">All Groups</div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconslinesystemsearchline1.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[15px] text-center text-gray-200 font-label-medium-600">
              <div className="rounded-lg bg-night-ghost-text box-border w-[168px] h-[60px] flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-royalblue-100">
                <div className="relative font-semibold">All stations</div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconslinesystemarrowdownsline2.svg"
                />
              </div>
              <div className="rounded-lg bg-royalblue-100 box-border w-[168px] h-[52px] flex flex-row items-center justify-center gap-[8px] text-night-ghost-text border-[1px] border-solid border-royalblue-100">
                <img
                  className="relative w-4 h-4"
                  alt=""
                  src="/upload-blue.svg"
                />
                <div className="relative font-semibold">Download PDF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[17px] text-left text-5xl text-primary-black-100">
        <div className="self-stretch flex flex-row py-0 pr-0 pl-4 items-start justify-start">
          <div className="relative font-extrabold">Jehovah witness Group</div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px] text-base text-gray-200">
          <div className="self-stretch rounded-t-xl rounded-b-none bg-night-ghost-text h-20 flex flex-row py-0 px-6 box-border items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[54px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/component-241.svg"
              />
              <div className="relative font-extrabold">Name</div>
            </div>
            <div className="relative font-extrabold">Time In</div>
            <div className="relative font-extrabold">By</div>
            <div className="relative font-extrabold">Station</div>
            <div className="relative font-extrabold">Code</div>
            <div className="relative font-extrabold">Edit</div>
          </div>
          <div className="self-stretch bg-night-ghost-text h-20 flex flex-row py-0 px-[19px] box-border items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[54px]">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/component-241.svg"
              />
              <div className="relative font-extrabold">Derik Rice</div>
            </div>
            <div className="relative font-extrabold">4:00 am</div>
            <div className="relative font-extrabold">Samuel precious</div>
            <div className="relative font-extrabold">Station</div>
            <div className="relative font-extrabold">Code</div>
            <div className="relative font-extrabold">Edit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInStatus;