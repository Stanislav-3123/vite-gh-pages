
type TitlePropsType = {
    title: string
    className: string
}
export const Title = ({title, className}: TitlePropsType) => {
    return <div className={className}>
        {title}
        </div>
};

export default Title;