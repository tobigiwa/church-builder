import { FunctionComponent, useCallback, useEffect } from "react";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const LandingPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  const onGetStartedButtonClick = useCallback(() => {
    navigate("/loginappgivingdashboard");
  }, [navigate]);


  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onGetStartedButton1Click = useCallback(() => {
    navigate("/loginappgivingdashboard");
  }, [navigate]);


  return (
    <div className="relative w-full block flex-col items-center justify-center overflow-hidden text-left text-29xl text-gray-100 font-public-sans">
      <Header />
      <div className="self-stretch flex-1 [background:linear-gradient(177.31deg,_#fff,_#91a8ea_0.01%,_#fff_26.56%)] flex flex-col pt-20 px-0 pb-0 items-center justify-start gap-[112px] mix-blend-normal overflow-hidden text-center text-mid text-royalblue-100 font-heading-x-small-600">
        <div className="self-stretch flex-1 flex flex-col py-0 px-20 items-center justify-center gap-[59px] md:pl-[50px] md:pr-[50px] md:box-border sm:pl-[60px] sm:pr-[60px] sm:box-border">
          <div className="self-stretch relative tracking-[1.8px] leading-[24px] uppercase font-extrabold sm:text-sm">
            ALL -IN -ONE PLATFORM FOR YOUR CHURCH
          </div>
          <div className="self-stretch relative text-29xl leading-[46px] font-black font-public-sans text-black sm:text-21xl sm:flex-1">
            <p className="m-0">Built with ease for</p>
            <p className="m-0">your Church seamlessly</p>
          </div>
          <div className="self-stretch relative text-5xl tracking-[1.8px] leading-[24px] font-medium font-public-sans text-dimgray-100 sm:text-xl">
            <p className="m-0">{`A single destination to streamline your technology, unite `}</p>
            <p className="m-0">
              your individuals, and foster the growth of more disciples.
            </p>
          </div>
          <div className="flex flex-row py-0 px-px items-center justify-center gap-[10px] text-left text-base sm:flex-col sm:gap-[18px]">
            <button
              className="cursor-pointer [border:none] py-3.5 px-0 bg-royalblue-100 rounded-lg w-[150px] flex flex-row box-border items-center justify-center"
              onClick={onGetStartedButtonClick}
            >
              <div className="relative text-xs tracking-[2.16px] leading-[18px] uppercase font-extrabold font-heading-x-small-600 text-white text-center">
                Get started
              </div>
            </button>
            <a className="[text-decoration:none] w-[187px] h-[52px] flex flex-row items-center justify-center gap-[3px] text-[inherit] md:flex-1 md:text-[70%]">
              <button className="cursor-pointer [border:none] p-0 bg-royalblue-100 relative rounded-81xl shadow-[1px_1px_4px_1px_rgba(0,_0,_0,_0.1)] w-[49px] h-[49px] overflow-hidden shrink-0">
                <img
                  className="absolute top-[16.9px] left-[17.33px] w-3.5 h-3.5 overflow-hidden"
                  alt=""
                  src="/icon1.svg"
                />
              </button>
              <div className="flex-1 flex flex-row py-0 pr-0 pl-0.5 items-center justify-between">
                <div className="flex-1 relative leading-[30px] flex items-center h-[52px] hover:cursor-pointer hover:[text-decoration:underline]">
                  How it works
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="self-stretch relative bg-aliceblue h-[107px] overflow-hidden shrink-0 sm:overflow-hidden sm:mt-5">
          <div className="absolute top-[36px] left-[-185px] w-[5735.13px] h-[50px]">
            <img
              className="absolute top-[calc(50%_-_25px)] left-[260.8px] w-[172.39px] h-[49.98px] object-cover"
              alt=""
              src="/62c75398dac142bb765c1a43-seslogopngwebp@2x.png"
            />
            <img
              className="absolute top-[calc(50%_-_25px)] left-[513.19px] w-[120px] h-[50px] object-cover"
              alt=""
              src="/62c7537b4421cc411aaee9d8-rtswebp@2x.png"
            />
            <img
              className="absolute top-[calc(50%_-_25px)] left-[713.19px] w-[175.7px] h-[49.98px] object-cover"
              alt=""
              src="/62c75366bfc2c35e0cb61587-covenanttheologicalseminarylogowebp@2x.png"
            />
            <img
              className="absolute top-[calc(50%_-_25px)] left-[968.89px] w-[103px] h-[50px] object-cover"
              alt=""
              src="/62a412d0ae6491d139b742a1-harvestlogowebp@2x.png"
            />
            <img
              className="absolute top-[calc(50%_-_25px)] left-[1151.89px] w-[117.6px] h-[49.98px] object-cover"
              alt=""
              src="/63ed33f4c6d54853bc37f726-billygraham-logowebp@2x.png"
            />
            <img
              className="absolute top-[calc(50%_-_16.44px)] left-[1349.49px] w-[200px] h-[32.88px] object-cover"
              alt=""
              src="/62a3c989c488718ef4da4b3b-angelus-temple-logo-3x201webp@2x.png"
            />
            <div className="absolute top-[0px] left-[1629.49px] w-[448.11px] h-[49.98px] overflow-hidden">
              <img
                className="absolute top-[calc(50%_-_12.99px)] left-[0px] w-[200px] h-[26px] object-cover"
                alt=""
                src="/63ed33f4d786962305aab5ba-freshlife-logop500png@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_24.99px)] left-[279.46px] w-[168.65px] h-[49.98px] object-cover"
                alt=""
                src="/6286cf3f50c6ba22b1dfbf0b-subsplasmarqueelogocristapng@2x.png"
              />
            </div>
            <div className="absolute top-[0px] left-[2157.6px] w-[330px] h-[50px] overflow-hidden">
              <img
                className="absolute top-[calc(50%_-_22.21px)] left-[130px] w-[200px] h-[44.4px] object-cover"
                alt=""
                src="/63ed33f497d1c7e6ac68903e-transformation-logop500webp@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_25px)] left-[0px] w-[50px] h-[50px] object-cover"
                alt=""
                src="/6286cf404380e64617fa596d-subsplasmarqueelogohillsongpng@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 bg-aliceblue flex flex-col items-center justify-between md:flex-1 md:items-center md:justify-center md:pt-20 md:pb-20 md:box-border sm:flex-1 sm:gap-[0px]">
        <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[191px] px-0 items-center justify-center gap-[30px] md:flex-1 md:flex-col md:gap-[10px] md:pt-10 md:pb-10 md:box-border md:m-auto sm:flex-col sm:gap-[20px] sm:items-center sm:justify-center sm:pt-0 sm:pb-0 sm:box-border">
          <div
            className="w-[342px] h-[308px] flex flex-col items-center justify-center relative gap-[20px] [&.animate]:animate-[3s_ease-in-out_0s_infinite_alternate-reverse_both_scale-up] opacity-[1] sm:flex-1"
            data-animate-on-scroll
          >
            <img
              className="relative rounded-xl w-[188px] h-[194px] overflow-hidden shrink-0 object-cover z-[0]"
              alt=""
              src="/centerimage@2x.png"
            />
            <img
              className="absolute my-0 mx-[!important] top-[0.5px] left-[0px] rounded-xl w-[120px] h-[120px] overflow-hidden shrink-0 object-cover z-[1]"
              alt=""
              src="/floatingimage@2x.png"
            />
            <img
              className="absolute my-0 mx-[!important] top-[0.5px] left-[247px] rounded-[11.02px] w-[95px] h-[95px] overflow-hidden shrink-0 object-cover z-[2]"
              alt=""
              src="/floatingimage1@2x.png"
            />
            <img
              className="absolute my-0 mx-[!important] top-[156.58px] left-[7.27px] rounded-[11.02px] w-[104.24px] h-[104.24px] overflow-hidden shrink-0 object-cover z-[3]"
              alt=""
              src="/floatingimage2@2x.png"
            />
            <img
              className="absolute my-0 mx-[!important] top-[170.5px] left-[188px] rounded-xl w-[164px] h-[164px] overflow-hidden shrink-0 object-cover z-[4]"
              alt=""
              src="/floatingimage3@2x.png"
            />
          </div>
          <div className="w-[522px] h-[285px] flex flex-col items-start justify-between md:self-stretch md:w-auto md:h-auto md:gap-[24px] md:max-w-[90%] md:m-auto sm:flex-1 sm:gap-[24px] sm:p-5 sm:m-auto">
            <img
              className="relative w-[84px] h-[84px] overflow-hidden shrink-0"
              alt=""
              src="/icon2.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-start md:flex-1 md:h-auto">
              <div className="flex-1 relative leading-[70px] font-black md:self-stretch md:h-auto">
                Child Check-in
              </div>
            </div>
            <div className="w-[522px] flex flex-row items-center justify-between text-sm md:self-stretch md:w-auto md:flex-1 sm:self-stretch sm:w-auto">
              <div className="flex-1 relative leading-[26.5px] font-medium sm:self-stretch sm:h-auto sm:p-0">
                <p className="m-0">
                  Provide a secure and efficient check-in system for children's
                  ministry,
                </p>
                <p className="m-0">
                  ensuring the safety of children and simplifying the check-in
                  process for parents.
                </p>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-3.5 px-0 bg-royalblue-100 rounded-lg w-[150px] flex flex-row box-border items-center justify-center"
              onClick={onGetStartedButton1Click}
            >
              <div className="relative text-xs tracking-[2.16px] leading-[18px] uppercase font-extrabold font-heading-x-small-600 text-white text-center">
                Get started
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 [background:linear-gradient(#2352d5,_#2352d5),_#f0f0f2] overflow-hidden flex flex-row py-[52px] px-[50px] items-center justify-center text-white md:h-auto md:gap-[0px] md:pt-0 md:pb-20 md:box-border sm:h-auto sm:gap-[0px] sm:pl-0 sm:pr-0 sm:pb-0 sm:box-border mq1200:flex-row mq1148:flex-col">
        <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[20px] lg:flex-1 lg:gap-[0px] lg:items-center lg:justify-between md:self-stretch md:h-auto md:flex-col md:gap-[0px] mq1148:flex-[unset] mq1148:self-stretch">
          <div className="w-[409px] flex flex-row items-center justify-start sm:w-auto sm:[align-self:unset] sm:flex-1">
            <img
              className="relative w-[390px] h-[654px] md:m-auto"
              alt=""
              src="/vector3.svg"
            />
          </div>
          <div className="w-[691px] h-[400px] flex flex-col items-center justify-between lg:flex-1 lg:h-auto lg:flex-col md:self-stretch md:w-auto md:h-[550px] md:gap-[0px] md:items-center md:justify-between md:pt-[30px] md:pb-20 md:box-border sm:self-stretch sm:w-auto sm:flex-1 sm:gap-[0px] sm:pt-5 sm:px-5 sm:pb-20 sm:box-border">
            <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[25px] md:flex-1 md:gap-[0px] sm:gap-[0px] mq716:aspect-[1.66]">
              <img
                className="relative w-[73px] h-[73px] overflow-hidden shrink-0"
                alt=""
                src="/icon3.svg"
              />
              <div className="self-stretch relative leading-[70px] font-black">
                Mobile App Builder
              </div>
              <div className="self-stretch flex flex-row items-center justify-between max-w-[1200px] text-sm">
                <div className="self-stretch flex-1 relative leading-[26.5px] font-medium flex items-center max-w-[1200px] md:max-w-[1200px]">
                  Offer an intuitive mobile app builder with 3 inbuilt app
                  templates that mimic the mobile view of the website. Users can
                  customize these templates and add their church branding. The
                  platform should generate the necessary files for publishing
                  the apps on iOS and Android platforms. (mobile apps or
                  responsive web interfaces that allow members to access church
                  information, register for events, submit prayer requests, and
                  engage with the community on the go)
                </div>
              </div>
              <div className="self-stretch flex flex-row pt-5 px-0 pb-0 items-center justify-start">
                <button
                  className="cursor-pointer [border:none] py-3.5 px-0 bg-white rounded-lg w-[150px] flex flex-row box-border items-center justify-center"
                  onClick={onGetStartedButton1Click}
                >
                  <div className="self-stretch flex-1 relative text-xs tracking-[2.16px] leading-[18px] uppercase font-extrabold font-heading-x-small-600 text-royalblue-100 text-center flex items-center justify-center">
                    Get started
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 bg-whitesmoke overflow-hidden flex flex-col py-20 px-0 items-center justify-between md:h-auto mq1200:flex-col">
        <div className="w-[785px] flex flex-row py-5 px-[3px] box-border items-center justify-center md:self-stretch md:w-auto md:flex-1 md:flex-col md:gap-[40px]">
          <div className="self-stretch flex-1 flex flex-col items-start justify-between md:h-auto md:gap-[20px] md:pl-[30px] md:pr-[30px] md:box-border md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
              <img
                className="relative w-[59px] h-[59px] overflow-hidden shrink-0"
                alt=""
                src="/icon4.svg"
              />
              <div className="self-stretch flex flex-row py-0 pr-[125px] pl-0 items-center justify-between">
                <div className="flex-1 relative leading-[70px] font-black sm:text-21xl sm:self-stretch sm:h-auto">
                  Website Builder
                </div>
              </div>
            </div>
            <div className="self-stretch h-[320.5px] flex flex-col items-start justify-between text-lg md:flex-1 md:gap-[30px]">
              <div className="self-stretch flex flex-row py-0 pr-[191px] pl-0 items-center justify-between md:pr-0 md:box-border">
                <div className="flex-1 relative leading-[26.5px] font-medium">
                  <p className="m-0">
                    Provide a simple website builder with 10 inbuilt templates
                    that users can easily customize and edit to fit their
                    website needs. This feature enables churches to create and
                    maintain their website without requiring advanced technical
                    skills. (mobile apps or responsive web interfaces that allow
                    members to access
                  </p>
                  <p className="m-0">
                    church information, register for events, submit prayer
                    requests, and engage with the community on the go)
                  </p>
                </div>
              </div>
              <button
                className="cursor-pointer [border:none] py-3.5 px-0 bg-royalblue-100 rounded-lg w-[150px] flex flex-row box-border items-center justify-center"
                onClick={onGetStartedButton1Click}
              >
                <div className="relative text-xs tracking-[2.16px] leading-[18px] uppercase font-extrabold font-heading-x-small-600 text-white text-center">
                  Get started
                </div>
              </button>
            </div>
          </div>
          <img
            className="relative w-[366px] h-[392px] object-cover ml-[-240px] md:m-auto sm:flex sm:self-stretch sm:w-auto sm:flex-1 sm:max-w-[80%] sm:m-auto sm:p-0"
            alt=""
            src="/imac-24-inch@1x.png"
          />
        </div>
      </div>
      <div className="self-stretch flex-1 bg-white overflow-hidden flex flex-col py-20 px-0 items-center justify-between text-21xl md:h-auto md:pl-5 md:pr-0 md:box-border">
        <div className="w-[775px] h-[319px] flex flex-row items-center justify-between md:self-stretch md:w-auto md:flex-1 md:flex-col md:gap-[40px] md:pt-10 md:box-border sm:flex-col sm:items-center sm:justify-center">
          <div className="self-stretch w-[420px] flex flex-col items-start justify-between md:self-stretch md:w-auto md:flex-1 md:gap-[20px] md:m-auto md:justify-center">
            <img className="relative w-16 h-16" alt="" src="/icon5.svg" />
            <div className="self-stretch flex flex-row items-center justify-between md:flex-1 md:max-w-[90%]">
              <div className="flex-1 relative leading-[45px] font-black md:self-stretch md:h-auto sm:text-[45px] sm:self-stretch sm:h-auto">
                Church Management
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start text-sm md:max-w-[80%]">
              <div className="flex-1 relative leading-[20px] font-medium sm:text-sm">
                <p className="m-0">
                  Provide a secure and efficient check-in system for children's
                  ministry,
                </p>
                <p className="m-0">
                  ensuring the safety of children and simplifying the check-in
                  process for parents.
                </p>
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] py-3.5 px-0 bg-royalblue-100 rounded-lg w-[150px] flex flex-row box-border items-center justify-center"
              onClick={onGetStartedButton1Click}
            >
              <div className="relative text-xs tracking-[2.16px] leading-[18px] uppercase font-extrabold font-heading-x-small-600 text-white text-center">
                Get started
              </div>
            </button>
          </div>
          <img
            className="relative w-[381.29px] h-[275.05px]"
            alt=""
            src="/frame-482.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex-1 bg-white flex flex-col py-20 px-0 items-center justify-between text-sm text-black md:items-center md:justify-center md:pt-0 md:pb-0 md:box-border md:m-auto">
        <div className="self-stretch flex-1 overflow-hidden flex flex-row py-0 px-[34px] items-center justify-center gap-[51px] md:flex-1 md:flex-col md:gap-[20px] md:items-center md:justify-between md:pt-[87px] md:pb-[87px] md:box-border">
          <div className="w-[454px] h-[449px] flex flex-col items-end justify-start gap-[17px] sm:w-[400px] sm:gap-[17px] sm:items-center sm:justify-between sm:max-w-[90%]">
            <div className="w-[454px] h-[124px] flex flex-col items-end justify-center md:items-center md:justify-center sm:self-stretch sm:w-auto sm:items-center sm:justify-center">
              <div className="rounded-xl bg-white shadow-[10px_9px_23px_rgba(0,_0,_0,_0.1)] h-[124px] overflow-hidden shrink-0 flex flex-col py-3.5 px-[17px] box-border items-start justify-center gap-[8px]">
                <b className="relative leading-[26.5px]">Join us in giving</b>
                <div className="relative text-3xs leading-[26.5px] text-darkgray">
                  Set up a one-time or repeating gift
                </div>
                <div className="flex flex-row items-center justify-center gap-[8px]">
                  <button className="cursor-pointer [border:none] py-3 px-6 bg-lightgray-100 rounded-lg h-[34px] flex flex-row box-border items-center justify-center">
                    <div className="relative text-sm leading-[26.5px] font-medium font-public-sans text-dimgray-100 text-left">
                      $10
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-3 px-5 bg-lightgray-100 rounded-lg h-[34px] flex flex-row box-border items-center justify-center">
                    <div className="relative text-sm leading-[26.5px] font-medium font-public-sans text-dimgray-100 text-left">
                      $50
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-3 px-[15px] bg-royalblue-100 rounded-lg h-[34px] flex flex-row box-border items-center justify-center">
                    <div className="relative text-sm leading-[26.5px] font-medium font-public-sans text-white text-left">
                      $100
                    </div>
                  </button>
                  <button className="cursor-pointer [border:none] py-3 px-[17px] bg-royalblue-100 rounded-lg h-[34px] flex flex-row box-border items-center justify-center">
                    <div className="relative text-sm leading-[26.5px] font-medium font-public-sans text-white text-left">
                      Other
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center md:flex-1 md:m-auto">
              <div className="flex flex-col items-start justify-start sm:flex-1 sm:flex-row sm:gap-[0px]">
                <div className="relative w-[404px] h-[225px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-[25px] text-29xl text-gray-100 md:flex-[unset] md:gap-[0px] md:items-start md:justify-center md:m-auto md:self-stretch">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-[60px] font-black">
                Live streaming
              </div>
            </div>
            <img
              className="relative w-[68px] h-[68px] overflow-hidden shrink-0"
              alt=""
              src="/icon6.svg"
            />
            <div className="self-stretch flex flex-row items-center justify-center text-sm">
              <div className="flex-1 relative leading-[24px] font-medium">
                <p className="m-0">
                  Incorporate a live streaming feature that allows churches to
                </p>
                <p className="m-0">
                  broadcast their services, events, and special programs to a
                  wider online audience.
                </p>
                <p className="m-0">
                  This feature should provide a seamless integration with
                  popular streaming platforms
                </p>
                <p className="m-0">
                  and allow viewers to access the live stream through the
                  church's website or mobile
                </p>
                <p className="m-0">app.</p>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-3.5 px-0 bg-royalblue-100 rounded-lg w-[150px] flex flex-row box-border items-center justify-center">
              <div className="relative text-xs tracking-[2.16px] leading-[18px] uppercase font-extrabold font-heading-x-small-600 text-white text-center">
                Get started
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 bg-royalblue-100 flex flex-col py-[120px] px-4 items-center justify-between text-center text-21xl text-white md:self-stretch md:w-auto md:h-auto md:pt-[120px] md:pb-[120px] md:box-border sm:h-auto sm:gap-[0px] sm:pt-20 sm:pb-20 sm:box-border">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[50px] md:flex-1 sm:flex-1 sm:gap-[0px]">
          <div className="self-stretch relative leading-[46.5px] font-extrabold md:text-11xl md:leading-[35px] md:flex-1 md:max-w-[90%] md:my-0 md:mx-2.5 sm:text-[25px] sm:leading-[30px] sm:flex-1 sm:mt-2.5 sm:mb-5">
            <p className="m-0">Harness the immense potential of the</p>
            <p className="m-0"> Ultimate Engagement Platform.</p>
          </div>
          <div className="self-stretch flex-1 flex flex-row py-0 px-[61px] items-center justify-center gap-[10px] flex-wrap sm:flex-row sm:gap-[14px] sm:pb-0 sm:box-border sm:mb-[30px]">
            <button className="cursor-pointer [border:none] py-[49px] px-[99px] bg-white rounded-xl w-[150px] h-32 overflow-hidden shrink-0 flex flex-row box-border items-center justify-center hover:[scale:1.04] md:pt-0 md:pb-0 md:box-border">
              <img
                className="relative w-[41px] h-[68px]"
                alt=""
                src="/vector5.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] py-[50px] px-7 bg-white rounded-xl w-[150px] h-32 overflow-hidden shrink-0 flex flex-col box-border items-center justify-center hover:[scale:1.04] md:pt-0 md:pb-0 md:box-border">
              <img
                className="relative w-[135.01px] h-[68px]"
                alt=""
                src="/vector6.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] py-14 px-8 bg-white rounded-xl w-[150px] h-32 overflow-hidden shrink-0 flex flex-col box-border items-center justify-center hover:[scale:1.04] md:pt-0 md:pb-0 md:box-border">
              <img
                className="relative w-[114px] h-[54px]"
                alt=""
                src="/vector7.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] py-[54px] px-5 bg-white rounded-xl w-[150px] h-32 overflow-hidden shrink-0 flex flex-col box-border items-center justify-center hover:[scale:1.04] md:pt-0 md:pb-0 md:box-border">
              <img
                className="relative w-[121px] h-[52px]"
                alt=""
                src="/vector8.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] py-[42px] px-[57px] bg-white rounded-xl w-[150px] h-32 overflow-hidden shrink-0 flex flex-col box-border items-center justify-center hover:[scale:1.04]">
              <img
                className="relative w-[80.84px] h-[68px]"
                alt=""
                src="/vector9.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] py-[52px] px-[91px] bg-white rounded-xl w-[150px] h-32 overflow-hidden shrink-0 flex flex-row box-border items-center justify-center hover:[scale:1.04] md:pt-0 md:pb-0 md:box-border">
              <img
                className="relative w-[53.54px] h-[68px]"
                alt=""
                src="/vector10.svg"
              />
            </button>
            <button className="cursor-pointer [border:none] py-[41px] px-[42px] bg-white rounded-xl w-[150px] h-32 overflow-hidden shrink-0 flex flex-col box-border items-center justify-center hover:[scale:1.04]">
              <img
                className="relative w-[97.83px] h-[68px]"
                alt=""
                src="/vector11.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 [background:linear-gradient(180deg,_#91a8ea,_#fff)] flex flex-row py-20 px-2.5 items-center justify-center font-heading-x-small-600 md:h-auto">
        <div className="self-stretch flex-1 flex flex-row py-0 px-[39px] items-center justify-center gap-[47px] md:flex-col">
          <div className="self-stretch flex-1 flex flex-col items-start justify-between md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex-1 flex flex-col items-start justify-between md:gap-[60px]">
              <div className="relative leading-[50px] font-extrabold font-public-sans">
                Our Testimony
              </div>
              <div className="self-stretch relative text-5xl leading-[44px] font-medium">
                Here’s what churches are saying about
              </div>
              <div className="self-stretch h-[292px] flex flex-col items-start justify-start gap-[20px] text-17xl md:flex-1 md:gap-[50px] sm:gap-[90px]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="self-stretch flex-1 relative leading-[44px] font-semibold md:text-[28px]">
                    “The night is dark and full of terrors. What is dead may
                    never die. And now his watch is ended. All men must die.”
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start text-xl">
                  <div className="self-stretch h-7 flex flex-col items-start justify-start">
                    <div className="self-stretch flex-1 relative tracking-[-0.02em] leading-[28px] font-semibold">
                      Alyssa gomez
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-[315px] h-2">
                <div className="absolute top-[0px] left-[0px] bg-royalblue-100 w-[155px] h-2 overflow-hidden" />
                <div className="absolute top-[0px] left-[179px] bg-royalblue-100 w-4 h-2 opacity-[0.5]" />
                <div className="absolute top-[0px] left-[219px] bg-royalblue-100 w-4 h-2 opacity-[0.5]" />
                <div className="absolute top-[0px] left-[259px] bg-royalblue-100 w-4 h-2 opacity-[0.5]" />
                <div className="absolute top-[0px] left-[299px] bg-royalblue-100 w-4 h-2 opacity-[0.5]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:hidden md:gap-[80px]">
            <div className="relative w-[444.91px] h-[322px]">
              <img
                className="absolute top-[calc(50%_-_101px)] left-[calc(50%_+_32.68px)] rounded-[20.03px] w-[189.77px] h-[202px] overflow-hidden object-cover opacity-[0.5] hover:[scale:1.04]"
                alt=""
                src="/image@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_131px)] left-[calc(50%_-_57.45px)] rounded-[26.07px] w-[246.14px] h-[262px] overflow-hidden object-cover opacity-[0.8] hover:[scale:1.04]"
                alt=""
                src="/image1@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_161px)] left-[calc(50%_-_222.45px)] rounded-[54.47px] w-[321px] h-[322px] overflow-hidden object-cover hover:[scale:1.04]"
                alt=""
                src="/image2@2x.png"
              />
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

export default LandingPage;
