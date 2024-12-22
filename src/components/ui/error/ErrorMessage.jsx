import React from "react";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  if (!message) return null; // Don't render if there's no message
  return <div className={classes.error}>{message}</div>;
};

export default ErrorMessage;
