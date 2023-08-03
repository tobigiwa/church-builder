import { FunctionComponent } from "react";
import { LocalNavigator } from "../../../types/InteractionTypes";
import GroupHeader from "./Header";

const List: FunctionComponent<LocalNavigator> = ({ activePage }) => {
  return (
    <div className="relative bg-whitesmoke-200 w-full flex flex-col pt-0 px-0 pb-20 box-border items-center justify-start gap-[121px] text-left text-5xl text-primary-black-100 font-label-medium-600">
      <GroupHeader activePage={activePage} />
      <div className="self-stretch flex flex-col items-center justify-center gap-[53px] text-center font-public-sans">
        <div className="flex flex-col items-center justify-center gap-[35px]">
          <img
            className="relative w-[130px] h-[130px] overflow-hidden shrink-0"
            src="/remixiconsfillbusinessbubblechartfill.svg"
          />
          <div className="relative">
            <p className="m-0">
              <b>Organize people with groups</b>
            </p>
            <p className="m-0 text-lg font-label-medium-600 text-dimgray-100">
              Here are some ideas to get you started
            </p>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[16px] text-6xl">
          <div className="rounded-lg bg-night-ghost-text overflow-hidden flex flex-col py-[18px] px-[30px] items-center justify-center gap-[14px]">
            <img
              className="relative w-[248.71px] h-[270.68px] object-cover"
              alt=""
              src="/young-women-standing@2x.png"
            />
            <b className="relative">Small Group</b>
            <button className=" [border:none] pt-[20px] pb-[20px] pr-[33px] pl-[32px] bg-royalblue-100 rounded-lg w-[168px] h-[54px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-center">
              <div className="relative text-base font-extrabold font-public-sans text-night-ghost-text text-center">
                Create group
              </div>
            </button>
          </div>
          <div className="rounded-lg bg-night-ghost-text overflow-hidden flex flex-col py-[34px] px-10 items-center justify-center gap-[27px]">
            <img
              className="relative w-[199px] h-[274.15px] object-cover"
              alt=""
              src="/young-women-standing-and-smiling@2x.png"
            />
            <b className="relative">Membership Group</b>
            <button className=" [border:none] pt-[20px] pb-[20px] pr-[33px] pl-[32px] bg-royalblue-100 rounded-lg w-[168px] h-[54px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-center">
              <div className="relative text-base font-extrabold font-public-sans text-night-ghost-text text-center">
                Create group
              </div>
            </button>
          </div>
          <div className="rounded-lg bg-night-ghost-text h-[406.68px] overflow-hidden flex flex-col py-7 px-[22px] box-border items-center justify-center gap-[23px]">
            <img
              className="relative w-[296px] h-[193.1px] object-cover"
              alt=""
              src="/olleagues-discussing-team-project@2x.png"
            />
            <b className="relative">Ministry Group</b>
            <button className=" [border:none] pt-[20px] pb-[20px] pr-[33px] pl-[32px] bg-royalblue-100 rounded-lg w-[168px] h-[54px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-center">
              <div className="relative text-base font-extrabold font-public-sans text-night-ghost-text text-center">
                Create group
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
