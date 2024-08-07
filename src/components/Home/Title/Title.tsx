import Title from "../../Title/Title";
import LetsTalk from "../../Buttons/LetsTalk";

const MobileTitle = () => {


    return (
        <div
            className="overflow-y-hidden w-full mb:h-full h-[587pxpx] sm:hidden flex-col justify-start gap-4 items-start inline-flex">
            <div className="w-full">
                <Title title={"Магний"}
                       className={"text-[#774cb4] text-5xl font-bold font-['Syncopate'] uppercase text-start px-4 animate-jump-in animate-once animate-duration-700 animate-delay-0 animate-ease-in"}/>
                <Title title={"Водород"}
                       className={"text-[#8a3d67] text-5xl font-bold font-['Syncopate'] uppercase text-end px-4 animate-jump-in animate-once animate-duration-700 animate-delay-0 animate-ease-in"}/>
            </div>
            <Title
                title={"Работаем для здоровья и долголитея"}
                className={"text-[#774cb4] font-bold px-4 animate-fade animate-fill-backwards animate-once animate-duration-700 animate-delay-[300ms] animate-ease-in"}/>
            <Title
                title={"Превосходные антиоксидантные действия Н2 были впервые обнаружены и доказаны в 2007 году японскими учеными. Рядом исследований было доказано, что водород оказывает мощное терапевтическое воздействие на весь организм\n" +
                    "                человека."}
                className={"text-black font-bold px-4 animate-fade animate-fill-backwards animate-once animate-duration-700 animate-delay-[300ms]" +
                    " animate-ease-in"}/>
            <LetsTalk href={"https://t.me/+dQuOaiWiIrUyNDli"}/>

        </div>
    );
};

export default MobileTitle;