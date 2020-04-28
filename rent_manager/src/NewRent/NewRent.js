import React, { useState, createContext, useEffect, useContext } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from "@material-ui/core/Button";
import { ProductContext } from "../context/ProductContext";
import { CustomerContext } from "../context/CustomerContext";
import styled from "styled-components";
import FormControl from '@material-ui/core/FormControl';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Date = styled.input`
 
  width: 30vw;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  @media (max-width: 600px) {
    width: 80vw;
  }
`;
const DateContainer = styled.div`
  margin: 1rem;
`;

export default function NewRent() {
  const { product } = useContext(ProductContext);
  const { customer } = useContext(CustomerContext);
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectProduct, setSelectProduct] = useState(null);
  const [selectCustomer, setSelectCustomer] = useState(null);



  function handleSubmit(event) {
    event.preventDefault();
    const required = document.querySelector('#required');
    const endDate = document.querySelector("#end-date");
    const startDate = document.querySelector("#start-date");
    const productSelect = document.querySelector('#product-select');
    const customerSelect = document.querySelector('#customer-select');

    if (selectProduct != null && selectCustomer != null && startDate.value != '' && endDate.value != '') {
      const rentForm = document.querySelector('#rent-form');
      rentForm.reset();
      setIsSubmitted(true)
      required.style.display = 'none'
    } else {
      required.style.display = 'block'

    }

  }

  return (
    <form onSubmit={handleSubmit} id="rent-form" key={isSubmitted}>
      <p id="required" style={{ display: 'none', color: 'red' }}>* Please fill out every field!</p>

      <Autocomplete

        onChange={(event, value) => setSelectProduct(value)}
        multiple
        id="product-select"
        options={product}
        disableCloseOnSelect
        clearOnEscape
        getOptionLabel={(option) => option.name + " (" + option.id + ")"}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name + " (" + option.id + ")"}
          </React.Fragment>
        )}
        style={{ width: 500, margin: '1rem' }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Products" id="product-field" placeholder="Select products" />
        )}
      />

      <Autocomplete

        onChange={(event, value) => setSelectCustomer(value)}
        id="customer-select"
        options={customer}
        getOptionLabel={(option) => option.first_name + " " + option.last_name}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            {option.first_name + " " + option.last_name}
          </React.Fragment>
        )}
        style={{ width: 500, margin: '1rem' }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Customers" placeholder="Select a customer" />
        )}
      />
      <div>
        <DateContainer>
          <p>Select start date:</p>
          <Date id="start-date" type="date" />
        </DateContainer>

      </div>
      <div>
        <DateContainer>

          <p>Select end date:</p>
          <Date id="end-date" type="date" />
        </DateContainer>
      </div>
      <Button label="Submit" type="submit" variant="contained" color="primary" style={{ margin: "1rem" }}>
        Submit
        </Button>

    </form>
  );
}

