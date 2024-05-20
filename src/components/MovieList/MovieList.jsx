import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={location}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}