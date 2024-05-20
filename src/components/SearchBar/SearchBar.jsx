import css from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmite = (e) => {
    e.preventDefault();
    const form = e.target;

    if (form.elements.query.value.trim() === "") {
      alert("Please, enter text to search");
    }
    onSubmit(form.elements.query.value.trim());
    form.reset();
  };

  return (
    <header>
      <form className={css.container} onSubmit={handleSubmite}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}