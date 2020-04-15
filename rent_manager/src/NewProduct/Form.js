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
        <div>
          <Select id="mySelect">
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="pineapple">Pineapple</option>
            <option value="banana">Banana</option>
          </Select>
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
