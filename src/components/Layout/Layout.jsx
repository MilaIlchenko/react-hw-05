import Navigation from "../Navigation/Navigation";
import css from "../../components/Layout/Layout.module.css";
export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      {children}
    </div>
  );
}