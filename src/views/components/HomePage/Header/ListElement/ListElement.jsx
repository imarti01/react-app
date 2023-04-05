import { Link } from "react-router-dom";

export const ListElement = ({ text, link }) => {
  return (
    <li>
      <Link to={link}>{text}</Link>
    </li>
  );
};
