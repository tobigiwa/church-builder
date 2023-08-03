import { FunctionComponent, useState } from "react";

type CustomInputFieldProps = {
  heading: string;
  className?: string;
  initialValue?: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  inputFormatAcceptable?: (input: string) => boolean;
};

const CustomInputField: FunctionComponent<CustomInputFieldProps> = ({
  heading,
  type,
  initialValue,
  placeholder,
  errorMessage,
  inputFormatAcceptable,
}) => {
  const [visibility, setVisibility] = useState(false);
  const errorFocusStates = {
    match: "focus:border-royalblue-100",
    mismatch: "focus:border-crimson-100"
  };
  const [errorFocus, setErrorFocus] = useState(false);
  return (
    <div className="self-stretch flex flex-col py-0 pr-[50px] pl-0 items-start justify-start gap-[8px]">
      <b className="relative">{heading}</b>
      <input
        className={`font-medium font-public-sans text-base bg-gainsboro-100 self-stretch rounded-lg h-[58px] overflow-hidden shrink-0 flex flex-row py-0 pr-0 pl-5 box-border focus:border-[2px] focus:border-solid items-center justify-start ${
          errorFocus ? errorFocusStates.mismatch : errorFocusStates.match
        }`}
        defaultValue={initialValue}
        contentEditable={true}
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          const isAcceptable = inputFormatAcceptable
            ? !inputFormatAcceptable(e.target.value)
            : true;
          setVisibility(isAcceptable);
          setErrorFocus(isAcceptable);
        }}
        onFocus={(e) => {
          const isAcceptable = inputFormatAcceptable
            ? !inputFormatAcceptable(e.target.value)
            : true;
          setVisibility(isAcceptable);
          setErrorFocus(isAcceptable);
        }}
        // onBlur={(e) => setVisibility(inputFormatAcceptable ?)}
        required
      />
      <div
        className={`error-indicator rounded-lg bg-crimson-200 min-w-[120px] h-12 overflow-hidden shrink-0 flex flex-col items-center justify-center text-base px-[10px]
    ${visibility ? "" : "hidden"}`}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 pr-[4px]"
            alt=""
            src="/error.svg"
          />
          <div className="relative font-medium">{errorMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomInputField;
