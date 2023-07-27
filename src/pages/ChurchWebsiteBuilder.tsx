import { FunctionComponent, useState, useCallback } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";

const ChurchWebsiteBuilder: FunctionComponent = () => {
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const navigate = useNavigate();

  const openHamburgerMenu = useCallback(() => {
    setHamburgerMenuOpen(true);
  }, []);

  const closeHamburgerMenu = useCallback(() => {
    setHamburgerMenuOpen(false);
  }, []);

  const onGetStartedButtonClick = useCallback(() => {
    navigate("/loginappgivingdashboard");
  }, [navigate]);

  return (
    <>
      <div className="relative w-full h-[6786px] flex flex-col items-end justify-start text-center text-base text-night-ghost-text font-public-sans">
        <header className="self-stretch bg-night-ghost-text flex flex-row py-0 px-5 items-center justify-between text-left text-17xl text-royalblue-100 font-rasa md:flex md:gap-[0px] md:pr-5 md:box-border">
          <div className="w-[110px] h-24 flex flex-row items-center justify-between md:flex-1 md:gap-[0px]">
            <a className="[text-decoration:none] flex-1 flex flex-row py-[39px] px-0 items-center justify-between text-[inherit] md:flex-1 md:self-stretch md:h-auto md:text-[70%]">
              <b className="flex-1 relative uppercase">LOGO</b>
            </a>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] hidden flex-row items-center justify-between md:flex"
              onClick={openHamburgerMenu}
            >
              <img className="relative w-11 h-11" alt="" src="/icon9.svg" />
            </button>
          </div>
          <div className="h-4 flex flex-row py-0 pr-[31px] pl-0 box-border items-center justify-start text-mini text-primary-black-100 font-overlock md:w-0 md:h-0 md:flex-row md:gap-[0px] md:pr-0 md:box-border">
            <div className="w-[552px] flex flex-row py-0 px-3 box-border items-center justify-center gap-[74px] md:hidden sm:pr-0 sm:box-border">
              <div className="flex flex-row items-start justify-start hover:cursor-pointer hover:[text-decoration:underline]">
                <b className="relative leading-[16px] capitalize hover:cursor-pointer md:leading-[12px]">
                  Pricing
                </b>
              </div>
              <div className="w-[70px] flex flex-row items-center justify-between hover:cursor-pointer hover:[text-decoration:underline]">
                <b className="relative leading-[16px] capitalize md:leading-[12px]">
                  products
                </b>
                <div className="overflow-hidden flex flex-col py-1 px-0 items-center justify-center hover:animate-[1s_ease_0s_1_normal_forwards_flip-horizontal-bottom] hover:opacity-[1]">
                  <img
                    className="relative w-[8.94px] h-[5.03px]"
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
              </div>
              <div className="w-20 flex flex-row items-center justify-between hover:cursor-pointer hover:[text-decoration:underline]">
                <b className="relative leading-[16px] capitalize md:leading-[12px]">
                  use cases
                </b>
                <div className="overflow-hidden flex flex-col py-1 px-0 items-center justify-center hover:animate-[1s_ease_0s_1_normal_forwards_flip-horizontal-bottom] hover:opacity-[1]">
                  <img
                    className="relative w-[8.94px] h-[5.03px]"
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
              </div>
              <div className="w-20 flex flex-row items-center justify-between hover:cursor-pointer hover:[text-decoration:underline]">
                <b className="relative leading-[16px] capitalize">Resources</b>
                <div className="w-[8.94px] h-3.5 overflow-hidden shrink-0 flex flex-col py-1 px-0 box-border items-center justify-between hover:animate-[1s_ease_0s_1_normal_forwards_flip-horizontal-bottom] hover:opacity-[1]">
                  <img
                    className="relative w-[8.94px] h-[5.03px]"
                    alt=""
                    src="/vector11.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row py-0.5 px-0 items-center justify-end gap-[20px] md:hidden md:w-0 md:gap-[0px] md:items-center md:justify-center">
            <button className="cursor-pointer py-2.5 px-0 bg-[transparent] rounded-lg box-border w-[110px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100">
              <b className="self-stretch flex-1 relative text-sm leading-[14px] capitalize flex font-overlock text-royalblue-100 text-center items-center justify-center">
                Login
              </b>
            </button>
            <button className="cursor-pointer [border:none] py-2.5 px-0 bg-royalblue-100 rounded-lg flex flex-row items-center justify-center">
              <b className="relative text-sm leading-[16px] capitalize flex font-overlock text-night-ghost-text text-center items-center justify-center w-[122px] shrink-0">
                Book A Demo
              </b>
            </button>
          </div>
        </header>
        <div className="self-stretch flex-1 [background:linear-gradient(28.44deg,_#0d43df,_#fff)] overflow-hidden flex flex-col items-center justify-between text-left text-mid md:pt-0 md:box-border">
          <div className="self-stretch flex-1 flex flex-row py-0 px-[60px] box-border items-center justify-center max-w-[1200px] m-auto md:flex-col md:gap-[0px] md:pl-[60px] md:pr-[60px] md:box-border md:m-auto">
            <div className="flex-1 flex flex-col pt-0 px-0 pb-[30px] items-start justify-start gap-[37px] md:h-auto md:gap-[10px] md:items-center md:justify-center md:flex-[unset] md:self-stretch sm:flex-1 sm:gap-[0px] sm:pb-[30px] sm:box-border">
              <div className="relative tracking-[1.8px] leading-[27.9px] uppercase font-extrabold">
                Church WEBSITE Builder
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-[32px] md:flex-1 md:items-start md:justify-between md:gap-[0px]">
                <div className="flex-1 relative leading-[41px] font-black">
                  <p className="m-0">{`We ensure that your digital `}</p>
                  <p className="m-0">{`platform is visually stunning, `}</p>
                  <p className="m-0">accessible, and user-friendly.</p>
                </div>
              </div>
              <div className="self-stretch relative text-5xl leading-[30.5px]">
                <p className="m-0">
                  Together, let's build a foundation that will
                </p>
                <p className="m-0"> stand the test of time.</p>
              </div>
              <div className="flex flex-row py-0 px-px items-center justify-center gap-[10px] text-base font-overlock sm:flex-col sm:gap-[18px]">
                <button
                  className="cursor-pointer [border:none] py-2.5 px-0 bg-night-ghost-text rounded-lg w-[110px] flex flex-row box-border items-center justify-center"
                  onClick={onGetStartedButtonClick}
                >
                  <b className="relative text-mini leading-[18px] capitalize font-overlock text-gray-100 text-center">
                    Get started
                  </b>
                </button>
                <a className="[text-decoration:none] w-[187px] h-[52px] flex flex-row items-center justify-center gap-[3px] text-[inherit] md:flex-1 md:text-[70%]">
                  <button className="cursor-pointer [border:none] p-0 bg-night-ghost-text relative rounded-81xl shadow-[1px_1px_4px_1px_rgba(0,_0,_0,_0.1)] w-[49px] h-[49px] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[16.9px] left-[17.33px] w-3.5 h-3.5 overflow-hidden"
                      alt=""
                      src="/icon10.svg"
                    />
                  </button>
                  <div className="flex-1 flex flex-row py-0 pr-0 pl-0.5 items-center justify-between">
                    <div className="flex-1 relative flex items-center h-[52px] hover:cursor-pointer hover:[text-decoration:underline]">
                      How it works
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col py-4 px-0 items-center justify-center relative gap-[10px] ml-[-42px] md:hidden md:pl-0 md:pr-0 md:box-border md:m-auto">
              <img
                className="relative w-[531px] h-[514px] object-cover z-[0]"
                alt=""
                src="/imac-24-inch1@2x.png"
              />
              <img
                className="absolute my-0 mx-[!important] h-[35.34%] w-[19.42%] top-[38.28%] right-[7.51%] bottom-[26.38%] left-[73.07%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
                alt=""
                src="/rectangle1@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch relative bg-aliceblue h-[122px]">
            <div className="absolute top-[calc(50%_-_25px)] left-[-407.96px] w-[5735.13px] h-[50px]">
              <img
                className="absolute top-[calc(50%_-_25px)] left-[407.96px] w-[172.39px] h-[49.98px] object-cover"
                alt=""
                src="/62c75398dac142bb765c1a43-seslogopngwebp2@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_25px)] left-[513.19px] w-[120px] h-[50px] object-cover"
                alt=""
                src="/62c7537b4421cc411aaee9d8-rtswebp2@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_25px)] left-[713.19px] w-[175.7px] h-[49.98px] object-cover"
                alt=""
                src="/62c75366bfc2c35e0cb61587-covenanttheologicalseminarylogowebp2@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_25px)] left-[968.89px] w-[103px] h-[50px] object-cover"
                alt=""
                src="/62a412d0ae6491d139b742a1-harvestlogowebp2@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_25px)] left-[1151.89px] w-[117.6px] h-[49.98px] object-cover"
                alt=""
                src="/63ed33f4c6d54853bc37f726-billygraham-logowebp2@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_16.44px)] left-[1349.49px] w-[200px] h-[32.88px] object-cover"
                alt=""
                src="/62a3c989c488718ef4da4b3b-angelus-temple-logo-3x201webp2@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_13px)] left-[1629.49px] w-[200px] h-[26px] object-cover"
                alt=""
                src="/63ed33f4d786962305aab5ba-freshlife-logop500png2@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_25px)] left-[1908.95px] w-[168.65px] h-[49.98px] object-cover"
                alt=""
                src="/6286cf3f50c6ba22b1dfbf0b-subsplasmarqueelogocristapng2@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_25px)] left-[2157.6px] w-[50px] h-[50px] object-cover"
                alt=""
                src="/6286cf404380e64617fa596d-subsplasmarqueelogohillsongpng2@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_22.21px)] left-[2287.6px] w-[200px] h-[44.4px] object-cover"
                alt=""
                src="/63ed33f497d1c7e6ac68903e-transformation-logop500webp2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 [background:linear-gradient(#fff,_#fff),_#f0f0f2] flex flex-row items-center justify-center text-primary-black-100">
          <div className="self-stretch flex-1 flex flex-col pt-[22px] px-0 pb-0 items-center justify-start gap-[56px]">
            <div className="self-stretch flex flex-row py-0 px-[62px] items-center justify-center">
              <div className="flex flex-col py-0 px-1 items-center justify-center gap-[40px]">
                <div className="self-stretch relative tracking-[1.8px] uppercase font-extrabold flex items-center justify-center h-4 shrink-0">
                  World-class church websites BUILDER
                </div>
                <div className="self-stretch relative text-21xl font-extrabold flex items-center h-10 shrink-0">
                  <span className="[line-break:anywhere]">
                    <p className="m-0">Beautifully built with ease</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[30px] flex-wrap text-left text-night-ghost-text">
              <div className="w-[300px] h-[548.82px] flex flex-col items-center justify-center gap-[15px] text-center text-gray-100">
                <div className="relative bg-lavender w-[300px] h-[421.82px] overflow-hidden shrink-0">
                  <div className="absolute top-[calc(50%_-_143px)] left-[76.5px] bg-night-ghost-text shadow-[22px_13px_16px_rgba(0,_0,_0,_0.25)] w-56 h-[286px] overflow-hidden">
                    <img
                      className="absolute top-[152px] left-[163px] w-[61px] h-[61px] overflow-hidden"
                      alt=""
                      src="/remixiconsfilldesigndragdropfill.svg"
                    />
                    <img
                      className="absolute top-[92px] left-[102px] w-[91px] h-[91px] overflow-hidden"
                      alt=""
                      src="/remixiconsfillmediaimage2fill1.svg"
                    />
                    <div className="absolute top-[220px] left-[101px] leading-[37.2px] font-extrabold">{`Drag & Drop`}</div>
                  </div>
                </div>
                <div className="self-stretch relative text-5xl leading-[37.2px] text-primary-black-100">
                  <p className="m-0">{`Drag & drop church website`}</p>
                  <p className="m-0">builder</p>
                </div>
              </div>
              <div className="w-[380px] h-[617px] flex flex-col items-center justify-center gap-[15px] text-7xs-7 font-roboto-condensed">
                <div className="relative bg-lightpink w-[380px] h-[543px] overflow-hidden shrink-0">
                  <div className="absolute h-[63.72%] w-9/12 top-[6.08%] right-[-3.69%] bottom-[30.2%] left-[28.69%] bg-night-ghost-text shadow-[30px_11px_24px_rgba(0,_0,_0,_0.25)] overflow-hidden">
                    <div className="absolute top-[239.39px] left-[398.27px] rounded-[50%] [background:linear-gradient(262.61deg,_#7341f2,_#5a45fd)] [filter:blur(58.2px)] w-[137.15px] h-[137.15px] opacity-[0.3]" />
                    <img
                      className="absolute top-[64px] left-[217px] w-[142px] h-[261px] object-cover"
                      alt=""
                      src="/httpsunsplashcomphotos3mwdi5-6hrc@2x.png"
                    />
                    <div className="absolute h-[9.86%] w-full top-[0%] right-[0%] bottom-[90.14%] left-[0%] bg-primary-black-100 overflow-hidden">
                      <div className="absolute top-[calc(50%_-_10.04px)] left-[28.5px] flex flex-row items-center justify-start gap-[2.85px]">
                        <div className="relative rounded-7xs-7 [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[19.95px] h-[19.95px] overflow-hidden shrink-0">
                          <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(3.56px)] w-[19.95px] h-[19.95px]" />
                        </div>
                        <div className="relative rounded-7xs-7 bg-gray-800 w-[66.26px] h-[19.95px]" />
                      </div>
                    </div>
                    <b className="absolute top-[13.54px] left-[444.59px] tracking-[-0.02em] leading-[8.55px]">
                      CONTACT US
                    </b>
                    <b className="absolute top-[14.25px] left-[68.75px] text-[8.55px] tracking-[-0.02em] leading-[8.55px]">
                      LIVING STONE CHURCH
                    </b>
                    <div className="absolute h-[3.84%] w-[3.27%] top-[4.59%] left-[102.31%] uppercase inline-block opacity-[0.9]">
                      Blog
                    </div>
                    <div className="absolute h-[1.92%] w-[7%] top-[4.66%] left-[93%] uppercase inline-block opacity-[0.9]">
                      Sermon
                    </div>
                    <div className="absolute h-[1.92%] w-[8%] top-[4.66%] left-[79.67%] uppercase inline-block opacity-[0.9]">
                      About us
                    </div>
                    <div className="absolute h-[1.92%] w-[5%] top-[4.66%] left-[69.33%] uppercase text-right inline-block opacity-[0.9]">
                      Home
                    </div>
                    <b className="absolute top-[128.96px] left-[32.44px] text-[17.1px] tracking-[-0.01em] leading-[22.8px] uppercase text-gray-500">
                      <p className="m-0">{`THE benefits of joining `}</p>
                      <p className="m-0">our church</p>
                    </b>
                    <div className="absolute top-[190.94px] left-[33.5px] text-[8.55px] tracking-[-0.01em] leading-[10.87px] lowercase text-dimgray-100">
                      <p className="m-0">
                        find fulfillment and joy by joining us on
                      </p>
                      <p className="m-0">Sunday service and weekly service.</p>
                    </div>
                    <div className="absolute top-[229.06px] left-[33.86px] rounded-[3.56px] [background:linear-gradient(262.61deg,_#7341f2,_#5a45fd)] w-[67.69px] h-[20.66px]">
                      <b className="absolute top-[calc(50%_-_4.28px)] left-[calc(50%_-_15.32px)] tracking-[-0.02em] leading-[8.55px]">
                        Join us today!
                      </b>
                    </div>
                    <div className="absolute top-[116.13px] left-[33.86px] tracking-[-0.01em] leading-[22.8px] uppercase font-medium text-mediumslateblue">
                      The bELIEVING CHURCH
                    </div>
                    <div className="absolute top-[299.6px] left-[37.42px] flex flex-row items-end justify-start gap-[8.55px]">
                      <img
                        className="relative w-[8.55px] h-[8.55px] overflow-hidden shrink-0"
                        alt=""
                        src="/remixiconsfilllogosfacebookboxfill1.svg"
                      />
                      <img
                        className="relative w-[8.55px] h-[8.55px] overflow-hidden shrink-0"
                        alt=""
                        src="/remixiconsfilllogosgooglefill1.svg"
                      />
                      <img
                        className="relative w-[8.55px] h-[8.55px] overflow-hidden shrink-0"
                        alt=""
                        src="/remixiconsfilllogostwitterfill1.svg"
                      />
                      <img
                        className="relative w-[8.55px] h-[8.55px] overflow-hidden shrink-0"
                        alt=""
                        src="/remixiconsfilllogosinstagramfill1.svg"
                      />
                    </div>
                  </div>
                  <div className="absolute h-[55.2%] w-[34.6%] top-[41.44%] right-[63.95%] bottom-[3.37%] left-[1.44%] bg-night-ghost-text shadow-[12px_22px_24px_rgba(0,_0,_0,_0.25)] overflow-hidden text-[5.91px]">
                    <img
                      className="absolute top-[0px] left-[0px] w-[138.42px] h-[30.64px] overflow-hidden"
                      alt=""
                      src="/frame-75.svg"
                    />
                    <b className="absolute top-[12.92px] left-[9.97px] text-[8.86px] tracking-[-0.02em] leading-[8.86px]">
                      LIVING STONE CHURCH
                    </b>
                    <img
                      className="absolute top-[129.19px] left-[5.17px] w-[128.36px] h-[141.74px] object-cover"
                      alt=""
                      src="/httpsunsplashcomphotos3mwdi5-6hrc1@2x.png"
                    />
                    <b className="absolute top-[58.69px] left-[9.97px] text-[11.81px] tracking-[-0.01em] leading-[13.66px] uppercase text-gray-500">
                      <p className="m-0">THE benefits of</p>
                      <p className="m-0">joining our church</p>
                    </b>
                    <div className="absolute top-[41.71px] left-[9.97px] tracking-[-0.01em] leading-[23.62px] uppercase font-medium text-mediumslateblue">
                      The bELIEVING CHURCH
                    </div>
                    <div className="absolute top-[90.06px] left-[9.97px] text-[5.17px] tracking-[-0.01em] leading-[7.2px] lowercase text-dimgray-100">
                      <p className="m-0">
                        find fulfillment and joy by joining us on
                      </p>
                      <p className="m-0">Sunday service and weekly service.</p>
                    </div>
                    <div className="absolute top-[109.63px] left-[9.97px] rounded-[3.69px] [background:linear-gradient(262.61deg,_#7341f2,_#5a45fd)] w-[47.98px] h-[14.03px]">
                      <b className="absolute top-[calc(50%_-_4.43px)] left-[calc(50%_-_15.87px)] tracking-[-0.02em] leading-[8.86px]">
                        Join us today!
                      </b>
                    </div>
                    <div className="absolute top-[277.94px] left-[calc(50%_-_30.75px)] flex flex-row items-end justify-start gap-[8.86px]">
                      <img
                        className="relative w-[8.86px] h-[8.86px] overflow-hidden shrink-0"
                        alt=""
                        src="/remixiconsfilllogosfacebookboxfill2.svg"
                      />
                      <img
                        className="relative w-[8.86px] h-[8.86px] overflow-hidden shrink-0"
                        alt=""
                        src="/remixiconsfilllogosgooglefill2.svg"
                      />
                      <img
                        className="relative w-[8.86px] h-[8.86px] overflow-hidden shrink-0"
                        alt=""
                        src="/remixiconsfilllogostwitterfill2.svg"
                      />
                      <img
                        className="relative w-[8.86px] h-[8.86px] overflow-hidden shrink-0"
                        alt=""
                        src="/remixiconsfilllogosinstagramfill2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-5xl leading-[29.2px] font-public-sans text-primary-black-100 text-center">
                  <p className="m-0">Modern, mobile-friendly website</p>
                  <p className="m-0">designs</p>
                </div>
              </div>
              <div className="w-[300px] h-[466.82px] flex flex-col items-center justify-center gap-[15px] text-[4.63px] font-label-medium-600">
                <div className="relative bg-cornflowerblue w-[300px] h-[421.82px] overflow-hidden shrink-0">
                  <div className="absolute top-[36px] left-[22px] bg-primary-black-100 shadow-[-12px_13px_13px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-col items-start justify-start">
                    <div className="relative w-[416.34px] h-[28.91px] overflow-hidden shrink-0">
                      <div className="absolute top-[calc(50%_-_8.58px)] right-[23.47px] rounded-[4.63px] bg-royalblue-100 w-[41.06px] overflow-hidden flex flex-row py-[4.625996112823486px] px-[5.782495021820068px] box-border items-center justify-center">
                        <div className="relative tracking-[-0.02em] leading-[6.94px] font-semibold">
                          Button
                        </div>
                      </div>
                      <div className="absolute top-[calc(50%_-_8.58px)] left-[calc(50%_-_56.4px)] flex flex-row items-start justify-start gap-[1.16px]">
                        <div className="rounded-[4.63px] overflow-hidden flex flex-row py-[4.625996112823486px] px-[5.782495021820068px] items-center justify-center gap-[2.31px]">
                          <img
                            className="relative w-[4.63px] h-[6.94px] hidden"
                            alt=""
                            src="/container2.svg"
                          />
                          <div className="relative tracking-[-0.02em] leading-[6.94px] font-semibold">
                            Link
                          </div>
                          <img
                            className="relative w-[4.63px] h-[6.94px] hidden"
                            alt=""
                            src="/container3.svg"
                          />
                        </div>
                        <div className="rounded-[4.63px] overflow-hidden flex flex-row py-[4.625996112823486px] px-[5.782495021820068px] items-center justify-center gap-[2.31px]">
                          <img
                            className="relative w-[4.63px] h-[6.94px] hidden"
                            alt=""
                            src="/container4.svg"
                          />
                          <div className="relative tracking-[-0.02em] leading-[6.94px] font-semibold">
                            Link
                          </div>
                          <img
                            className="relative w-[4.63px] h-[6.94px] hidden"
                            alt=""
                            src="/container5.svg"
                          />
                        </div>
                        <div className="rounded-[4.63px] overflow-hidden flex flex-row py-[4.625996112823486px] px-[5.782495021820068px] items-center justify-center gap-[2.31px]">
                          <img
                            className="relative w-[4.63px] h-[6.94px] hidden"
                            alt=""
                            src="/container6.svg"
                          />
                          <div className="relative tracking-[-0.02em] leading-[6.94px] font-semibold">
                            Link
                          </div>
                          <img
                            className="relative w-[4.63px] h-[6.94px] hidden"
                            alt=""
                            src="/container7.svg"
                          />
                        </div>
                        <div className="rounded-[4.63px] overflow-hidden flex flex-row py-[4.625996112823486px] px-[5.782495021820068px] items-center justify-center gap-[2.31px]">
                          <img
                            className="relative w-[4.63px] h-[6.94px] hidden"
                            alt=""
                            src="/container8.svg"
                          />
                          <div className="relative tracking-[-0.02em] leading-[6.94px] font-semibold">
                            Link
                          </div>
                          <img
                            className="relative w-[4.63px] h-[6.94px] hidden"
                            alt=""
                            src="/container9.svg"
                          />
                        </div>
                        <div className="rounded-[4.63px] overflow-hidden flex flex-row py-[4.625996112823486px] px-[5.782495021820068px] items-center justify-center gap-[2.31px]">
                          <img
                            className="relative w-[4.63px] h-[6.94px] hidden"
                            alt=""
                            src="/container10.svg"
                          />
                          <div className="relative tracking-[-0.02em] leading-[6.94px] font-semibold">
                            Link
                          </div>
                          <img
                            className="relative w-[4.63px] h-[6.94px] hidden"
                            alt=""
                            src="/container11.svg"
                          />
                        </div>
                      </div>
                      <div className="absolute top-[calc(50%_-_8.55px)] left-[23.13px] flex flex-row items-center justify-start gap-[2.31px]">
                        <div className="relative rounded-[4.63px] [background:conic-gradient(from_180deg_at_50%_50%,_#ffeac2_-46.16deg,_#4b2a16_130.63deg,_#eab872_133.38deg,_#ae824e_204.46deg,_#533018_311.43deg,_#ffeac2_313.84deg,_#4b2a16_490.63deg)] w-[16.19px] h-[16.19px] overflow-hidden shrink-0 hidden">
                          <div className="absolute top-[0px] left-[0px] bg-night-ghost-text [backdrop-filter:blur(2.89px)] w-[16.19px] h-[16.19px]" />
                        </div>
                        <div className="relative rounded-[4.63px] bg-gray-800 w-[53.78px] h-[16.19px]" />
                      </div>
                    </div>
                    <div className="w-[416.34px] flex flex-col py-[27.7559757232666px] px-[90.20691680908203px] box-border items-center justify-start gap-[23.13px] text-center text-[27.76px]">
                      <div className="self-stretch flex flex-col items-center justify-start gap-[11.56px]">
                        <div className="self-stretch relative tracking-[-0.04em] leading-[32.38px] font-semibold">
                          Build your landings in minutes
                        </div>
                        <div className="relative text-[5.2px] tracking-[-0.02em] leading-[8.1px] font-medium text-gray-500 inline-block w-[156.13px]">
                          The night is dark and full of terrors. What is dead
                          may never die. And now his watch is ended. All men
                          must die.
                        </div>
                      </div>
                      <div className="relative w-[266.86px] h-[118.83px] overflow-hidden shrink-0 text-left text-[3.69px] font-public-sans">
                        <div className="absolute top-[15.03px] left-[0px] rounded-[11.56px] bg-gray-800 w-[158.44px] h-[89.05px] overflow-hidden" />
                        <div className="absolute top-[15.03px] left-[108.42px] rounded-[11.56px] bg-gray-800 w-[158.44px] h-[89.05px] overflow-hidden" />
                        <div className="absolute top-[0px] left-[27.76px] rounded-[11.56px] bg-night-ghost-text w-[211.35px] h-[118.83px] overflow-hidden">
                          <div className="absolute top-[-0.29px] left-[0.14px] rounded-[2.34px] [background:linear-gradient(177.26deg,_#2352d5,_rgba(35,_82,_213,_0))] w-[211.35px] h-[115.94px]">
                            <div className="absolute top-[calc(50%_-_57.97px)] left-[calc(50%_-_111.46px)] rounded-[2.31px] bg-night-ghost-text w-[241.2px] h-[142.51px] overflow-hidden">
                              <img
                                className="absolute top-[0.29px] left-[5.64px] w-[312.95px] h-[124.69px] object-cover"
                                alt=""
                                src="/httpsunsplashcomphotos53m8pcxqqe4@2x.png"
                              />
                              <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[221.67px] h-[124.69px] overflow-hidden">
                                <div className="absolute top-[110.72px] left-[calc(50%_-_74.7px)] bg-night-ghost-text w-[149.51px] h-[0.92px] overflow-hidden" />
                                <div className="absolute top-[110.72px] left-[calc(50%_-_74.7px)] bg-crimson w-[33.71px] h-[0.92px] overflow-hidden" />
                                <div className="absolute top-[15.47px] left-[18.01px] leading-[3.98px] font-medium">
                                  Pastor Fred
                                </div>
                                <div className="absolute top-[9.7px] left-[196.62px] flex flex-row items-center justify-start gap-[1.5px] font-label-medium-600">
                                  <div className="relative rounded-[50%] bg-crimson w-[1.85px] h-[1.85px]" />
                                  <div className="relative leading-[3.98px] font-extrabold">
                                    Live
                                  </div>
                                </div>
                              </div>
                              <div className="absolute top-[9.81px] left-[9.7px] flex flex-row items-center justify-start gap-[2.05px] text-[4.37px]">
                                <img
                                  className="relative w-1.5 h-1.5 overflow-hidden shrink-0"
                                  alt=""
                                  src="/remixiconslinesystemarrowleftsline1.svg"
                                />
                                <div className="relative leading-[3.98px] font-semibold">
                                  Faithful God
                                </div>
                              </div>
                              <img
                                className="absolute top-[108.64px] left-[26.55px] w-[5.08px] h-[5.08px] overflow-hidden"
                                alt=""
                                src="/remixiconsfillmediarepeatonefill1.svg"
                              />
                            </div>
                          </div>
                          <img
                            className="absolute top-[calc(50%_-_14.89px)] right-[90.64px] w-[30.07px] h-[30.07px]"
                            alt=""
                            src="/play.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[303px] left-[30px] rounded-[10.19px] bg-night-ghost-text w-[132.5px] h-[106px] overflow-hidden text-21xl text-primary-black-100 font-public-sans">
                    <div className="absolute top-[calc(50%_-_26.5px)] left-[calc(50%_-_26px)] flex flex-col items-center justify-center gap-[15px]">
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/remixiconsfilldesigntboxfill.svg"
                      />
                      <div className="relative leading-[13.5px] font-semibold">
                        Aa
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-5xl leading-[29.2px] font-public-sans text-primary-black-100 text-center">
                  Customisable Design
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-aliceblue h-[1131px] overflow-hidden shrink-0 flex flex-row py-[30px] px-0 box-border items-center justify-between text-primary-black-100 font-label-medium-600">
          <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-center gap-[30px] flex-wrap">
            <div className="self-stretch flex flex-col pt-[200px] px-0 pb-0 items-start justify-start">
              <div className="overflow-hidden flex flex-col items-center justify-center gap-[19px]">
                <div className="relative tracking-[1.8px] leading-[27.9px] uppercase font-extrabold">
                  Top website features for churches
                </div>
                <div className="relative text-21xl leading-[50px] font-extrabold text-left">
                  <p className="m-0">{`Do more with your `}</p>
                  <p className="m-0">church website</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[30px] flex-wrap">
              <div className="self-stretch w-[330px] flex flex-col items-start justify-start gap-[72.82px]">
                <div className="relative bg-gray-800 w-[330px] h-[364.09px]" />
                <div className="relative bg-night-ghost-text w-[330px] h-[364.09px]" />
                <div className="relative w-[330px] h-[364px] overflow-hidden shrink-0">
                  <img
                    className="absolute top-[0px] right-[-0.18px] w-[330px] h-[364px] object-cover"
                    alt=""
                    src="/httpsunsplashcomphotos3xmcv5mjzpw@2x.png"
                  />
                </div>
                <div className="relative bg-gray-800 w-[330px] h-[364.09px]" />
              </div>
              <div className="self-stretch flex flex-row pt-5 px-0 pb-0 items-start justify-start">
                <div className="self-stretch w-[330px] flex flex-col items-start justify-start gap-[72px]">
                  <div className="relative bg-night-ghost-text w-[330px] h-[364.09px] overflow-hidden shrink-0" />
                  <div className="relative bg-gray-800 w-[330px] h-[364.09px] overflow-hidden shrink-0" />
                  <div className="relative w-[330px] h-[327px] overflow-hidden shrink-0">
                    <div className="absolute top-[-28.18px] left-[0.09px] w-[330px] h-[355.38px]">
                      <img
                        className="absolute top-[28.18px] left-[0px] w-[330px] h-[355.38px] object-cover"
                        alt=""
                        src="/httpsunsplashcomphotosgdokeynofne@2x.png"
                      />
                    </div>
                  </div>
                  <div className="relative bg-night-ghost-text w-[330px] h-[364.09px] overflow-hidden shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 bg-royalblue-100 overflow-hidden flex flex-col py-[108px] px-0 items-center justify-start text-21xl font-label-medium-600">
          <div className="relative w-[525.56px] h-[156.38px]">
            <div className="absolute top-[0px] left-[36px] leading-[50px] font-black">
              Tools for your ministry
            </div>
            <div className="absolute top-[65px] left-[33.89px] text-3xl leading-[37.2px] flex items-center w-[433px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">Everything you need to know, grow, and</p>
                <p className="m-0">engage your church in-person and online.</p>
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 bg-night-ghost-text flex flex-col py-[50px] px-0 items-center justify-start gap-[100px] text-primary-black-100">
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <div className="self-stretch relative tracking-[1.8px] leading-[27.9px] uppercase font-extrabold">
              World-class church websites BUILDER
            </div>
            <div className="self-stretch relative text-21xl font-extrabold">
              <p className="m-0">{`It's as simple as creating, reaching, `}</p>
              <p className="m-0">connecting, and growing.</p>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col py-5 px-10 items-start justify-center gap-[20px] text-left text-17xl text-gray-600">
            <div className="self-stretch flex flex-col py-1 px-0 items-start justify-start gap-[10px]">
              <b className="self-stretch relative leading-[38px] flex items-center h-9 shrink-0">
                Why us?
              </b>
              <div className="self-stretch relative text-base leading-[18px] font-label-medium-600 text-dimgray-300 flex items-center h-5 shrink-0">
                No complex interface, no stress, no code required.
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-center gap-[20px] flex-wrap text-base">
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                    <b className="absolute top-[19px] left-[20px] tracking-[-0.4px] leading-[19.2px] flex items-center w-[71.47px] h-5">
                      Autosave
                    </b>
                    <div className="absolute top-[51.18px] left-[20px] text-xs leading-[20px] text-dimgray-300 flex items-center w-[145.36px] h-[15px]">
                      Changes are auto-saved
                    </div>
                  </div>
                </div>
                <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                    <b className="absolute top-[19px] left-[20px] tracking-[-0.4px] leading-[19.2px] flex items-center w-[81.22px] h-5">
                      Dark mode
                    </b>
                    <div className="absolute top-[51.19px] left-[20px] text-xs leading-[20px] text-dimgray-300 flex items-center w-[125.4px] h-[15px]">
                      Light or dark anytime
                    </div>
                  </div>
                </div>
                <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                    <b className="absolute top-[19px] left-[20px] tracking-[-0.4px] leading-[19.2px] flex items-center w-[92.37px] h-5">
                      SEO friendly
                    </b>
                    <div className="absolute top-[51.19px] left-[20px] text-xs leading-[20px] text-dimgray-300 flex items-center w-[118.93px] h-[15px]">
                      Great search results
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                    <b className="absolute top-[19px] left-[20px] tracking-[-0.4px] leading-[19.2px] flex items-center w-[105.75px] h-5">
                      Domain
                    </b>
                    <div className="absolute top-[51.18px] left-[20px] text-[12.5px] leading-[20px] text-dimgray-300 flex items-center w-[113.86px] h-[15px]">
                      or yourdomain.com
                    </div>
                  </div>
                </div>
                <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                    <b className="absolute top-[19px] left-[20px] tracking-[-0.4px] leading-[19.2px]">
                      HTTPS
                    </b>
                    <div className="absolute top-[51.19px] left-[20px] text-xs leading-[20px] text-dimgray-300 flex items-center w-[104.37px] h-[15px]">
                      Secured with SSL
                    </div>
                  </div>
                </div>
                <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                    <b className="absolute top-[19px] left-[20px] tracking-[-0.4px] leading-[19.2px] flex items-center w-[92.29px] h-5">
                      AWS hosted
                    </b>
                    <div className="absolute top-[51.19px] left-[20px] text-xs leading-[20px] text-dimgray-300 flex items-center w-[81.9px] h-[15px]">{`Fast & Secure`}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="rounded-3xs overflow-hidden flex flex-col items-start justify-start">
                  <div className="relative rounded-3xs bg-whitesmoke-200 w-[300px] h-[89.19px]">
                    <b className="absolute top-[19px] left-[20px] tracking-[-0.4px] leading-[19.2px] flex items-center w-[99.87px] h-5">
                      Multiple sites
                    </b>
                    <div className="absolute top-[51.18px] left-[20px] text-xs leading-[20px] text-dimgray-300 flex items-center w-[101.11px] h-[15px]">
                      One account
                    </div>
                  </div>
                </div>
                <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                    <b className="absolute top-[19px] left-[20px] tracking-[-0.4px] leading-[19.2px] flex items-center w-[127.72px] h-5">
                      No code required
                    </b>
                    <div className="absolute top-[51.19px] left-[20px] text-xs leading-[20px] text-dimgray-300 flex items-center w-[113.48px] h-[15px]">
                      Super simple setup
                    </div>
                  </div>
                </div>
                <div className="rounded-3xs w-[300px] overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch relative rounded-3xs bg-whitesmoke-200 h-[89.19px]">
                    <b className="absolute top-[19px] left-[20px] tracking-[-0.4px] leading-[19.2px] flex items-center w-[109.65px] h-5">
                      Easy Analytics
                    </b>
                    <div className="absolute top-[51.19px] left-[20px] text-xs leading-[20px] text-dimgray-300 flex items-center w-[142.11px] h-[15px]">
                      Track visitors and views
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 bg-night-ghost-text flex flex-row items-center justify-center text-[38px] text-gray-600">
          <div className="flex-1 flex flex-col py-[50px] px-5 items-center justify-center gap-[20px]">
            <div className="self-stretch flex flex-row items-center justify-center max-w-[680px]">
              <b className="flex-1 relative tracking-[-1.56px] leading-[37.5px]">
                FAQs
              </b>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between max-w-[680px] text-left text-base">
              <div className="self-stretch flex-1 flex flex-col pt-0 px-0 pb-2.5 items-center justify-center gap-[10px]">
                <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                  <div className="relative leading-[25.6px] font-medium">
                    What is us?
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
                <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                  <div className="relative leading-[25.6px] font-medium">
                    Can I use my own domain ?
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
                <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                  <div className="relative leading-[25.6px] font-medium">
                    Can I use my own domain ?
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
                <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                  <div className="relative leading-[25.6px] font-medium">
                    How much does it cost?
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
                <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                  <div className="relative leading-[25.6px] font-medium">
                    Can I create an e-commerce website ?
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
                <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                  <div className="relative leading-[25.6px] font-medium">
                    Do I still need website hosting?
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
                <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                  <div className="relative leading-[25.6px] font-medium">
                    Do you offer customer support?
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
                <div className="self-stretch rounded-3xs bg-whitesmoke-200 h-[60px] flex flex-row py-0 px-5 box-border items-center justify-between">
                  <div className="relative leading-[25.6px] font-medium">
                    Can I cancel my subscription at any time?
                  </div>
                  <img
                    className="relative w-4 h-4 overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-royalblue-100 h-auto flex flex-row py-[31px] px-[69px] box-border items-center justify-between text-left text-mini font-label-medium-600">
          <div className="self-stretch flex-1 flex flex-col items-center justify-between sm:self-stretch sm:h-auto sm:gap-[0px]">
            <div className="self-stretch flex flex-row items-start justify-between flex-wrap gap-[20px]">
              <div className="w-[248px] flex flex-col items-start justify-start gap-[24px]">
                <div className="relative box-border w-40 h-8 text-base text-gainsboro-100 font-public-sans border-b-[1px] border-solid border-gainsboro-100">
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
                <div className="relative box-border w-40 h-8 text-gainsboro-100 font-public-sans border-b-[1px] border-solid border-gainsboro-100">
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
                <div className="relative box-border w-[167px] h-8 text-base text-gainsboro-100 font-public-sans border-b-[1px] border-solid border-gainsboro-100 lg:items-start lg:justify-start">
                  <div className="absolute top-[0px] left-[0.33px] tracking-[2.16px] leading-[14px] uppercase">
                    <span className="font-extrabold">ABOUT</span>
                    <span className="font-extrabold font-label-medium-600">
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
                <div className="relative box-border w-40 h-8 text-base text-gainsboro-100 border-b-[1px] border-solid border-gainsboro-100">
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
      {isHamburgerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top"
          onOutsideClick={closeHamburgerMenu}
        >
          <HamburgerMenu onClose={closeHamburgerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default ChurchWebsiteBuilder;
