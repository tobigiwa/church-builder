import { FunctionComponent, useState, useCallback } from "react";
import ManageBarcode from "../components/ManageBarcode";
import PortalPopup from "../components/PortalPopup";
import AddVisitor from "../components/AddVisitor";
import LabelSettings from "../components/LabelSettings";

const Family: FunctionComponent = () => {
  const [isManageBarcodePopupOpen, setManageBarcodePopupOpen] = useState(false);
  const [isAddVisitorPopupOpen, setAddVisitorPopupOpen] = useState(false);
  const [isLabelSettingsPopupOpen, setLabelSettingsPopupOpen] = useState(false);

  const openManageBarcodePopup = useCallback(() => {
    setManageBarcodePopupOpen(true);
  }, []);

  const closeManageBarcodePopup = useCallback(() => {
    setManageBarcodePopupOpen(false);
  }, []);

  const openAddVisitorPopup = useCallback(() => {
    setAddVisitorPopupOpen(true);
  }, []);

  const closeAddVisitorPopup = useCallback(() => {
    setAddVisitorPopupOpen(false);
  }, []);

  const openLabelSettingsPopup = useCallback(() => {
    setLabelSettingsPopupOpen(true);
  }, []);

  const closeLabelSettingsPopup = useCallback(() => {
    setLabelSettingsPopupOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-whitesmoke-200 w-full overflow-hidden flex flex-col py-[84px] pr-32 pl-0 box-border items-start justify-start text-center text-5xl text-primary-black-100 font-label-medium-600">
        <div className="self-stretch flex flex-col items-start justify-start gap-[62px]">
          <button  className=" [border:none] p-2.5 bg-[transparent] flex flex-row items-center justify-start gap-[8px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/remixiconslinesystemarrowleftsline1.svg"
            />
            <div className="relative text-5xl font-semibold font-label-medium-600 text-primary-black-100 text-left">
              Back
            </div>
          </button>
          <div className="self-stretch flex flex-row py-0 pr-0 pl-[98px] items-start justify-start">
            <div className="flex-1 flex flex-col items-center justify-start gap-[104px]">
              <div className="self-stretch flex flex-col items-center justify-center gap-[76px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[24px]">
                    <div className="relative font-semibold">Manage Barcode</div>
                    <div className="flex-1 h-12 flex flex-row py-0 pr-[75px] pl-0 box-border items-center justify-end text-base text-night-ghost-text">
                      <div
                        className="rounded-lg bg-royalblue-100 box-border w-[202px] h-[50px] flex flex-row items-center justify-center cursor-pointer border-[1px] border-solid border-royalblue-100"
                        onClick={openManageBarcodePopup}
                      >
                        <div className="relative font-semibold">
                          Manage Barcode
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[24px] text-right text-base font-public-sans">
                    <div className="rounded-3xs bg-night-ghost-text w-[400px] h-[106px] flex flex-row py-[21px] px-[17px] box-border items-center justify-between">
                      <div className="flex flex-row items-center justify-start gap-[14px]">
                        <img
                          className="relative rounded-81xl w-[59px] h-[59px] overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-271@2x.png"
                        />
                        <div className="relative font-medium">Fred bossman</div>
                        <button  className=" [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
                          <img
                            className="relative w-4 h-4"
                            alt=""
                            src="/vector1.svg"
                          />
                        </button>
                      </div>
                      <button  className=" [border:none] p-0 bg-[transparent] flex flex-col items-end justify-start gap-[23px]">
                        <img
                          className="relative w-6 h-6"
                          alt=""
                          src="/vector2.svg"
                        />
                        <button  className=" p-0 bg-royalblue-100 rounded-lg box-border w-[136px] h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100">
                          <div className="relative text-sm font-semibold font-label-medium-600 text-night-ghost-text text-center">
                            Choose group
                          </div>
                        </button>
                      </button>
                    </div>
                    <div className="rounded-3xs bg-night-ghost-text w-[400px] h-[106px] flex flex-row py-[21px] px-[17px] box-border items-center justify-between">
                      <div className="flex flex-row items-center justify-start gap-[14px]">
                        <img
                          className="relative rounded-81xl w-[58px] h-[58px] overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/frame-270@2x.png"
                        />
                        <div className="relative font-medium">Fred bossman</div>
                        <button  className=" [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
                          <img
                            className="relative w-4 h-4"
                            alt=""
                            src="/vector1.svg"
                          />
                        </button>
                      </div>
                      <div className="flex flex-col items-end justify-start gap-[23px]">
                        <button  className=" [border:none] p-0 bg-[transparent] relative w-6 h-6">
                          <img
                            className="absolute top-[0px] left-[0px] w-6 h-6"
                            alt=""
                            src="/vector2.svg"
                          />
                        </button>
                        <button  className=" p-0 bg-royalblue-100 rounded-lg box-border w-[136px] h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100">
                          <div className="relative text-sm font-semibold font-label-medium-600 text-night-ghost-text text-center">
                            Choose group
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="rounded-3xs bg-night-ghost-text w-[400px] h-[106px] flex flex-row py-[21px] px-[17px] box-border items-center justify-between">
                      <div className="flex flex-row items-center justify-start gap-[14px]">
                        <img
                          className="relative rounded-81xl w-[58px] h-[58px] object-cover"
                          alt=""
                          src="/frame-2711@2x.png"
                        />
                        <div className="relative font-medium">Fred bossman</div>
                        <button  className=" [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
                          <img
                            className="relative w-4 h-4"
                            alt=""
                            src="/vector1.svg"
                          />
                        </button>
                      </div>
                      <div className="flex flex-col items-end justify-start gap-[23px]">
                        <img
                          className="relative w-6 h-6"
                          alt=""
                          src="/vector2.svg"
                        />
                        <button  className=" p-0 bg-royalblue-100 rounded-lg box-border w-[136px] h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100">
                          <div className="relative text-sm font-semibold font-label-medium-600 text-night-ghost-text text-center">
                            Choose group
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="rounded-3xs bg-night-ghost-text w-[400px] h-[106px] flex flex-row py-[21px] px-[17px] box-border items-center justify-between">
                      <div className="flex flex-row items-center justify-start gap-[14px]">
                        <div className="relative rounded-81xl w-[58px] h-[58px] overflow-hidden shrink-0 bg-[url(/public/frame-270@2x.png)] bg-cover bg-no-repeat bg-[top]">
                          <img
                            className="absolute top-[calc(50%_-_28px)] left-[calc(50%_-_28px)] rounded-81xl w-[57px] h-[57px] overflow-hidden object-cover"
                            alt=""
                            src="/frame-2701@2x.png"
                          />
                        </div>
                        <div className="relative font-medium">Fred bossman</div>
                        <button  className=" [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center">
                          <img
                            className="relative w-4 h-4"
                            alt=""
                            src="/vector1.svg"
                          />
                        </button>
                      </div>
                      <button  className=" [border:none] p-0 bg-[transparent] flex flex-col items-end justify-start gap-[23px]">
                        <img
                          className="relative w-6 h-6"
                          alt=""
                          src="/vector3.svg"
                        />
                        <button  className=" p-0 bg-royalblue-100 rounded-lg box-border w-[136px] h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100">
                          <div className="relative text-sm font-semibold font-label-medium-600 text-night-ghost-text text-center">
                            Choose group
                          </div>
                        </button>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-night-ghost-text flex flex-row items-center justify-center">
                  <button
                    className="cursor-pointer p-0 bg-royalblue-100 relative rounded-lg box-border w-[310px] h-[50px] border-[1px] border-solid border-royalblue-100"
                    onClick={openAddVisitorPopup}
                  >
                    <div className="absolute top-[calc(50%_-_7px)] left-[calc(50%_-_75.5px)] flex flex-row items-center justify-center">
                      <div className="relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-center">
                        + Add Visitor Name
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center gap-[33px]">
                <button
                  className="cursor-pointer p-0 bg-night-ghost-text rounded-lg box-border w-[202px] h-[50px] flex flex-row items-center justify-center border-[1px] border-solid border-royalblue-100"
                  onClick={openLabelSettingsPopup}
                >
                  <div className="relative text-base font-semibold font-label-medium-600 text-gray-100 text-center">
                    Label settings
                  </div>
                </button>
                <button  className=" [border:none] p-0 bg-gainsboro-100 rounded-lg w-[200px] h-12 flex flex-row items-center justify-center">
                  <div className="relative text-base font-semibold font-label-medium-600 text-gray-100 text-center">
                    Check-In
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isManageBarcodePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <ManageBarcode onClose={closeManageBarcodePopup} />
        </PortalPopup>
      )}
      {isAddVisitorPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <AddVisitor onClose={closeAddVisitorPopup} />
        </PortalPopup>
      )}
      {isLabelSettingsPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <LabelSettings onClose={closeLabelSettingsPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Family;
