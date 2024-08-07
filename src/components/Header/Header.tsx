import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";


const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})
const Header = () => {
    return (
        <header className="mt-[8px] mx-auto max-w-[1440px] border border-white hidden sm:block bg-blue-100 bg-opacity-20 backdrop-blur-[30px]
        rounded-[100px] fixed top-0 w-full z-40 px-8 py-4">
            <nav className="flex flex-row items-center w-full justify-between">
                <div className="flex gap-4">
                    <NavLink to={'/products'} onClick={scrollToTop} className="header_link">
                        Контакты
                    </NavLink>
                    <NavLink to={'/products'} onClick={scrollToTop} className="header_link">
                        Продукция
                    </NavLink>
                    <NavLink to={'/marketing'} onClick={scrollToTop} className="header_link">
                        Маркетинг
                    </NavLink>
                </div>
                <NavLink to={'/'} onClick={scrollToTop}
                         className="cursor-pointer w-[170.58px] h-14 bg-[url('/images/dandelion_logo_color.png')] bg-center bg-cover "/>
                <Link to={'contactForm'} offset={-320} smooth={true} duration={900}
                      className="black_button whitespace-nowrap sm:w-[163px]">
                    Напиши нам
                </Link>
            </nav>
        </header>
    );
};

export default Header;

