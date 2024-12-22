import React, { useEffect, useState } from "react";
import classes from "./OverlayCard.module.css"; // Import the CSS module
import { useApi } from "../../../../hook/useApi";
import Loader from "../../loader/Loader";
import ErrorMessage from "../../error/ErrorMessage";

const OverlayCard = ({ recipeId, onClose }) => {
  const [recipe, setRecipe] = useState();
  const { fetchById, errorMessage, isLoading } = useApi();

  const getRecipeById = async () => {
    const res = await fetchById(recipeId);
    setRecipe(res?.recipe);
  };
  useEffect(() => {
    getRecipeById();
  }, [recipeId]);

  return (
    <div className={classes.overlay}>
      {isLoading && <Loader />}
      {errorMessage && <ErrorMessage />}
      {recipe && (
        <div className={classes.card}>
          <button onClick={onClose} className={classes.closeButton}>
            X
          </button>
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className={classes.cardImage}
          />
          <div className={classes.cardContent}>
            <h2 className={classes.cardTitle}>{recipe.title}</h2>
            <div className={classes.titles}>
              <p>
                <strong>Publisher:</strong> {recipe.publisher}
              </p>
              <p>
                <strong>Servings:</strong> {recipe.servings}
              </p>
              <p>
                <strong>Cooking Time:</strong> {recipe.cooking_time} minutes
              </p>
            </div>

            <h3>Ingredients:</h3>
            <ul className={classes.ingredientList}>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.quantity && ingredient.unit
                    ? `${ingredient.quantity} ${ingredient.unit} ${ingredient.description}`
                    : ingredient.description}
                </li>
              ))}
            </ul>

            <a
              href={recipe.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.recipeLink}
            >
              View Full Recipe
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverlayCard;
