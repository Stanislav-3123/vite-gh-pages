import Title from "../Title/Title";
type Props = {
    href: string
}
const LetsTalk = ({href}: Props) => {
    return (
        <div className="px-4">
            <a href={href}
               className="animate-flip-up animate-once animate-duration-[900ms] animate-delay-[900ms] animate-ease-in animate-fill-backwards
                    cursor-pointer bg-white bg-opacity-20 rounded-[100px] border border-white flex flex-row p-4 gap-4 w-full">
                <Title title={"Есть вопросы?"} className={"text-pink w-full self-center"}/>
                <button className="w-fit flex flex-row gap-2 whitespace-nowrap">
                    <Title title={"Давай поговорим"}
                           className={"self-center text-neutral-900 text-base font-bold font-['Roboto'] uppercase"}/>
                    <svg
                        className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 hover:rotate-[-45deg] duration-300"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                    </svg>
                </button>
            </a>
        </div>
    );
};

export default LetsTalk;