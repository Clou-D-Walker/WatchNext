import { useState } from "react";
import s from "./styles.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
    console.log(e.target.value);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        type="text"
        className={s.input}
        value={value}
        onChange={handleChange}
        placeholder="Search a movie you may like"
      />
    </>
  );
}

export default SearchBar;
