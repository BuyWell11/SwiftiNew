import "./IconLink.css";

interface Props {
    image: string;
    link: string;
}

function IconLink({image, link}: Props) {
    return (
        <a href={link} className="iconLink">
            <img src={image} alt="img"/>
        </a>
    );
}

export default IconLink;
