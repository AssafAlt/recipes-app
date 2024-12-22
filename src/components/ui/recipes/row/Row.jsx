import React from "react";

import classes from "./Row.module.css";
import Card from "../card/Card";

const Row = ({ recipes, setChosenId }) => {
  return (
    <div className={classes.row}>
      {recipes.map((r) => (
        <Card key={r.id} recipe={r} setChosenId={setChosenId} />
      ))}
    </div>
  );
};

export default React.memo(Row);
