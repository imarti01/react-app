import { Link } from "react-router-dom";

export const ListElement = ({ text, link, className }) => {
  return (
    <li className={className}>
      <Link to={link}>{text}</Link>
    </li>
  );
};
