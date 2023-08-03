import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/builder/Header";

const DashboardDesignSelection: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMobileAppBuilderButtonClick = useCallback(() => {
    navigate("/appbuilderdashboard");
  }, [navigate]);

  const onWebsiteBuilderButtonClick = useCallback(() => {
    navigate("/sitebuilderdashboard");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke-200 w-full h-[100vh] flex flex-col items-start justify-start text-center text-17xl text-royalblue-100 font-public-sans">
      <Header />
      <div className="self-stretch flex-1 bg-whitesmoke-200 flex flex-col px-0 items-center justify-center gap-[30px] text-5xl">
        <div className="w-[335px] flex flex-col items-center justify-start gap-[64px]">
          <div className="relative font-extrabold">Dashboard</div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px] text-29xl text-primary-black-100">
            <div className="relative font-extrabold">Hi Alice!</div>
            <div className="self-stretch relative text-5xl font-semibold text-dimgray-200">{`Create by tapping `}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap py-0 px-[30px] items-center justify-center gap-[40px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-night-ghost-text rounded-xl w-[300px] h-[300px] overflow-hidden shrink-0 flex flex-col items-center justify-center"
            onClick={onMobileAppBuilderButtonClick}
          >
            <div className="flex flex-col items-center justify-center gap-[11px]">
              <img
                className="relative w-[88px] h-[88px]"
                alt=""
                src="/remixiconsfilldevicesmartphonefill1.svg"
              />
              <div className="relative text-[25px] capitalize font-medium font-public-sans text-primary-black-100 text-center">
                <p className="m-0">{`Mobile App `}</p>
                <p className="m-0">Builder</p>
              </div>
            </div>
          </button>
          <button
            className="cursor-pointer p-0 bg-night-ghost-text rounded-xl shadow-[0px_19px_83px_rgba(35,_82,_213,_0.1)] box-border w-[300px] h-[300px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[7px] border-solid border-royalblue-100"
            onClick={onWebsiteBuilderButtonClick}
          >
            <div className="flex flex-col items-center justify-center gap-[12.65px]">
              <img
                className="relative w-[89.95px] h-[89.95px]"
                alt=""
                src="/remixiconsfilldevicemacbookfill1.svg"
              />
              <div className="relative text-[24px] capitalize font-medium font-public-sans text-primary-black-100 text-left">
                Website Builder
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardDesignSelection;
