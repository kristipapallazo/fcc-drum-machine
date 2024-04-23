import classes from "./AuthorLabel.module.css";

const AuthorLabel = () => {
  return (
    <p id={classes.container}>
      by <span id={classes.name}>{/* papallazo */}</span>
    </p>
  );
};

export default AuthorLabel;
