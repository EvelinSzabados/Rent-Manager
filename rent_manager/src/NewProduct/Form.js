import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30vw",
    },
    formControl: {
      margin: theme.spacing(3),
      width: 400,
      padding: "1rem",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Form() {
  const classes = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll("#outlined-required");

    for (let input of inputs) {
      console.log(input.value);
    }
    const category = document.querySelector("#category-select");
    console.log(category.value);
  }

  return (
    <React.Fragment>
      <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            placeholder="Name"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Price"
            placeholder="Price"
            variant="outlined"
          />
        </div>

        <Button
          label="Submit"
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: "1rem" }}
        >
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
}
