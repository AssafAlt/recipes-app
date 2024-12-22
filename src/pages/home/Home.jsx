import React, { useState } from "react";
import SearchBar from "../../components/ui/search/SearchBar";
import classes from "./Home.module.css";
import { useApi } from "../../hook/useApi";
import Row from "../../components/ui/recipes/row/Row";
import OverlayCard from "../../components/ui/recipes/overlay-card/OverlayCard";
import Loader from "../../components/ui/loader/Loader";
import ErrorMessage from "../../components/ui/error/ErrorMessage";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [chosenId, setChosenId] = useState(null);
  const { isLoading, errorMessage, fetchBySearch } = useApi();

  const onSearch = async (query) => {
    const res = await fetchBySearch(query);
    setRecipes(res?.recipes || []);
  };

  return (
    <div className={classes.homeContainer}>
      <div className={classes.inner}>
        <SearchBar onSearch={onSearch} />
      </div>
      {isLoading && <Loader />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {recipes?.length > 0 && (
        <Row recipes={recipes} setChosenId={setChosenId} />
      )}
      {chosenId && (
        <OverlayCard recipeId={chosenId} onClose={() => setChosenId(null)} />
      )}
    </div>
  );
};

export default Home;
