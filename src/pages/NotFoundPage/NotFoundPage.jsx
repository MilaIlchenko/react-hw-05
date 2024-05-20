import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.text}>
      <p>Page not found!</p>
      <p>
        Please visit out <Link to="/">Home page</Link>
      </p>
    </div>
  );
}