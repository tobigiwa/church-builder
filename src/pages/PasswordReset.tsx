import { FunctionComponent } from "react";
import Header from "../components/Header";

const PasswordReset: FunctionComponent = () => {
  return (
    <div className="relative w-full h-[1309px] block flex-col items-end justify-start text-left text-21xl text-black font-public-sans">
      <Header />
      <div className="self-stretch flex-1 [background:linear-gradient(180deg,_#91a8ea,_#fff)] flex flex-row py-[272px] px-0 items-start justify-between md:pt-[150px] md:pb-[150px] md:box-border sm:pt-20 sm:pb-20 sm:box-border">
        <div className="flex-1 flex flex-col py-0 pr-0 pl-[51px] items-start justify-start gap-[50px]">
          <div className="self-stretch relative leading-[40px] font-black sm:text-11xl sm:leading-[30px]">
            <p className="m-0">{`REQUEST `}</p>
            <p className="m-0">PASSWORD RESET</p>
          </div>
          <div className="self-stretch flex flex-row py-0 pr-[25px] pl-0 items-center justify-center text-3xl text-dimgray-200">
            <div className="flex-1 relative leading-[37.2px]">
              <p className="m-0">{`Please enter the e-mail address you use to login `}</p>
              <p className="m-0">
                and an e-mail with a reset link will be sent to you.
              </p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-sm-3 font-heading-x-small-600">
            <div className="self-stretch h-[94px] flex flex-col items-start justify-start gap-[12px]">
              <div className="relative w-[53px] h-[18px]">
                <div className="absolute top-[0px] left-[0px] tracking-[2.57px] leading-[18px] uppercase font-extrabold">
                  eMAIL
                </div>
              </div>
              <div className="rounded-lg bg-white box-border h-[58px] flex flex-row py-0 px-[31px] items-center justify-center border-[1px] border-solid border-lightgray-200 md:w-[350px] md:pl-[31px] md:box-border sm:w-[300px]">
                <input
                  className="[border:none] font-medium font-public-sans text-base bg-[transparent] self-stretch relative leading-[18px] text-dimgray-200 text-left flex items-center w-[630px] shrink-0 [outline:none] md:flex-1"
                  type="email"
                  placeholder="Enter your here"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-royalblue-100 h-auto flex flex-row py-[31px] px-[69px] box-border items-center justify-between text-mini text-white font-heading-x-small-600">
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

export default PasswordReset;
