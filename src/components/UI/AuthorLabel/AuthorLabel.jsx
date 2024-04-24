import classes from "./AuthorLabel.module.css";

const AuthorLabel = () => {
  return (
    <p className={classes.container}>
      by <span className={classes.name}>papallazo</span>
    </p>
  );
};

export default AuthorLabel;
