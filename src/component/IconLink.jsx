import PropTypes from "prop-types";
import "./IconLink.css";

function IconLink({ image, link }) {
  return (
    <a href={link} className="iconLink">
      <img src={image} alt="img" />
    </a>
  );
}

IconLink.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default IconLink;
