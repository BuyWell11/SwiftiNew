import "../styles/components/IconLink.css";

interface Props {
    image: string;
    link: string;
}

function IconLink({image, link}: Props) {
    return (
        <a href={link} className="iconLink" target="_blank" rel="noreferrer">
            <img src={image} alt="img"/>
        </a>
    );
}

export default IconLink;
