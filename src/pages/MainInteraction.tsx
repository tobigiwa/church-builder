import { FunctionComponent, useCallback, useState } from "react";
import PageManager from "../components/PageManager";
import SideBarDropDown from "../components/SideBarDropDown";
import { subscribe } from "../event";
import { Dfn } from "../globals";

const MainInteraction: FunctionComponent = () => {
  const [activePage, setActivePage] = useState(Dfn.DEFAULT_PAGE);
  subscribe("interaction", (event) => setActivePage(event.detail.activePage));

  return (
    <div className="relative w-full flex flex-col items-start justify-start text-left text-21xl text-primary-black-100 font-label-medium-600">
      <div className="self-stretch bg-night-ghost-text overflow-hidden flex flex-col py-[13px] pr-0 pl-[105px] items-start justify-start border-b-[1px] border-solid border-lightgray-300">
        <div className="self-stretch flex flex-row py-0 pr-[21px] pl-0 items-center justify-between">
          <div className="rounded-lg bg-gainsboro-100 w-[325px] flex flex-row py-[23px] px-[31px] box-border items-center justify-start">
            <input
              className="[border:none] font-public-sans text-base bg-[transparent] self-stretch flex-1 relative leading-[18px] text-dimgray-300 text-left flex items-center [outline:none]"
              type="text"
              placeholder="Search for projects"
            />
          </div>
          <div className="w-[376px] flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-[12.25px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[26.5px] font-semibold font-public-sans text-primary-black-100 text-center inline-block">
                People
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[26.5px] font-semibold font-public-sans text-primary-black-100 text-center inline-block">
                Event
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[26.5px] font-semibold font-public-sans text-primary-black-100 text-center inline-block">
                Give now
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[26.5px] font-semibold font-public-sans text-primary-black-100 text-center inline-block">
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
              src="/remixiconslinesystemarrowdownsline1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start">
        <div className="self-stretch bg-royalblue-100 w-[230px] overflow-hidden shrink-0 flex flex-row pt-[130px] px-0 pb-0 box-border items-start justify-start">
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <button className="cursor-pointer [border:none] py-4 pr-4 pl-3.5 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center [outline:none] focus:bg-slateblue hover:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/remixiconsfilldesignlayoutmasonryfill.svg"
                />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-label-medium-600 text-night-ghost-text text-left">
                  Individuals
                </div>
              </div>
            </button>
            <SideBarDropDown
              activePage={activePage}
              icon="/remixiconsfilluserteamfill.svg"
              dropdown={{
                id: "group",
                name: "Groups",
                onClick: useCallback(() => {
                  setActivePage("group");
                }, [activePage]),
              }}
              children={[
                { id: "list", name: "List" },
                { id: "add", name: "Add" },
                { id: "finder", name: "Finder" },
              ]}
            />
            <button
              className="cursor-pointer [border:none] py-4 pr-[13px] pl-[31px] bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] focus:bg-slateblue hover:bg-slateblue"
              onClick={useCallback(() => {
                setActivePage("masscontact");
              }, [activePage])}
            >
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6"
                  alt=""
                  src="/remixiconsfillbusinessmailfill.svg"
                />
                <div className="relative text-base font-semibold font-label-medium-600 text-night-ghost-text text-left">
                  Mass contact
                </div>
              </div>
            </button>
            <SideBarDropDown
              activePage={activePage}
              className="cursor-pointer [border:none] py-4 pr-4 pl-12 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] focus:bg-slateblue hover:bg-slateblue"
              icon="/remixiconsfillcommunicationdiscussfill1.svg"
              dropdown={{
                id: "interaction",
                name: "Interaction",
                onClick: useCallback(() => {
                  setActivePage("interaction");
                }, [activePage]),
              }}
              children={[
                {
                  id: "myoutstanding",
                  name: "My Outstanding",
                  onClick: useCallback(() => {
                    setActivePage("myoutstanding");
                  }, [activePage]),
                },
                { id: "outstanding", name: "Outstanding" },
                { id: "completed", name: "Completed" },
                { id: "assign", name: "Assign" },
                { id: "log", name: "Log" },
              ]}
            />
            <SideBarDropDown
              activePage={activePage}
              className="cursor-pointer [border:none] py-4 pr-4 pl-[55px] bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] focus:bg-slateblue hover:bg-slateblue"
              icon="/remixiconsfilldesignlayoutmasonryfill1.svg"
              dropdown={{ id: "attendance", name: "Attendance" }}
              children={[
                { id: "input", name: "Input" },
                {
                  id: "checkin",
                  name: "Check-In",
                  onClick: useCallback(() => {
                    setActivePage("checkin");
                  }, [activePage]),
                },
              ]}
            />
            <button className="cursor-pointer [border:none] py-4 pr-[35px] pl-0 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] focus:bg-slateblue hover:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfillbusinesslinechartfill.svg"
                />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-label-medium-600 text-night-ghost-text text-left">
                  Report
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-4 pr-4 pl-0 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] focus:bg-slateblue hover:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img className="relative w-6 h-6" alt="" src="/group.svg" />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-label-medium-600 text-night-ghost-text text-left">
                  Calendar
                </div>
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-4 pr-4 pl-[9px] bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] focus:bg-slateblue hover:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfillbusinesscalendarcheckfill.svg"
                />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-label-medium-600 text-night-ghost-text text-left">
                  Schedules
                </div>
              </div>
            </button>
            <div className="rounded-lg w-[230px] overflow-hidden flex flex-col py-0 pr-4 pl-[13px] box-border items-center justify-center gap-[10px] mt-[-1px]">
              <button className="cursor-pointer [border:none] py-4 pr-4 pl-1 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center focus:bg-slateblue hover:bg-slateblue">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/remixiconsfillfinancehandheartfill1.svg"
                  />
                  <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-label-medium-600 text-night-ghost-text text-left">
                    My Giving
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-4 pr-4 pl-1 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-row box-border items-center justify-center gap-[10px] focus:bg-slateblue hover:bg-slateblue">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfillbusinessstackfill.svg"
                />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-label-medium-600 text-night-ghost-text text-left">
                  Workflows
                </div>
              </button>
            </div>
            <button className="cursor-pointer [border:none] p-4 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] focus:bg-slateblue hover:bg-slateblue">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfilldesignlayoutmasonryfill2.svg"
                />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-label-medium-600 text-night-ghost-text text-left">
                  Dashboard
                </div>
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-4 pr-[39px] pl-0 bg-[transparent] rounded-lg w-[230px] overflow-hidden flex flex-col box-border items-center justify-center mt-[-1px] focus:bg-slateblue hover:bg-slateblue"
              onClick={useCallback(() => {
                setActivePage("forms");
              }, [activePage])}
            >
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/remixiconsfilldocumentdraftfill.svg"
                />
                <div className="relative text-base tracking-[-0.02em] leading-[19.19px] font-semibold font-label-medium-600 text-night-ghost-text text-left">
                  Forms
                </div>
              </div>
            </button>
          </div>
        </div>
        <PageManager activePage={activePage} />
      </div>
    </div>
  );
};

export default MainInteraction;
