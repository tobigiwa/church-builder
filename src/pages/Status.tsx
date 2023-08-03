import { FunctionComponent } from "react";

const Status1: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center gap-[24px] text-right text-base text-dimgray-300 font-public-sans">
      <div className="relative font-medium">Wednesday June 14th, 2023</div>
      <div className="self-stretch relative rounded-lg bg-night-ghost-text h-[352px] text-5xl text-primary-black-100">
        <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_112.5px)] flex flex-col items-center justify-center gap-[20px]">
          <div className="flex flex-row items-center justify-center relative gap-[10px]">
            <div className="relative rounded-[50%] bg-royalblue-400 w-[131px] h-[131px] z-[0]" />
            <img
              className="absolute my-0 mx-[!important] top-[25.5px] left-[25.5px] w-[80.01px] h-[80.01px] overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/remixiconsfilldocumentdraftfill1.svg"
            />
          </div>
          <div className="relative font-semibold">No status here yet</div>
        </div>
      </div>
    </div>
  );
};

export default Status1;
