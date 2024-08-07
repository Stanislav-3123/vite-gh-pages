import React, {useState} from "react";

const ImagesSlider = () => {
    const [isHovered1, setIsHovered1] = useState<boolean>(false)
    const [isHovered2, setIsHovered2] = useState<boolean>(false)
    const [isHovered3, setIsHovered3] = useState<boolean>(false)
    const [isHovered4, setIsHovered4] = useState<boolean>(false)

    const handleHover1 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(true)
        setIsHovered2(false)
        setIsHovered3(false)
        setIsHovered4(false)
    }
    const handleHover2 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(true)
        setIsHovered3(false)
        setIsHovered4(false)
    }
    const handleHover3 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(true)
        setIsHovered4(false)
    }
    const handleHover4 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(false)
        setIsHovered4(true)
    }
    const onMouseLeave = () => {
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(false)
        setIsHovered4(false)
    }

    return (
        <div className="overflow-y-hidden sm:overflow-y-visible">
            <div
                className="hidden self-stretch  justify-start items-start sm:inline-flex">
                <div
                    className="flex gap-2 sm:gap-8 px-4 sm:px-8">
                    <div onMouseEnter={handleHover1} onMouseLeave={onMouseLeave}
                         className="flex flex-col sm:w-[260px] hover:w-[552px] justify-end duration-[1s]
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image2.jpg')]">
                        {isHovered1 ? <div
                            className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">
                            <button className="gray_button duration-300">КОМАНДА</button>
                            <button className="gray_button duration-300">ПОДДЕРЖКА</button>
                        </div> : null}
                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-4 duration-300">
                                {isHovered1 ?
                                    <p className="animate-fade-down animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                    justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                        Unparalleled Customer Support: Your Satisfaction is Our Priority
                                    </p> : <p className="sm:w-[200px]
                                    justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                        Unparalleled Customer Support: Your Satisfaction is Our Priority
                                    </p>}
                                {isHovered1 ? <span
                                    className="animate-fade-up animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                 text-white text-sm sm:text-base font-normal font-['Roboto'] leading-snu sm:leading-relaxed">
                                Мы открыли производственные площадки в странах Америки, Европы и Азии. Над созданием эффективных экологичных продуктов работают лучшие специалисты из разных стран,
                                    задействовано передовое оборудование, используются инновационные технологии. </span> : null}
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={handleHover2} onMouseLeave={onMouseLeave}
                         className="flex flex-col sm:w-[260px] hover:w-[552px] justify-end duration-[1s]
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image1.jpg')]">
                        {isHovered2 ? <div
                            className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">
                            <button className="gray_button duration-300">INNOVATION</button>
                            <button className="gray_button duration-300">SAFETY</button>
                        </div> : null}
                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-4 duration-300">
                                {isHovered2 ?
                                    <p className="animate-fade-down animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                    justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                        Innovative Technology and Secure Platform: Play with Confidence
                                    </p> :
                                    <p className="w-[200px] justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                        Innovative Technology and Secure Platform: Play with Confidence
                                    </p>}

                                {
                                    isHovered2 ? <span
                                        className="animate-fade-up animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                 text-white text-sm sm:text-base font-normal font-['Roboto'] leading-snu sm:leading-relaxed">
                               Our company utilizes cutting-edge technology to provide a secure and reliable gambling platform. You can play with confidence,
                                    knowing that your personal information and financial transactions are protected.</span> : null
                                }
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={handleHover3} onMouseLeave={onMouseLeave}
                         className="flex flex-col sm:w-[260px] hover:w-[552px] justify-end duration-[1s]
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image3.jpg')]">
                        {isHovered3 ? <div
                            className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">
                            <button className="gray_button duration-300">BONUSES</button>
                        </div> : null}
                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-4 duration-300">
                                {isHovered3 ?
                                    <p className="animate-fade-down animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                    justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                        Attractive Bonuses and Rewards: Enjoy Our Generous Offers
                                    </p> : <p className="w-[200px] justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                        Attractive Bonuses and Rewards: Enjoy Our Generous Offers
                                    </p>}

                                {isHovered3 ? <span
                                    className="animate-fade-up animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                 text-white text-sm sm:text-base font-normal font-['Roboto'] leading-snu sm:leading-relaxed">
                                We offer attractive bonuses and rewards to our players, making your gambling experience even more enjoyable.
                                    From welcome bonuses to loyalty programs, our generous offers will keep you coming back for more.</span> : null}
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={handleHover4} onMouseLeave={onMouseLeave}
                         className="flex flex-col sm:w-[260px] hover:w-[552px] justify-end duration-[1s]
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image4.jpg')]">
                        {isHovered4 ? <div
                            className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">
                            <button className="gray_button duration-300">OPPORTUNITIES</button>
                        </div> : null}

                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-4 duration-300">
                                {isHovered4 ?
                                    <p className="animate-fade-down animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                    justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                        Exciting Games and Opportunities: Join Our Gambling Team
                                    </p> :
                                    <p className="w-[200px] justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                        Exciting Games and Opportunities: Join Our Gambling Team
                                    </p>}

                                {isHovered4 ? <span
                                    className="animate-fade-up animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                 text-white text-sm sm:text-base font-normal font-['Roboto'] leading-snu sm:leading-relaxed">
                                Our company offers a wide range of thrilling gambling games and numerous opportunities for personal growth and development.
                                    Join our team and experience the excitement of the gambling world!</span> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="sm:hidden overflow-y-hidden self-stretch h-full justify-start items-start inline-flex">
                <div className="flex gap-2 px-4">
                    <div
                        className="flex flex-col  justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image2.jpg')]">
                        <div className="flex justify-end gap-2">
                            <button className="gray_button">КОМАНДА</button>
                            <button className="gray_button">ПОДДЕРЖКА</button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-white text-xl font-semibold font-['Roboto'] leading-relaxed">
                                ПЛАНЕТА DANDELION
                            </p>
                            <span className="text-white text-lg font-normal font-['Roboto'] leading-snu">Компания открывает свои представительства во многих странах
                                по всей планете благодаря высокоэффективному продукту на основе атомарного водорода</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-between py-8 px-4 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image1.jpg')]">
                        <div className="flex justify-end gap-2">
                            <button className="gray_button">инновации</button>
                            <button className="gray_button">безопасность</button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-white text-xl font-semibold font-['Roboto'] leading-relaxed">
                                По международным стандартам
                            </p>
                            <span className="text-white text-lg font-normal font-['Roboto'] leading-snu">Мы открыли производственные площадки в странах Америки, Европы и Азии. Над созданием эффективных экологичных продуктов работают лучшие специалисты из разных стран,
                                задействовано передовое оборудование, используются инновационные технологии. </span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image3.jpg')]">
                        <div className="flex justify-end gap-2">
                            <button className="gray_button">бонусы</button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-white text-xl font-semibold font-['Roboto'] leading-relaxed">
                                Станьте партнером DANDELION, чтобы приносить здоровье каждой семье
                            </p>
                            <span className="text-white text-lg font-normal font-['Roboto'] leading-snu">Наша первостепенная цель – помочь людям наладить здоровый
                                образ жизни, сделать долголетие доступным каждому,
                                а радость и бодрость духа – естественными состояниями человека.</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image4.jpg')]">
                        <div className="flex justify-end gap-2">
                            <button className="gray_button">Возможности</button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-white text-xl font-semibold font-['Roboto'] leading-relaxed">
                                Работай во благо
                            </p>
                            <span className="text-white text-lg font-normal font-['Roboto'] leading-snu">Ваш бизнес уже создан — сетевой бизнес работает с DANDELION.
                                Партнерство с нами это возможность вести свой собственный бизнес, избегая типичных
                                предпринимательских рисков: финансовых вложений, проблем с окупаемостью, трудностей в производстве и логистике.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagesSlider;