import { FunctionComponent, memo } from "react";

type LabelSettingsType = {
  onClose?: () => void;
};

const LabelSettings: FunctionComponent<LabelSettingsType> = memo(
  ({ onClose }) => {
    return (
      <div className="relative rounded-xl bg-night-ghost-text w-[675px] overflow-hidden flex flex-col p-[38px] box-border items-start justify-start gap-[38px] max-w-full max-h-full text-right text-19xl text-royalblue-100 font-public-sans">
        <div className="self-stretch flex flex-row items-center justify-between">
          <b className="relative">Label settings</b>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-11 h-11"
            onClick={onClose}
          >
            <div className="absolute top-[0px] left-[0px] rounded-981xl bg-royalblue-500 flex flex-row p-2.5 items-start justify-start">
              <img className="relative w-6 h-6" alt="" src="/cancel.svg" />
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[38px] text-sm text-primary-black-100">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <b className="relative">Individual Labels</b>
              <div className="rounded-lg bg-gainsboro-100 w-[200px] h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-center text-5xl">
                <button  className=" [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center">
                  <img
                    className="relative w-11 h-11 overflow-hidden shrink-0"
                    alt=""
                    src="/remixiconsfillsystemsubtractfill2.svg"
                  />
                </button>
                <div className="self-stretch flex-1 bg-darkgray-200 overflow-hidden flex flex-row items-center justify-center">
                  <b className="relative">0</b>
                </div>
                <button  className=" [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-center">
                  <img
                    className="relative w-11 h-11 overflow-hidden shrink-0"
                    alt=""
                    src="/remixiconsfillsystemaddfill1.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <b className="relative">Guardian Labels</b>
              <div className="rounded-lg bg-gainsboro-100 w-[200px] h-[60px] overflow-hidden shrink-0 flex flex-row items-center justify-between text-5xl">
                <button  className=" [border:none] p-0 bg-[transparent] self-stretch w-11 flex flex-row items-center justify-between">
                  <img
                    className="relative w-11 h-11 overflow-hidden shrink-0"
                    alt=""
                    src="/remixiconsfillsystemsubtractfill2.svg"
                  />
                </button>
                <div className="self-stretch flex-1 bg-darkgray-200 overflow-hidden flex flex-row items-center justify-center">
                  <b className="relative">0</b>
                </div>
                <button  className=" [border:none] p-0 bg-[transparent] self-stretch w-11 flex flex-row items-center justify-between">
                  <img
                    className="relative w-11 h-11 overflow-hidden shrink-0"
                    alt=""
                    src="/remixiconsfillsystemaddfill1.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[33px] text-center text-base text-gray-100 font-label-medium-600">
          <div
            className="flex-1 rounded-lg bg-night-ghost-text flex flex-row py-[18px] pr-[29px] pl-[30px] items-center justify-center cursor-pointer border-[1px] border-solid border-royalblue-100"
            onClick={onClose}
          >
            <div className="relative font-semibold">Back</div>
          </div>
          <div
            className="flex-1 rounded-lg bg-royalblue-100 flex flex-row py-[18px] pr-[29px] pl-[30px] items-center justify-center cursor-pointer text-night-ghost-text"
            onClick={onClose}
          >
            <div className="relative font-semibold">Save</div>
          </div>
        </div>
      </div>
    );
  }
);

export default LabelSettings;
