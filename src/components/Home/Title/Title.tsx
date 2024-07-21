import SliderSVG from "../../Sliders/SliderSVG.tsx";
import {Link} from "react-scroll";

const Title = () => {

    return (
        <div
            className="overflow-y-hidden w-full mb:h-full h-[587pxpx] sm:hidden flex-col justify-start gap-4 items-start inline-flex">
            <h1 className="px-4 animate-jump-in animate-once animate-duration-500 animate-delay-0 animate-ease-in">Магний
                Водород</h1>
            <h3 className="px-4 animate-fade animate-fill-backwards animate-once animate-duration-300 animate-delay-[300ms] animate-ease-in">Работаем для здоровья и долголитея</h3>
            <p className="px-4 animate-fade animate-fill-backwards animate-once animate-duration-300 animate-delay-[600ms] animate-ease-in">Превосходные антиоксидантные действия Н2 были впервые обнаружены и доказаны в 2007 году японскими учеными. Рядом исследований было доказано, что водород оказывает мощное терапевтическое воздействие на весь организм человека. </p>
            <div
                className="mx-auto animate-mobile_cube_zoom animate-fill-backwards animate-delay-[900ms] w-[280px] h-[280px]">
                <div
                    className="mx-auto bg-cover bg-[url('/images/image/mainCub.png')] animate-rotate_full w-[280px] h-[280px]"/>
            </div>
            <div className="px-4">
                <Link to={"contactForm"} offset={-190} smooth={true} duration={900}
                      className="animate-flip-up animate-once animate-duration-[900ms] animate-delay-[900ms] animate-ease-in animate-fill-backwards
                    cursor-pointer bg-white bg-opacity-20 rounded-[100px] border border-white flex flex-row p-4 gap-4 w-full">
                    <p className="w-full self-center">Есть вопросы?</p>
                    <button className="w-fit flex flex-row gap-2 whitespace-nowrap">
                        <h3 className="self-center text-neutral-900 text-base font-bold font-['Roboto'] uppercase">Давай поговорим</h3>
                        <svg
                            className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 hover:rotate-[-45deg] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                        </svg>
                    </button>
                </Link>
            </div>
            <SliderSVG/>
        </div>
    );
};

export default Title;