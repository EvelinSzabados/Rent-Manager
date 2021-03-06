import React, { useState, useContext } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from "@material-ui/core/Button";
import { AvailableProductContext } from "../context/AvailableProductContext";
import { CustomerContext } from "../context/CustomerContext";
import { addRentValidation } from "./AddRent";
import { DateContainer, DatePicker } from "../Styles/RentStyle";
import { ProductContext } from "../context/ProductContext";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


export default function NewRent() {
  const { availableProduct } = useContext(AvailableProductContext);
  const { product, setProduct } = useContext(ProductContext);
  const { customer } = useContext(CustomerContext);
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectProduct, setSelectProduct] = useState(null);
  const [selectCustomer, setSelectCustomer] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let newProductList = [...product]
    newProductList.map(prod => {
      selectProduct.map(selectProd => {
        if (prod.id === selectProd.id) {
          prod.status.id = 2;
          prod.status.name = 'Rented';
        }
      })

    })
    setProduct(newProductList);

    let valid = addRentValidation(selectProduct, selectCustomer);
    if (valid) {
      setIsSubmitted(true)

    }


  }

  return (
    <form onSubmit={handleSubmit} id="rent-form" key={isSubmitted}>
      <h1 style={{ margin: '2rem 1rem' }}>Create new rent</h1>
      <p id="required" style={{ display: 'none', color: 'red' }}>* Please fill out every field!</p>

      <Autocomplete

        onChange={(event, value) => setSelectProduct(value)}
        multiple
        id="product-select"
        options={availableProduct}
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
        style={{ width: '31rem', margin: '1rem' }}
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
        style={{ width: '31rem', margin: '1rem' }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Customers" placeholder="Select a customer" />
        )}
      />
      <div>
        <DateContainer>
          <p>Select start date:</p>
          <DatePicker id="start-date" type="date" />
        </DateContainer>

      </div>
      <div>
        <DateContainer>

          <p>Select end date:</p>
          <DatePicker id="end-date" type="date" />
        </DateContainer>
      </div>
      <Button label="Submit" type="submit" variant="contained" color="primary" style={{ margin: "1rem" }}>
        Submit
        </Button>

    </form >
  );
}

