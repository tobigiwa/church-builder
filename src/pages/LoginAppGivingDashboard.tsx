import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LoginAppGivingDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/mainlogin");
  }, [navigate]);

  const onLinkClick = useCallback(() => {
    navigate("/mainlogin");
  }, [navigate]);

  const onLinkContainer1Click = useCallback(() => {
    navigate("/mainlogin");
  }, [navigate]);

  const onLink1Click = useCallback(() => {
    navigate("/mainlogin");
  }, [navigate]);

  return (
    <div className="relative w-full flex flex-col items-start justify-start text-center text-16xl text-black font-heading-x-small-600">
      <header className="self-stretch bg-white flex flex-row py-0 px-5 items-center justify-between text-left text-17xl text-royalblue-100 font-public-sans md:flex md:gap-[0px] md:pr-5 md:box-border">
        <div className="w-[110px] h-24 flex flex-row items-center justify-between md:flex-1 md:gap-[0px]">
          <a className="[text-decoration:none] flex-1 flex flex-row py-[39px] px-0 items-center justify-between text-[inherit] md:flex-1 md:self-stretch md:h-auto md:text-[70%]">
            <div className="flex-1 relative tracking-[2.16px] leading-[18px] uppercase font-extrabold">
              LOGO
            </div>
          </a>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-11 hidden flex-row items-center justify-between md:flex">
            <img className="relative w-11 h-11" alt="" src="/icon7.svg" />
          </button>
        </div>
        <div className="w-[558px] h-4 flex flex-col py-0 pr-[31px] pl-0 box-border items-center justify-between text-smi text-black md:w-0 md:h-0 md:flex-row md:gap-[0px] md:pr-0 md:box-border">
          <div className="self-stretch flex flex-row py-0 px-3 items-center justify-between md:hidden sm:pr-0 sm:box-border">
            <div className="w-[76px] flex flex-row items-start justify-start text-sm">
              <div className="relative tracking-[2.52px] leading-[16px] uppercase font-extrabold flex items-center w-[76px] shrink-0 hover:cursor-pointer hover:[text-decoration:underline] md:leading-[12px]">
                PRICING
              </div>
            </div>
            <div className="w-[102px] flex flex-row items-center justify-between">
              <div className="relative tracking-[2.52px] leading-[16px] uppercase font-extrabold flex items-center w-[91px] shrink-0 hover:cursor-pointer hover:[text-decoration:underline] md:leading-[12px]">
                products
              </div>
              <div className="overflow-hidden flex flex-col py-1 px-0 items-center justify-center">
                <img
                  className="relative w-[8.94px] h-[5.03px]"
                  alt=""
                  src="/vector19.svg"
                />
              </div>
            </div>
            <div className="w-[107px] flex flex-row items-center justify-between">
              <div className="flex-1 relative tracking-[2.52px] leading-[16px] uppercase font-extrabold hover:cursor-pointer hover:[text-decoration:underline] md:leading-[12px]">
                use cases
              </div>
              <div className="overflow-hidden flex flex-col py-1 px-0 items-center justify-center">
                <img
                  className="relative w-[8.94px] h-[5.03px]"
                  alt=""
                  src="/vector20.svg"
                />
              </div>
            </div>
            <div className="w-[115px] flex flex-row items-center justify-between">
              <div className="relative tracking-[2.52px] leading-[16px] uppercase font-extrabold flex items-center w-[103px] shrink-0 hover:cursor-pointer hover:[text-decoration:underline]">
                RESOURCES
              </div>
              <div className="w-[8.94px] h-3.5 overflow-hidden shrink-0 flex flex-col py-1 px-0 box-border items-center justify-between">
                <img
                  className="relative w-[8.94px] h-[5.03px]"
                  alt=""
                  src="/vector21.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[281px] flex flex-row py-0.5 px-0 box-border items-center justify-start gap-[20px] md:hidden md:w-0 md:gap-[0px] md:items-center md:justify-center">
          <button className="cursor-pointer py-2.5 px-8 bg-[transparent] rounded-lg overflow-hidden flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100">
            <div className="relative text-xs tracking-[2.16px] leading-[14px] uppercase font-extrabold font-heading-x-small-600 text-royalblue-100 text-center">
              LOGIN
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-2.5 px-[21px] bg-royalblue-100 rounded-lg w-[151px] flex flex-row box-border items-center justify-center">
            <div className="relative text-xs tracking-[2.16px] leading-[16px] uppercase font-extrabold font-heading-x-small-600 text-white text-center flex items-center justify-center w-[122px] shrink-0">
              BOOK A DEMO
            </div>
          </button>
        </div>
      </header>
      <div className="self-stretch [background:linear-gradient(180deg,_#91a8ea,_#fff)] overflow-hidden flex flex-col py-28 px-0 items-center justify-center gap-[200px] sm:gap-[150px] sm:pt-20 sm:pb-20 sm:box-border">
        <div className="w-[336px] flex flex-col py-4 px-[142px] box-border items-center justify-center gap-[15px] text-5xl">
          <div className="relative tracking-[2.4px] leading-[37.2px] uppercase font-extrabold flex items-center justify-center w-[156px] h-[38px] shrink-0">
            LOG IN
          </div>
          <div className="relative text-16xl leading-[40px] font-black font-public-sans flex items-center w-[253px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Manage your</p>
              <p className="m-0"> Platform</p>
            </span>
          </div>
          <div className="w-[302px] flex flex-row py-0 px-[3px] box-border items-center justify-center text-left text-3xl text-dimgray-100">
            <div className="relative leading-[37.2px] flex items-center w-[185px] shrink-0">{`Are you a donor? `}</div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-3xl leading-[37.2px] font-heading-x-small-600 text-mediumslateblue text-left flex items-center w-[114px] shrink-0 hover:[text-decoration:underline]">
              Click here
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center gap-[15px]">
          <div className="flex flex-row items-center justify-center gap-[15px] md:flex-wrap">
            <div className="rounded-mid bg-white shadow-[6px_6px_25px_7px_rgba(157,_157,_157,_0.15)] w-[250px] h-[250px] overflow-hidden shrink-0 flex flex-col pt-[68px] pb-[54px] pr-[54.00001525878906px] pl-[54px] box-border items-center justify-center gap-[32px]">
              <div className="flex flex-row py-0 pr-[0.1999969482421875px] pl-0 items-start justify-start">
                <div className="relative leading-[40px] font-extrabold">
                  <p className="m-0">App</p>
                  <p className="m-0">dashboard</p>
                </div>
              </div>
              <div
                className="rounded-lg bg-royalblue-100 box-border w-[168px] h-[54px] overflow-hidden shrink-0 flex flex-row pt-[20.3700008392334px] pb-[20.3799991607666px] pr-[33.499996185302734px] pl-[32.380001068115234px] items-center justify-center cursor-pointer text-xs text-white border-[2px] border-solid border-white"
                onClick={onLinkContainerClick}
              >
                <div className="relative tracking-[2.16px] leading-[14px] uppercase font-extrabold">
                  LOGIN
                </div>
              </div>
            </div>
            <div className="rounded-mid bg-white shadow-[6px_6px_25px_7px_rgba(157,_157,_157,_0.15)] w-[250px] h-[250px] overflow-hidden shrink-0 flex flex-col pt-[68px] pb-[54px] pr-[54.00001525878906px] pl-[54px] box-border items-center justify-center gap-[32px]">
              <div className="flex flex-row py-0 pr-[0.1999969482421875px] pl-0 items-start justify-start">
                <div className="relative leading-[40px] font-extrabold">
                  <p className="m-0">Giving</p>
                  <p className="m-0">dashboard</p>
                </div>
              </div>
              <button
                className="cursor-pointer pt-[20.3700008392334px] pb-[20.3799991607666px] pr-[33.499996185302734px] pl-[32.380001068115234px] bg-royalblue-100 rounded-lg box-border w-[168px] h-[54px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-white"
                onClick={onLinkClick}
              >
                <div className="relative text-xs tracking-[2.16px] leading-[14px] uppercase font-extrabold font-heading-x-small-600 text-white text-center">
                  LOGIN
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[15px] md:flex-wrap">
            <div className="rounded-mid bg-white shadow-[6px_6px_25px_7px_rgba(157,_157,_157,_0.15)] w-[250px] h-[250px] overflow-hidden shrink-0 flex flex-col pt-[68px] pb-[54px] pr-[54.00001525878906px] pl-[54px] box-border items-center justify-center gap-[32px]">
              <div className="flex flex-row py-0 pr-[0.1999969482421875px] pl-0 items-start justify-start">
                <div className="relative leading-[40px] font-extrabold">
                  <p className="m-0">Website</p>
                  <p className="m-0">Builder</p>
                </div>
              </div>
              <div
                className="rounded-lg bg-royalblue-100 box-border w-[168px] h-[54px] overflow-hidden shrink-0 flex flex-row pt-[20.3700008392334px] pb-[20.3799991607666px] pr-[33.499996185302734px] pl-[32.380001068115234px] items-center justify-center cursor-pointer text-xs text-white border-[2px] border-solid border-white"
                onClick={onLinkContainer1Click}
              >
                <div className="relative tracking-[2.16px] leading-[14px] uppercase font-extrabold">
                  LOGIN
                </div>
              </div>
            </div>
            <div className="rounded-mid bg-white shadow-[6px_6px_25px_7px_rgba(157,_157,_157,_0.15)] w-[250px] h-[250px] overflow-hidden shrink-0 flex flex-col pt-[68px] pb-[54px] pr-[54.00001525878906px] pl-[54px] box-border items-center justify-center gap-[32px]">
              <div className="flex flex-row py-0 pr-[0.1999969482421875px] pl-0 items-start justify-start">
                <div className="relative leading-[40px] font-extrabold">
                  <p className="m-0">App</p>
                  <p className="m-0">Builder</p>
                </div>
              </div>
              <button
                className="cursor-pointer pt-[20.3700008392334px] pb-[20.3799991607666px] pr-[33.499996185302734px] pl-[32.380001068115234px] bg-royalblue-100 rounded-lg box-border w-[168px] h-[54px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-white"
                onClick={onLink1Click}
              >
                <div className="relative text-xs tracking-[2.16px] leading-[14px] uppercase font-extrabold font-heading-x-small-600 text-white text-center">
                  LOGIN
                </div>
              </button>
            </div>
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
              <span className="font-semibold">click here</span>
              <span>.</span>
            </div>
            <div className="self-stretch relative leading-[37.2px]">
              <span>{`For all additional questions, visit our `}</span>
              <span className="font-semibold">Community Help Center</span>
              <span>.</span>
            </div>
            <div className="self-stretch relative leading-[37.2px]">
              <span>{`For technical questions and support about your admin account visit our `}</span>
              <span className="font-semibold">Knowledge Center</span>
              <span>.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-royalblue-100 h-auto flex flex-row py-[31px] px-[69px] box-border items-center justify-between text-left text-mini text-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-between sm:self-stretch sm:h-auto sm:gap-[0px]">
          <div className="self-stretch flex flex-row items-start justify-between flex-wrap gap-[20px]">
            <div className="w-[248px] flex flex-col items-start justify-start gap-[24px]">
              <div className="relative box-border w-40 h-8 text-base text-gainsboro font-public-sans border-b-[1px] border-solid border-gainsboro">
                <div className="absolute top-[0px] left-[0px] tracking-[2.16px] leading-[14px] uppercase font-extrabold">
                  HELP
                </div>
              </div>
              <a className="[text-decoration:none] relative leading-[14px] font-semibold text-[inherit] hover:cursor-pointer">
                Support
              </a>
              <div className="relative bg-gray-400 w-[232.88px] h-[18px]">
                <a className="[text-decoration:none] absolute top-[1px] left-[0px] leading-[14px] font-semibold text-[inherit] hover:cursor-pointer">
                  System status
                </a>
              </div>
            </div>
            <div className="w-[248px] flex flex-col items-start justify-start gap-[24px] text-base">
              <div className="relative box-border w-40 h-8 text-gainsboro font-public-sans border-b-[1px] border-solid border-gainsboro">
                <div className="absolute top-[0px] left-[0px] tracking-[2.16px] leading-[14px] uppercase font-extrabold">
                  PLATFORM
                </div>
              </div>
              <a className="[text-decoration:none] relative text-mini leading-[14px] font-semibold text-[inherit] hover:cursor-pointer">
                Security
              </a>
              <div className="relative bg-gray-400 w-[232.89px] h-[18px]">
                <a className="[text-decoration:none] absolute top-[-1px] left-[0px] leading-[18px] font-semibold text-[inherit] hover:cursor-pointer">
                  FAQs
                </a>
              </div>
            </div>
            <div className="w-[248px] flex flex-col items-start justify-start gap-[24px]">
              <div className="relative box-border w-[167px] h-8 text-base text-gainsboro font-public-sans border-b-[1px] border-solid border-gainsboro lg:items-start lg:justify-start">
                <div className="absolute top-[0px] left-[0.33px] tracking-[2.16px] leading-[14px] uppercase">
                  <span className="font-extrabold">ABOUT</span>
                  <span className="font-extrabold font-heading-x-small-600">
                    {" "}
                    US
                  </span>
                </div>
              </div>
              <a className="[text-decoration:none] relative leading-[14px] font-semibold text-[inherit] hover:cursor-pointer">
                Company
              </a>
              <a className="[text-decoration:none] relative leading-[14px] font-semibold text-[inherit] hover:cursor-pointer">
                Careers
              </a>
              <div className="relative bg-gray-400 w-[232.89px] h-[18px]">
                <a className="[text-decoration:none] absolute top-[1px] left-[0px] leading-[14px] font-semibold text-[inherit] hover:cursor-pointer">
                  Newsroom
                </a>
              </div>
            </div>
            <div className="w-[248px] flex flex-col items-start justify-start gap-[24px] font-public-sans sm:w-[167px] sm:flex sm:flex-wrap">
              <div className="relative box-border w-40 h-8 text-base text-gainsboro border-b-[1px] border-solid border-gainsboro">
                <div className="absolute top-[0px] left-[0px] tracking-[2.16px] leading-[14px] uppercase font-extrabold">
                  LEGAL
                </div>
              </div>
              <a className="[text-decoration:none] relative leading-[14px] font-medium text-[inherit] hover:cursor-pointer">
                Terms of service
              </a>
              <a className="[text-decoration:none] relative leading-[14px] font-medium text-[inherit] hover:cursor-pointer">
                Terms of use
              </a>
              <a className="[text-decoration:none] relative leading-[14px] font-medium text-[inherit] hover:cursor-pointer">
                Privacy
              </a>
              <a className="[text-decoration:none] relative text-base leading-[14px] font-medium text-[inherit] hover:cursor-pointer">
                GDPR
              </a>
              <a className="[text-decoration:none] relative leading-[14px] font-medium text-[inherit] hover:cursor-pointer">
                Do not sell my personal information
              </a>
            </div>
          </div>
          <div className="relative text-lg leading-[28px] font-medium font-public-sans text-center mt-10 sm:text-sm">
            ©2023 . All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAppGivingDashboard;
