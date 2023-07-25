import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const MainLogin: FunctionComponent = () => {
  const navigate = useNavigate();

  const onForgetPasswordClick = useCallback(() => {
    navigate("/passwordreset");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/maininteraction");
  }, [navigate]);

  return (
    <div className="relative w-full flex flex-col items-start justify-start text-center text-5xl text-black font-heading-x-small-600">
      <header className="self-stretch bg-white flex flex-row py-0 px-5 items-center justify-between text-left text-17xl text-royalblue-100 font-public-sans md:flex md:gap-[0px] md:pr-5 md:box-border">
        <div className="w-[110px] h-24 flex flex-row items-center justify-between md:flex-1 md:gap-[0px]">
          <a className="[text-decoration:none] flex-1 flex flex-row py-[39px] px-0 items-center justify-between text-[inherit] md:flex-1 md:self-stretch md:h-auto md:text-[70%]">
            <div className="flex-1 relative tracking-[2.16px] leading-[18px] uppercase font-extrabold">
              LOGO
            </div>
          </a>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-11 hidden flex-row items-center justify-between md:flex">
            <img className="relative w-11 h-11" alt="" src="/icon.svg" />
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
                  src="/vector.svg"
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
                  src="/vector1.svg"
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
                  src="/vector2.svg"
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
      <div className="self-stretch [background:linear-gradient(180deg,_#91a8ea,_#fff)] overflow-hidden flex flex-col py-[202px] px-0 items-center justify-start gap-[180px] md:gap-[150px] md:pt-[150px] md:pb-[150px] md:box-border sm:gap-[80px] sm:pt-20 sm:pb-20 sm:box-border">
        <div className="w-[336px] flex flex-col py-4 px-[142px] box-border items-center justify-center gap-[15px]">
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
            <div className="relative leading-[37.2px] flex items-center w-[185px] shrink-0">
              Are you a donor?
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-3xl leading-[37.2px] font-heading-x-small-600 text-mediumslateblue text-left flex items-center w-[114px] shrink-0 hover:[text-decoration:underline]">
              Click here
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[33px] text-left text-sm-3 md:gap-[40px]">
          <div className="flex flex-col items-start justify-start gap-[12px]">
            <div className="relative w-[53px] h-[18px]">
              <div className="absolute top-[0px] left-[0px] tracking-[2.57px] leading-[18px] uppercase font-extrabold">
                eMAIL
              </div>
            </div>
            <input
              className="font-medium font-public-sans text-base bg-white rounded-lg box-border w-[692px] h-[58px] flex flex-row py-0 px-[31px] items-center justify-center [outline:none] border-[1px] border-solid border-lightgray-200 md:w-[400px] sm:w-[300px]"
              type="text"
              placeholder="Enter your here"
            />
          </div>
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-col py-0 px-1 items-start justify-start gap-[12px]">
              <div className="relative tracking-[2.57px] leading-[18px] uppercase font-extrabold">
                Password
              </div>
              <div className="rounded-lg bg-white box-border w-[685px] h-[58px] flex flex-row py-0 px-6 items-center justify-center gap-[10px] border-[1px] border-solid border-lightgray-200 md:w-[400px] sm:w-[300px]">
                <input
                  className="[border:none] font-medium font-public-sans text-base bg-[transparent] self-stretch flex-1 relative leading-[18px] text-dimgray-200 text-left flex items-center [outline:none]"
                  type="password"
                  required
                />
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6 overflow-hidden shrink-0">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/group1.svg"
                  />
                </button>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[37.2px] font-public-sans text-mediumslateblue text-center inline-block hover:[text-decoration:underline]"
              onClick={onForgetPasswordClick}
            >
              Forget password?
            </button>
          </div>
          <button
            className="cursor-pointer [border:none] py-[23px] px-[289px] bg-royalblue-100 rounded-lg w-[624px] flex flex-row box-border items-center justify-center md:w-[300px] md:py-5 md:px-[100px] md:box-border"
            onClick={onFrameButtonClick}
          >
            <div className="flex-1 relative text-base leading-[18px] font-medium font-public-sans text-white text-center flex items-center justify-center h-3 md:w-[200px]">
              Log in
            </div>
          </button>
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

export default MainLogin;
