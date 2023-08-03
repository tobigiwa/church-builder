import { FunctionComponent, useCallback, useEffect } from "react";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import AnchorLink from "./basic/AnchorLink";

type HamburgerMenuType = {
  onOpen?: () => void;
  onClose?: () => void;
};

const HamburgerMenu: FunctionComponent<HamburgerMenuType> = ({ onClose }) => {

  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  const onLoginButtonClick = useCallback(() => {
    navigate("/mainlogin");
  }, [navigate]);

  const onSignOutClick = useCallback(() => {
    signOut();
    navigate("/");
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

  return (
    <div
      className="relative bg-night-ghost-text w-full h-[339px] flex flex-col py-[18px] px-[37px] box-border items-start justify-center gap-[10px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] max-h-[90%] overflow-auto text-left text-mini text-primary-black-100 font-overlock"
      data-animate-on-scroll
    >
      <div className="self-stretch h-20 flex flex-row items-center justify-between text-17xl text-royalblue-100 font-rasa">
        <a className="[text-decoration:none] w-[110px] flex flex-row py-[39px] px-0 box-border items-center justify-end relative gap-[10px] text-[inherit]">
          <b className="relative uppercase z-[0]">LOGO</b>
          <button  className=" [border:none] p-0 bg-[transparent] my-0 mx-[!important] absolute top-[52px] left-[0px] rounded-sm w-4 overflow-hidden shrink-0 flex flex-row items-start justify-center z-[1]"
            onClick={onClose}>
            <img className="relative w-4 h-4" alt="" src="/vector10.svg" />
          </button>
        </a>
        <div className="group">
        <button  className=" py-2.5 px-0 bg-[transparent] rounded-lg box-border w-[110px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100 group-hover:bg-royalblue-100"
          onClick={isAuthenticated() ? onSignOutClick : onLoginButtonClick}>
          <b className="self-stretch flex-1 relative text-xs capitalize flex font-open-sanstext-royalblue-100 text-center items-center justify-center group-hover:text-white">
            {isAuthenticated() ? "Log out" : "Login"}
          </b>
        </button>
        </div>
      </div>
      <div className="self-stretch h-2.5 flex flex-row py-2.5 px-0 box-border items-center justify-center">
        <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-gainsboro-200" />
      </div>
      <div className="self-stretch flex-1 flex flex-col py-[5px] pr-[31px] pl-0 items-start justify-between">
        <div className="self-stretch flex-1 flex flex-col py-0 px-3 items-start justify-between">
          <div className="flex flex-row items-start justify-start">
            <b className="relative capitalize md:">
              <AnchorLink text="Pricing"/>
            </b>
          </div>
          <div className="flex flex-row items-center justify-start ">
            <b className="relative capitalize md:">
              <AnchorLink text="Products"/>
            </b>
          </div>
          <div className="flex flex-row items-center justify-start">
            <b className="relative capitalize md:">
              <AnchorLink text="Use cases"/>
            </b>
          </div>
          <div className="flex flex-row items-center justify-start">
            <b className="relative capitalize">
              <AnchorLink text="Resources"/>
              </b>
          </div>
        </div>
      </div>
      <div className="self-stretch h-2.5 flex flex-row py-2.5 px-0 box-border items-center justify-center">
        <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-gainsboro-200" />
      </div>
      <div className="flex flex-row items-start justify-start">
        <b className="relative capitalize md:">
          <AnchorLink text="Book a demo" />
        </b>
      </div>
    </div>
  );
};

export default HamburgerMenu;