import { FunctionComponent } from "react";
import Marquee from "react-fast-marquee";


const Sponsors: FunctionComponent = () => {

    return (
        <Marquee className="self-stretch relative bg-aliceblue h-[107px] overflow-hidden shrink-0 sm:overflow-hidden sm:mt-5">
            <div className="absolute top-[36px] left-[-185px] w-[5735.13px] h-[50px]">
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
        </Marquee>
    );
};

export default Sponsors