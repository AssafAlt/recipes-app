import React from "react";
import classes from "./Card.module.css";

const Card = ({ recipe, setChosenId }) => {
  return (
    <div className={classes.card} onClick={() => setChosenId(recipe.id)}>
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className={classes.cardImage}
      />
      <div className={classes.cardContent}>
        <h3 className={classes.cardTitle}>{recipe.title}</h3>
        <p className={classes.cardPublisher}>{recipe.publisher}</p>
      </div>
    </div>
  );
};

export default React.memo(Card);
