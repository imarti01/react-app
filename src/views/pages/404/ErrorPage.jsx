import { Link } from "react-router-dom";
import "./ErrorPage.scss";

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <h3>Error code: 404</h3>
      <h2>Page not found...</h2>
      <Link to="/">Go to Main Page</Link>
    </div>
  );
};
