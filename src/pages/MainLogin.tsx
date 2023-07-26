import axios, { AxiosError } from "axios";
import { config } from "process";
import { ChangeEvent, FormEvent, FunctionComponent, useCallback, useState } from "react";
import { useSignIn } from "react-auth-kit";
import { redirect, useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import { log } from "console";

const MainLogin: FunctionComponent = () => {

  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated()) {
    return (<Navigate to="/maininteraction" replace={true} />);
  }

  const onForgetPasswordClick = useCallback(() => {
    navigate("/passwordreset");
  }, [navigate]);

  const checkIfEmail = useCallback((event: ChangeEvent) => {

    const target = event.target as HTMLInputElement;
    const enteredMail = target.value;
    if (target.validity.valueMissing) {
      target.setCustomValidity("Email field is required");
    } else if (
      !(enteredMail
        .match(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ))) {
      target.setCustomValidity("The entered email is invalid");
    }
    else {
      target.setCustomValidity("");
    }
    target.reportValidity();
  }, []);

  const [error, setError] = useState("");
  const signIn = useSignIn();

  const onSubmitClick = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    const submitButton = document.querySelector("[type=\"submit\"]");
    const loadingIndicator       = document.getElementById("loadingIndicator");

    console.log(loadingIndicator);

    submitButton?.setAttribute("disabled", "");
    loadingIndicator?.classList.remove("hidden");

    const { email, password } = document.forms[0];
    console.log(email.value, password.value);
    const credentials = { email: email.value, password: password.value };
    try {

      const response = await axios.post(
        `/auth/jwt/create/`,
        credentials,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log(response);
      if (signIn({
        token: response.data.access,
        expiresIn: 30 * 60,
        tokenType: "Bearer",
        refreshToken: response.data?.refresh,
        refreshTokenExpireIn: 24 * 60 * 60,
        authState: { email: credentials.email }
      })) {
        navigate("/maininteraction", { replace: true });
      }
      else {
        setError(response.data?.details);
      }
    }
    catch (err) {
      submitButton?.removeAttribute("disabled");
      loadingIndicator?.classList.add("hidden");

      if (err && err instanceof AxiosError)
        setError(err.response?.data.message);
      else if (err && err instanceof Error)
        setError(err.message)

      console.log(error);
    }
  }, [navigate]);


  return (
    <div className="relative w-full flex flex-col items-start justify-start text-center text-5xl text-black font-heading-x-small-600">
      <Header />
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
        <form onSubmit={onSubmitClick}>
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
                placeholder="Enter your email here"
                name="email"
                onChange={checkIfEmail}
                required
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
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    required
                  />
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6 overflow-hidden shrink-0"
                    onMouseDown={(e) => setPasswordVisible(true)}
                    onMouseUp={(e) => setPasswordVisible(false)}
                    onMouseLeave={(e) => setPasswordVisible(false)}
                    onClick={(e) => e.preventDefault()}>
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt="view password"
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
              className="cursor-pointer [border:none] py-[23px] bg-royalblue-100 rounded-lg w-[624px] flex flex-row box-border items-center justify-center md:w-[300px] md:py-5 md:px-[100px] md:box-border"
              type="submit"
              name="submit"
            >
              <div className="flex text-white px-4 py-2 rounded-md hidden" id="loadingIndicator">
                <svg className="h-5 w-5 mr-3 animate-spin" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20.735a8 8 0 008-8h4a12 12 0 01-12 12v-4.265zM20 12a8 8 0 01-8 8v4.265a12 12 0 0012-12h-4zm-8-6.735a8 8 0 018-8v-4.265a12 12 0 00-12 12h4z" />
                </svg>
              </div>
              <div className="text-base leading-[18px] font-medium font-public-sans text-white text-center flex items-center justify-center h-3 md:w-[200px]">
                Log in
              </div>
            </button>
          </div>
        </form>
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
