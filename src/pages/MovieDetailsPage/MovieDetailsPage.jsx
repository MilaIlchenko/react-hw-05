import { Suspense, useEffect, useState, useRef } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { getMovieId } from "../../movies-api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinkHrefRef = useRef(location.state) ?? "/movies";

  useEffect(() => {
    async function fetchMovieInfo() {
      try {
        setIsLoading(true);
        const data = await getMovieId(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieInfo();
  }, [movieId]);

  return (
    <>
      <Link className={css.link} to={backLinkHrefRef.current}>
        Go back
      </Link>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}

      {movie && <MovieInfo movie={movie} />}

      <p className={css.text}>Addition information</p>
      <ul className={css.list}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}