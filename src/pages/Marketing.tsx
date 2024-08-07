import Title from "../components/Title/Title";
import YouTube from 'react-youtube';
const Video = () => {
    return <div className={"h-fit flex"}>
        <YouTube videoId="EMGUo2jdzfM"/>
    </div>
}
const Marketing = () => {
    return (
        <div
            className="sm:pt-[120px] pt-[100px] inline-flex flex-col gap-12 justify-start overflow-y-hidden sm:overflow-y-visible items-center w-full">
            <Title title={"Презентация маркетинг-плана"} className={"text-xl font-bold"}/>
            <Video/>
        </div>
    );
};

export default Marketing;