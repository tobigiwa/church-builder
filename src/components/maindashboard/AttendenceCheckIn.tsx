import { FunctionComponent, useState, useCallback } from "react";
import ChooseStationPopup from "../ChooseStationPopup";
import PortalPopup from "../PortalPopup";

const AttendenceCheckIn: FunctionComponent = () => {
  const [isChooseStationPopupOpen, setChooseStationPopupOpen] = useState(false);

  const openChooseStationPopup = useCallback(() => {
    setChooseStationPopupOpen(true);
  }, []);

  const closeChooseStationPopup = useCallback(() => {
    setChooseStationPopupOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-whitesmoke-200 w-full h-[1428px] flex flex-col items-center justify-start gap-[79px] text-center text-29xl text-primary-black-100 font-label-medium-600">
        <div className="self-stretch bg-night-ghost-text overflow-hidden flex flex-col py-[47px] px-7 items-start justify-start gap-[3px] text-left border-solid border-silver">
          <div className="relative tracking-[-0.05em] leading-[64px] font-semibold">
            Check-In
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px] text-center text-base text-gray-200">
            <div className="rounded-lg bg-royalblue-100 w-[168px] flex flex-row py-[18px] pr-[29.169998168945312px] pl-[30px] box-border items-center justify-center text-night-ghost-text">
              <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                Check-In
              </div>
            </div>
            <div className="rounded-lg bg-night-ghost-text box-border w-[168px] flex flex-row py-[18px] pr-[29.169998168945312px] pl-[30px] items-center justify-center border-[1px] border-solid border-royalblue-100">
              <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                Status
              </div>
            </div>
            <div className="rounded-lg bg-night-ghost-text box-border w-[168px] flex flex-row py-[18px] px-5 items-center justify-center border-[1px] border-solid border-royalblue-100">
              <div className="relative tracking-[-0.02em] leading-[19.19px] font-semibold">
                Group Contact
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row py-0 pr-[141px] pl-0 items-center justify-start text-base">
          <div className="flex-1 rounded-lg bg-night-ghost-text flex flex-col py-6 px-[30px] items-start justify-center gap-[16px]">
            <div className="relative text-5xl tracking-[-0.02em] leading-[19.19px] font-semibold">
              Choose Station
            </div>
            <div className="self-stretch relative rounded-lg bg-gainsboro-100 h-16">
              <div className="absolute top-[24px] left-[24px] tracking-[-0.02em] leading-[19.19px] font-semibold">
                God’s Power
              </div>
              <img
                className="absolute top-[calc(50%_-_12px)] right-[24px] w-6 h-6 overflow-hidden"
                alt=""
                src="/arrow-right.svg"
              />
            </div>
            <div className="self-stretch relative rounded-lg bg-gainsboro-100 h-16">
              <div className="absolute top-[24px] left-[24px] tracking-[-0.02em] leading-[19.19px] font-semibold">
                Faith House
              </div>
              <img
                className="absolute top-[calc(50%_-_12px)] right-[24px] w-6 h-6 overflow-hidden"
                alt=""
                src="/arrow-right.svg"
              />
            </div>
            <div className="self-stretch relative rounded-lg bg-gainsboro-100 h-16">
              <div className="absolute top-[calc(50%_-_6px)] left-[24px] tracking-[-0.02em] leading-[19.19px] font-semibold">
                Victory Paradise
              </div>
              <img
                className="absolute top-[calc(50%_-_12px)] right-[24px] w-6 h-6 overflow-hidden"
                alt=""
                src="/arrow-right.svg"
              />
            </div>
            <button
              className="cursor-pointer [border:none] py-[18px] pr-[29.169998168945312px] pl-[30px] bg-royalblue-100 rounded-lg w-[404px] flex flex-row box-border items-center justify-center"
              onClick={openChooseStationPopup}
            >
              <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-label-medium-600 text-night-ghost-text text-center">
                Launch your kiosk mode
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch h-[313px] flex flex-col py-0 pr-[170px] pl-0 box-border items-center justify-center text-5xl font-public-sans">
          <div className="self-stretch flex-1 rounded-lg bg-night-ghost-text flex flex-col items-center justify-center gap-[17px]">
            <div className="rounded-[65.5px] bg-royalblue-400 w-[100.01px] h-[100.01px] flex flex-col p-2.5 box-border items-center justify-center">
              <img
                className="relative w-[80.01px] h-[80.01px]"
                alt=""
                src="/edit.svg"
              />
            </div>
            <div className="relative font-semibold">
              No one has checked-in today
            </div>
          </div>
        </div>
      </div>
      {isChooseStationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.21)"
          placement="Centered"
          onOutsideClick={closeChooseStationPopup}
        >
          <ChooseStationPopup onClose={closeChooseStationPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AttendenceCheckIn;
