import classes from "./SearchBar.module.css";
import BigInput from "../AI/input/BigInput";
import Button from "../AI/Button/Button";

const SearchBar = props => {
  return (
    <form className={classes.form}>
      <h2>Brza pretraga</h2>
      <BigInput></BigInput>
      <Button>Trazi</Button>
      {props.children}
    </form>
  )
}

export default SearchBar;