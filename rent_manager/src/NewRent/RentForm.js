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
  @media (max-width: 600px) {
    width: 80vw;
  }
`;

const Label = styled.p`
  margin: 0 1rem;
  color: steelblue;
  @media (max-width: 600px) {
    width: 80vw;
  }
`;

const DateContainer = styled.div`
  margin: 1rem;
`;

const Date = styled.input`
  width: 30vw;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media (max-width: 600px) {
    width: 80vw;
  }
`;

export default function Form() {
  const classes = useStyles();

  function handleSubmit(event) {
    event.preventDefault();
    const productSelect = document.querySelector("#product-select");
    for (let option of productSelect.options) {
      if (option.selected) {
        console.log(option.value);
      }
    }

    const customerSelect = document.querySelector("#customer-select");
    console.log(customerSelect.value);
    const endDate = document.querySelector("#end-date");
    console.log(endDate.value);
  }

  return (
    <React.Fragment>
      <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
        <div>
          <Label>Select products (Ctrl + click):</Label>
          <Select multiple id="product-select">
            <option value="product1">product1</option>
            <option value="product2">product2</option>
            <option value="product3">product3</option>
            <option value="product4">product4</option>
          </Select>
          <div>
            <Label>Select customer</Label>
            <Select id="customer-select">
              <option value="customer1">customer1</option>
              <option value="customer2">customer2</option>
              <option value="customer3">customer3</option>
              <option value="customer4">customer4</option>
            </Select>
          </div>
          <DateContainer>
            <p>Select end date:</p>
            <Date id="end-date" type="date" />
          </DateContainer>
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
