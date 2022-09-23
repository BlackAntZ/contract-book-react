import classes from "./App.module.css";
import SearchBar from "./components/fast-search/SearchBar";

function App() {
  return (
    <div className={classes['main-body']}>
      <section>
        <SearchBar></SearchBar>
      </section>
    </div>
  );
}

export default App;