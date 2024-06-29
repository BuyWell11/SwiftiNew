import { jsx as _jsx } from "react/jsx-runtime";
import "../styles/components/IconLink.css";
function IconLink({ image, link }) {
    return (_jsx("a", { href: link, className: "iconLink", target: "_blank", rel: "noreferrer", children: _jsx("img", { src: image, alt: "img" }) }));
}
export default IconLink;
