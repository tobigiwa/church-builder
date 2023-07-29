import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnchorLink from "../components/AnchorLink";

type DashboardCardProps = {
  displayText: string[];
  onClick?: () => void;
};

const DashboardCard: FunctionComponent<DashboardCardProps> = ({
  displayText,
  onClick
}) => {

  return (
    <div className="font-overlock rounded-mid bg-white shadow-[6px_6px_25px_7px_rgba(157,_157,_157,_0.15)] w-[250px] h-[250px] overflow-hidden shrink-0 flex flex-col pt-[68px] pb-[54px] pr-[54.00001525878906px] pl-[54px] box-border items-center justify-center gap-[32px]">
              <div className="flex flex-row py-0 pr-[0.1999969482421875px] pl-0 items-start justify-start">
                <div className="relative leading-[40px] font-extrabold">
                  <p className="m-0">{displayText[0]}</p>
                  <p className="m-0">{displayText[1]}</p>
                </div>
              </div>
              <div
                className="rounded-lg bg-royalblue-100 box-border w-[168px] h-[54px] overflow-hidden shrink-0 flex flex-row pt-[20.3700008392334px] pb-[20.3799991607666px] pr-[33.499996185302734px] pl-[32.380001068115234px] items-center justify-center cursor-pointer text-xs text-white border-[2px] border-solid border-white"
                onClick={onClick}
              >
                <div className="relative tracking-[2.16px] leading-[14px] font-extrabold">
                  Login
                </div>
              </div>
            </div>
  );
}

const LoginAppGivingDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/mainlogin");
  }, [navigate]);

  return (
    <div className="relative w-full flex flex-col items-start justify-start text-center text-16xl text-black font-heading-x-small-600">
      <Header />
      <div className="self-stretch [background:linear-gradient(180deg,_#91a8ea,_#fff)] overflow-hidden flex flex-col py-28 px-0 items-center justify-center gap-[200px] sm:gap-[150px] sm:pt-20 sm:pb-20 sm:box-border">
        <div className="w-[336px] flex flex-col py-4 px-[142px] box-border items-center justify-center gap-[15px] text-5xl">
          <div className="relative tracking-[2.4px] leading-[37.2px] uppercase font-extrabold flex items-center justify-center w-[156px] h-[38px] shrink-0">
            LOG IN
          </div>
          <div className="relative text-16xl leading-[40px] font-black font-open-sansflex items-center w-[253px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Manage your</p>
              <p className="m-0"> Platform</p>
            </span>
          </div>
          <div className="w-[302px] flex flex-row py-0 px-[3px] box-border items-center justify-center text-left text-3xl text-dimgray-100"><div className="relative leading-[37.2px] flex items-center w-[150px] shrink-0">Are you a donor? </div><button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lg leading-[37.2px] font-heading-x-small-600 text-mediumslateblue text-left flex items-center  shrink-0 hover:[text-decoration:underline]">
            Click here
          </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[15px]">
          <div className="flex flex-row items-center justify-center gap-[15px] md:flex-wrap">
          <DashboardCard displayText={["App", "Dashboard"]} onClick={onLoginButtonClick} />
          <DashboardCard displayText={["Giving", "Dashboard"]} onClick={onLoginButtonClick} />
          </div>
          <div className="flex flex-row items-center justify-center gap-[15px] md:flex-wrap">
          <DashboardCard displayText={["Website", "Builder"]} onClick={onLoginButtonClick} />
          <DashboardCard displayText={["App", "Builder"]} onClick={onLoginButtonClick} />
          </div>
        </div>
        <div className="self-stretch h-[479px] flex flex-col py-[50px] px-0 box-border items-center justify-center gap-[23px] text-gray-100">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[40px] font-extrabold">
              Are you a donor?
            </div>
          </div>
          <div className="self-stretch flex flex-col py-0 px-6 items-center justify-center gap-[10px] text-3xl">
            <div className="self-stretch relative leading-[37.2px]">
              To submit a donation, visit your church’s app or website. Or, if
              you have a question about
            </div>
            <div className="self-stretch relative leading-[37.2px]">
              <span>{`managing your donor account, `}</span>
              <AnchorLink className="font-semibold"  text="click here."/>
            </div>
            <div className="self-stretch relative leading-[37.2px]">
              <span>{`For all additional questions, visit our `}</span>
              <AnchorLink className="font-semibold" text="Community Help Center" />
              <span>.</span>
            </div>
            <div className="self-stretch relative leading-[37.2px]">
              <span>{`For technical questions and support about your admin account visit our `}</span>
              <AnchorLink className="font-semibold" text="Knowledge Center" />
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginAppGivingDashboard;
