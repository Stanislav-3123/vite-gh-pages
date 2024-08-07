import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import {WriteToUsButton} from "../Buttons/WriteToUsButton.tsx";


const MobileHeader = () => {


    const [isOpen, setIsOpen] = useState(true);
    const handleClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        setIsOpen(true);
    }
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return (
        <>
            {
                isOpen ?
                    <div className="mobile_header">
                        <Link to={"/"}>
                            <div onClick={scrollToTop}
                                 className="ml-4  w-[170.58px] h-12 bg-[url('/images/dandelion_logo_color.png')] bg-contain bg-no-repeat"/>
                        </Link>
                        <div onClick={() => setIsOpen(false)}
                             className=" w-14 h-14 p-4 rounded-[20px] justify-center items-center flex">

                            <div
                                className="w-6 h-6 relative bg-[url('/images/systemIcons/menu.svg')] bg-center bg-cover"/>
                        </div>
                    </div>
                    :
                    <div className="fixed w-full h-full z-40 bg-black bg-opacity-40">
                        <div
                            className="absolute right-0 px-4 py-4 animate-open-mobile-menu z-40 w-4/5 self-end h-full
                             bg-white rounded-tl-[40px] rounded-bl-[40px] flex-col justify-between items-start inline-flex">
                            <div className="h-full flex flex-col justify-between">
                                <div className="w-full flex flex-col gap-8">
                                    <div
                                        className="hover:bg-white duration-300 w-14 h-14 p-4 bg-blue-100 rounded-[40px]
                                         absolute top-[8px] right-[8px] justify-start items-start flex flex-col">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             className="rotate-45"
                                             onClick={() => setIsOpen(true)}
                                             viewBox="0 0 24 24">
                                            <path fill="#000" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"/>
                                        </svg>
                                    </div>
                                    <Link to={'/'} onClick={handleClick}
                                          className="w-[170.58px] h-12 bg-[url('/images/dandelion_logo_color.png')] bg-contain bg-no-repeat"/>
                                    <div className="flex flex-col gap-4">
                                        {/*<NavLink */}
                                        {/*         to={"/"} className="navbar_link">Продукция</NavLink>*/}
                                        {/*<NavLink onClick={() => setIsOpen(true)}*/}
                                        {/*         to={"/"} className="navbar_link">Бизнес</NavLink>*/}
                                        {/*<NavLink onClick={() => setIsOpen(true)}*/}
                                        {/*         to={"/"} className="navbar_link">Контакты</NavLink>*/}
                                        <NavLink onClick={() => setIsOpen(true)} to={"/products"}
                                                 className={"navbar_link"}>Продукция</NavLink>
                                        <a href={"https://t.me/+OhjNjl2EmpUxZDAy"} className={"navbar_link"}>Бизнес</a>
                                        <NavLink onClick={() => setIsOpen(true)} to={"/marketing"}
                                                 className={"navbar_link"}>маркетинг</NavLink>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full gap-8">
                                    <div
                                        className="flex flex-col gap-4 py-8 border-t-[2px] border-b-[2px] border-slate-300">
                                        <p className="navbar_p">Контакты:</p>
                                        <p className="navbar_p">+7 988 542 22 60</p>
                                        <a href={"https://t.me/shilyamchik1981"} className="navbar_p">Telegram</a>
                                        <a href={"https://wa.me/79885422260"} className="navbar_p">WhatsUp</a>
                                        <a className="navbar_p">Instagram</a>
                                        <a href={"https://t.me/techH2suppotr"} className="navbar_p">Tex-поддержка</a>

                                    </div>
                                    <WriteToUsButton setIsOpen={() => setIsOpen(true)}/>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default MobileHeader;

