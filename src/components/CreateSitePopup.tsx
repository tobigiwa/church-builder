import { FunctionComponent, memo } from "react";

type CreateSitePopupType = {
  onClose?: () => void;
};

const CreateSitePopup: FunctionComponent<CreateSitePopupType> = memo(
  ({ onClose }) => {
    return (
      <div className="relative rounded-xl bg-night-ghost-text w-[570px] h-[314px] overflow-hidden flex flex-col py-[23px] px-[37px] box-border items-start justify-between max-w-full max-h-full text-left text-sm text-primary-black-100 font-public-sans">
        <div className="self-stretch h-[259px] flex flex-col items-start justify-between">
          <div className="relative text-3xl leading-[18px] uppercase font-extrabold font-label-medium-600">
            Site name
          </div>
          <div className="self-stretch bg-gray-700 overflow-hidden" />
          <div className="relative leading-[18px] uppercase font-semibold">
            site Name
          </div>
          <div className="self-stretch rounded-lg bg-gainsboro-100 h-[58px] flex flex-row py-0 pr-0 pl-2.5 box-border items-center justify-between text-base text-dimgray-300">
            <div className="self-stretch flex-1 relative leading-[18px] font-medium flex items-center">
              Enter name here
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[16px] text-center text-night-ghost-text">
            <button
              className="cursor-pointer pt-[20.3700008392334px] pb-[20.3799991607666px] pr-[33.499996185302734px] pl-[32.380001068115234px] bg-[transparent] flex-1 rounded-lg box-border h-[54px] flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100"
              onClick={onClose}
            >
              <div className="relative text-sm tracking-[1.9px] leading-[18px] font-extrabold font-public-sans text-royalblue-100 text-center">
                Cancel
              </div>
            </button>
            <div className="flex-1 rounded-lg bg-royalblue-100 overflow-hidden flex flex-row py-[18px] px-[30px] items-center justify-center">
              <div className="relative tracking-[1.9px] leading-[18px] font-extrabold">
                Continue
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default CreateSitePopup;
