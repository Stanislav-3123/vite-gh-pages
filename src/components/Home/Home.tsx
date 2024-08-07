import Title from "./Title/Title.tsx";
import AboutUs from "./AboutUs/AboutUs.tsx";
import TitleDT from "./Title/TitleDT.tsx";
import SmartTicker from "../Tickers/SmartTicker.tsx";
import SliderSVG from "../Sliders/SliderSVG";
import ProductSlider from "../Sliders/ProductSlider";

const Home = () => {
    return (
        <div
            className="sm:pt-[120px] pt-[70px] inline-flex flex-col gap-12 justify-start overflow-y-hidden sm:overflow-y-visible items-center w-full">
            <Title/>
            <TitleDT/>
            <ProductSlider/>
            <SmartTicker/>
            <SliderSVG/>
            <AboutUs/>
        </div>
    );
};

export default Home;