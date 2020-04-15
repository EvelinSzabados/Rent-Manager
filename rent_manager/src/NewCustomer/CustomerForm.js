import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "30vw",
      "@media (max-width:600px)": {
        width: "80vw",
      },
    },
    formControl: {
      margin: theme.spacing(3),
      width: 400,
      padding: "1rem",
    },
  },
}));
const Select = styled.select`
  border: none;
  background-color: white;
  padding: 1rem;
  width: 30vw;
  border: 1px solid #ccc;
  margin: 1rem;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: #404040;
    cursor: pointer;
  }
`;

export default function Form() {
  const classes = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll("#outlined-required");

    for (let input of inputs) {
      console.log(input.value);
    }
    const category = document.querySelector("#mySelect");
    console.log(category.value);
  }

  return (
    <React.Fragment>
      <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <div>
          <TextField
            required
            id="outlined-required"
            label="First Name"
            placeholder="First Name"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            placeholder="Last Name"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="E-mail"
            placeholder="example@gmail.com"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Address"
            placeholder="Address"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            placeholder="+3670111222"
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
