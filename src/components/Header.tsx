import { FunctionComponent, useCallback } from "react";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { Navigate, useNavigate } from "react-router-dom";

const Header: FunctionComponent = () => {

    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();
    const signOut = useSignOut();

    const onLoginButtonClick = useCallback(() => {
        if (isAuthenticated()) {
            signOut();
            navigate("/");
        }
        else
            navigate("/mainlogin");
    }, [navigate]);

    return (
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
            <div className="w-[281px] flex flex-row py-0.5 px-0 box-border items-center justify-end gap-[20px] md:hidden md:w-0 md:gap-[0px] md:items-center md:justify-center">
                <button className="cursor-pointer py-2.5 px-0 bg-[transparent] rounded-lg box-border w-[110px] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[2px] border-solid border-royalblue-100">
                    <div className="flex-1 relative text-xs tracking-[2.16px] leading-[14px] uppercase font-extrabold font-heading-x-small-600 text-royalblue-100 text-center"
                        onClick={onLoginButtonClick}>
                        {isAuthenticated() ? "LOG OUT" : "LOGIN"}
                    </div>
                </button>
                <button className="cursor-pointer [border:none] py-2.5 px-[21px] bg-royalblue-100 rounded-lg w-[151px] flex flex-row box-border items-center justify-center">
                    <div className="relative text-xs tracking-[2.16px] leading-[16px] uppercase font-extrabold font-heading-x-small-600 text-white text-center flex items-center justify-center w-[122px] shrink-0">
                        BOOK A DEMO
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;
