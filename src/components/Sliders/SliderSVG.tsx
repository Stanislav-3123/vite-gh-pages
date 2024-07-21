import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const SliderSVG = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);
    return (
        <div
            className="overflow-y-hidden self-stretch h-full justify-start items-start inline-flex">
            <div className="flex gap-2 px-4">
                <div data-aos="flip-up" data-aos-offset="140" data-aos-duration="1000" data-aos-delay="0"
                     className="px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                    <div
                        className="w-[120px] h-[120px] mx-auto bg-[url('/images/svg/balans-organizma.svg')] bg-cover"/>
                    <p className="text-sky-950 text-base text-center font-bold font-['Roboto'] leading-relaxed">Баланс
                        всего организма
                    </p>
                </div>
                <div data-aos="flip-up" data-aos-offset="140" data-aos-duration="1000" data-aos-delay="0"
                     className="px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                    <div
                        className="w-[120px] h-[120px] mx-auto bg-[url('/images/svg/sila-antioksidantov.svg')] bg-cover"/>
                    <p className="text-sky-950 text-base text-center font-bold font-['Roboto'] leading-relaxed">Ударная
                        сила антиоксидантов
                    </p>
                </div>
                <div data-aos="flip-up" data-aos-offset="140" data-aos-duration="1000" data-aos-delay="0"
                     className="px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                    <div
                        className="w-[120px] h-[120px] mx-auto bg-[url('/images/svg/obmennye-processy.svg')] bg-cover"/>
                    <p className="text-sky-950 text-base text-center font-bold font-['Roboto'] leading-relaxed">Регулирование
                        обменных процессов организма
                    </p>
                </div>
                <div data-aos="flip-up" data-aos-offset="140" data-aos-duration="1000" data-aos-delay="0"
                     className="px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                    <div
                        className="w-[120px] h-[120px] mx-auto bg-[url('/images/svg/bezopasnost-primenenija.svg')] bg-cover"/>
                    <p className="text-sky-950 text-base text-center font-bold font-['Roboto'] leading-relaxed">100% безопасность применения
                    </p>
                </div>
                <div data-aos="flip-up" data-aos-offset="140" data-aos-duration="1000" data-aos-delay="0"
                     className="px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                    <div
                        className="w-[120px] h-[120px] mx-auto bg-[url('/images/svg/protivovospalitelnoe-deystvie.svg')] bg-cover"/>
                    <p className="text-sky-950 text-base text-center font-bold font-['Roboto'] leading-relaxed">Эффективное противовоспалительное действие
                    </p>
                </div>
                <div data-aos="flip-up" data-aos-offset="140" data-aos-duration="1000" data-aos-delay="0"
                     className="px-4 w-[200px] py-[25px] flex-col rounded-[40px] bg-white justify-start items-start gap-[26px] inline-flex">
                    <div
                        className="w-[120px] h-[120px] mx-auto bg-[url('/images/svg/gmo.svg')] bg-cover"/>
                    <p className="text-sky-950 text-base text-center font-bold font-['Roboto'] leading-relaxed">Абсолютное отсутствие побочных эффектов
                    </p>
                </div>

            </div>
        </div>
    );
};

export default SliderSVG;