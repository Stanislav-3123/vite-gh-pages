import {Link} from "react-scroll";

export const WriteToUsButton = ({setIsOpen}: any) => {
    return (
        <Link to={'contactForm'} offset={-200} smooth={true} duration={900} onClick={() => setIsOpen(true)}
              className="black_button">
            Есть вопросы?
        </Link>
    )
};