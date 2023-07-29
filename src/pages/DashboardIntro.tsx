import { FunctionComponent, useState, useCallback } from "react";
import CreateSitePopup from "../components/CreateSitePopup";
import PortalPopup from "../components/PortalPopup";

const DashboardIntro: FunctionComponent = () => {
  const [isCreateSitePopupOpen, setCreateSitePopupOpen] = useState(false);

  const openCreateSitePopup = useCallback(() => {
    setCreateSitePopupOpen(true);
  }, []);

  const closeCreateSitePopup = useCallback(() => {
    setCreateSitePopupOpen(false);
  }, []);

  return (
    <>
      <div className="relative w-full h-[1106px] flex flex-col items-start justify-start text-center text-3xl text-royalblue-100 font-public-sans">
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
                  src="/remixiconsfillbuildingshome6fill2.svg"
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
        <div className="self-stretch flex-1 bg-whitesmoke-200 overflow-hidden flex flex-row py-[298px] px-0 items-center justify-center text-5xl md:pt-[150px] md:pb-[150px] md:box-border sm:pt-20 sm:pb-20 sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-start gap-[50px]">
            <div className="relative tracking-[2.16px] leading-[18px] font-extrabold">
              Dashboard
            </div>
            <div className="relative text-21xl tracking-[2.16px] leading-[18px] font-extrabold text-primary-black-100">
              Hi Alice!
            </div>
            <div className="self-stretch relative text-3xl tracking-[1.8px] leading-[18px] font-semibold text-dimgray-200">{`Create your site by Tapping `}</div>
            <div className="rounded-xl bg-night-ghost-text overflow-hidden flex flex-col p-10 items-center justify-center gap-[18px] text-xl text-gray-100">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[119px] h-[117px]"
                onClick={openCreateSitePopup}
              >
                <img
                  className="absolute top-[0px] left-[0px] w-[119px] h-[117px]"
                  alt=""
                  src="/new.svg"
                />
              </button>
              <div className="relative tracking-[2.16px] leading-[18px] font-semibold flex items-center justify-center w-[273px]">
                Tap to start creating
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCreateSitePopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.21)"
          placement="Centered"
          onOutsideClick={closeCreateSitePopup}
        >
          <CreateSitePopup onClose={closeCreateSitePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DashboardIntro;
