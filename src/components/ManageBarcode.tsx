import { FunctionComponent, memo } from "react";

type ManageBarcodeType = {
  onClose?: () => void;
};

const ManageBarcode: FunctionComponent<ManageBarcodeType> = memo(
  ({ onClose }) => {
    return (
      <div className="relative rounded-xl bg-night-ghost-text w-[1114px] overflow-hidden flex flex-col p-[38px] box-border items-center justify-center gap-[38px] max-w-full max-h-full text-center text-base text-royalblue-100 font-label-medium-600">
        <div className="self-stretch flex flex-row items-center justify-between text-right text-19xl font-public-sans">
          <b className="relative">Manage Barcode</b>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-11 h-11"
            onClick={onClose}
          >
            <div className="absolute top-[0px] left-[0px] rounded-981xl bg-royalblue-500 flex flex-row p-2.5 items-start justify-start">
              <img className="relative w-6 h-6" alt="" src="/group5.svg" />
            </div>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-[38px] text-primary-black-100">
          <img
            className="relative w-[75px] h-[75px] overflow-hidden shrink-0"
            alt=""
            src="/remixiconsfilldevicebarcodefill1.svg"
          />
          <div className="relative font-semibold">Scan barcode now</div>
        </div>
        <div
          className="flex flex-row items-center justify-start cursor-pointer text-night-ghost-text"
          onClick={onClose}
        >
          <div className="rounded-lg bg-royalblue-100 w-[250px] flex flex-row py-[18px] pr-[29px] pl-[30px] box-border items-center justify-center">
            <div className="relative font-semibold">+ Add barcode</div>
          </div>
        </div>
      </div>
    );
  }
);

export default ManageBarcode;
