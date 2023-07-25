import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LiveStream: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGetStartedButtonClick = useCallback(() => {
    navigate("/loginappgivingdashboard");
  }, [navigate]);

  return (
    <div className="relative w-full h-[2272px] overflow-hidden flex flex-col items-center justify-center text-center text-mid text-black font-heading-x-small-600">
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
                  src="/vector12.svg"
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
                  src="/vector13.svg"
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
                  src="/vector14.svg"
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
      <div className="self-stretch flex-1 [background:linear-gradient(180deg,_#91a8ea,_#fff_85.92%,_rgba(255,_255,_255,_0))] flex flex-col pt-[150px] px-0 pb-0 items-center justify-center gap-[50px] md:gap-[0px] md:items-center md:justify-between md:pt-0 md:pb-0 md:box-border md:max-h-[700px]">
        <div className="self-stretch flex flex-col py-0 px-[127px] items-center justify-start gap-[60px] md:flex-1 md:gap-[0px] md:pl-2.5 md:pr-2.5 md:box-border">
          <div className="self-stretch flex flex-row items-center justify-between md:flex-1">
            <div className="flex-1 h-[222px] flex flex-col items-center justify-center gap-[10px] md:gap-[20px]">
              <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                <div className="relative tracking-[1.8px] leading-[27.9px] uppercase font-extrabold flex items-center justify-center w-[351px] sm:text-base">
                  live streaming for churches
                </div>
                <div className="self-stretch relative text-21xl leading-[40px] font-black sm:text-11xl sm:leading-[30px]">
                  <p className="m-0">Stay connected with</p>
                  <p className="m-0">church live streaming</p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center text-left text-base text-royalblue-100">
                <div className="flex flex-row py-0 px-px items-center justify-center gap-[10px] sm:flex-col sm:gap-[18px]">
                  <button
                    className="cursor-pointer [border:none] py-3.5 px-0 bg-royalblue-100 rounded-lg w-[150px] flex flex-row box-border items-center justify-center"
                    onClick={onGetStartedButtonClick}
                  >
                    <div className="relative text-xs tracking-[2.16px] leading-[18px] uppercase font-extrabold font-heading-x-small-600 text-white text-center">
                      Get started
                    </div>
                  </button>
                  <a className="[text-decoration:none] w-[187px] h-[52px] flex flex-row items-center justify-center gap-[3px] text-[inherit] md:flex-1 md:text-[70%]">
                    <img
                      className="relative rounded-81xl w-[59px] h-[59px] overflow-hidden shrink-0"
                      alt=""
                      src="/icon8.svg"
                    />
                    <div className="flex-1 flex flex-row py-0 pr-0 pl-0.5 items-center justify-between">
                      <div className="flex-1 relative leading-[30px] flex items-center h-[52px] hover:cursor-pointer hover:[text-decoration:underline]">
                        How it works
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative w-[856px] h-[455px] md:hidden md:self-stretch md:w-auto md:flex-1"
            alt=""
            src="/vector15.svg"
          />
        </div>
        <div className="self-stretch bg-aliceblue h-[100px] overflow-hidden shrink-0 flex flex-col py-[25px] px-0 box-border items-center justify-between">
          <div className="overflow-hidden flex flex-row py-0 px-[261px] items-center justify-center gap-[80px]">
            <img
              className="relative w-[172.39px] h-[49.98px] object-cover"
              alt=""
              src="/62c75398dac142bb765c1a43-seslogopngwebp1@2x.png"
            />
            <img
              className="relative w-[120px] h-[50px] object-cover"
              alt=""
              src="/62c7537b4421cc411aaee9d8-rtswebp1@2x.png"
            />
            <img
              className="relative w-[175.7px] h-[49.98px] object-cover"
              alt=""
              src="/62c75366bfc2c35e0cb61587-covenanttheologicalseminarylogowebp1@2x.png"
            />
            <img
              className="relative w-[103px] h-[50px] object-cover"
              alt=""
              src="/62a412d0ae6491d139b742a1-harvestlogowebp1@2x.png"
            />
            <img
              className="relative w-[117.6px] h-[49.98px] object-cover"
              alt=""
              src="/63ed33f4c6d54853bc37f726-billygraham-logowebp1@2x.png"
            />
            <img
              className="relative w-[200px] h-[32.88px] object-cover"
              alt=""
              src="/62a3c989c488718ef4da4b3b-angelus-temple-logo-3x201webp1@2x.png"
            />
            <img
              className="relative w-[200px] h-[26px] object-cover"
              alt=""
              src="/63ed33f4d786962305aab5ba-freshlife-logop500png1@2x.png"
            />
            <img
              className="relative w-[168.65px] h-[49.98px] object-cover"
              alt=""
              src="/6286cf3f50c6ba22b1dfbf0b-subsplasmarqueelogocristapng1@2x.png"
            />
            <img
              className="relative w-[50px] h-[50px] object-cover"
              alt=""
              src="/6286cf404380e64617fa596d-subsplasmarqueelogohillsongpng1@2x.png"
            />
            <img
              className="relative w-[200px] h-[44.4px] object-cover"
              alt=""
              src="/63ed33f497d1c7e6ac68903e-transformation-logop500webp1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 relative bg-white" />
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

export default LiveStream;
