import ImagesSlider from "../../Sliders/ImagesSlider.tsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);
    return (
        <div className="w-full flex flex-col sm:gap-16">
            <div className="w-full flex sm:flex-row flex-col">
                <div className="fc sm:justify-between sm:w-1/2">
                    <div className="p-4 sm:px-8 sm:gap-8 flex flex-row sm:flex-col justify-between">
                        <p data-aos="fade-right" data-aos-duration="500"
                           className="description_number self-start">(01)</p>
                        <h2 data-aos="fade-up" data-aos-duration="500"
                        >КОМПАНИЯ DANDELION - ЭТО</h2>
                    </div>

                </div>
                <h3 data-aos="zoom-in-up" data-aos-duration="500"
                    className="p-4 sm:px-8 sm:h-auto sm:w-1/2">
                    Инновационные натуральные продукты
                    <span className="blue_span"> для молодости, красоты, здоровья, и долголетия, на основе природных компонентов
                    </span> Компания DANDELION предлагает комплексные решения,
                    <span className="blue_span">  позволяющие максимально эффективно и разумно заботиться о здоровье.
                       </span> Наши продукты разработаны по инновационным технологиям и проверенным временем методикам лучшими в мире специалистами в нутрициологии.
                </h3>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="500"
                 className="overflow-y-hidden sm:overflow-y-visible">
                <ImagesSlider/>
            </div>
        </div>
    );
};

export default AboutUs;