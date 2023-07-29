import { FunctionComponent } from "react";

const DashboardSelection: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[1219px] flex flex-col items-start justify-start text-center text-3xl text-royalblue-100 font-public-sans">
      <div className="self-stretch bg-night-ghost-text overflow-hidden flex flex-col p-[15px] items-center justify-center">
        <div className="self-stretch flex-1 flex flex-row items-center justify-between">
          <div className="relative tracking-[2.16px] leading-[18px] uppercase font-extrabold">
            LOGO
          </div>
          <div className="flex flex-row items-center justify-center gap-[16px] text-sm text-night-ghost-text md:hidden">
            <div className="rounded-lg bg-royalblue-100 w-[136px] h-[43px] flex flex-row items-center justify-center gap-[8px] md:w-[120px]">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/remixiconsfillbuildingshome6fill1.svg"
              />
              <div className="relative tracking-[2px] leading-[18px] font-extrabold md:text-sm md:w-[91px]">
                Dashboard
              </div>
            </div>
            <div className="rounded-lg box-border w-[136px] h-[43px] overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[8px] text-gray-100 border-[2px] border-solid border-royalblue-100">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/tile.svg"
              />
              <div className="relative tracking-[2.16px] leading-[14px] font-extrabold">
                Template
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[10px]">
            <div className="relative w-[38px] h-[38px]">
              <img
                className="absolute h-[78.59%] w-[78.59%] top-[10.94%] right-[9.61%] bottom-[10.47%] left-[11.8%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/woman.png"
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
      <div className="self-stretch flex-1 bg-whitesmoke-200 overflow-hidden flex flex-col py-72 px-0 items-center justify-center text-5xl text-primary-black-100 md:pt-[150px] md:pb-[150px] md:box-border sm:pt-20 sm:pb-20 sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-center gap-[72px]">
          <div className="relative tracking-[2.16px] leading-[18px] font-extrabold text-royalblue-100">
            Dashboard
          </div>
          <div className="relative text-29xl tracking-[2.16px] leading-[18px] font-extrabold md:text-16xl">
            Hi Alice!
          </div>
          <div className="relative tracking-[2.16px] leading-[18px] font-semibold text-dimgray-200">
            Choose one
          </div>
          <div className="flex flex-row items-center justify-center gap-[20px] md:flex-wrap">
            <div className="w-[300px] h-[300px] flex flex-col items-center justify-between">
              <div className="rounded-3xs bg-night-ghost-text w-[300px] h-[300px] overflow-hidden shrink-0 flex flex-col items-center justify-between">
                <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-[11px]">
                  <img
                    className="relative w-[88px] h-[88px]"
                    alt=""
                    src="/remixiconsfilldevicesmartphonefill1.svg"
                  />
                  <div className="relative leading-[36.44px] uppercase font-semibold">
                    <p className="m-0">{`Mobile App `}</p>
                    <p className="m-0">Builder</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xs bg-night-ghost-text shadow-[0px_19px_83px_rgba(35,_82,_213,_0.1)] box-border w-[303.5px] h-[303.5px] overflow-hidden shrink-0 flex flex-col items-center justify-between text-3xl border-[3.5px] border-solid border-royalblue-100">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-[12.65px]">
                <img
                  className="relative w-[89.95px] h-[89.95px]"
                  alt=""
                  src="/remixiconsfilldevicemacbookfill1.svg"
                />
                <div className="self-stretch relative leading-[37.24px] uppercase font-semibold">
                  Website Builder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSelection;
