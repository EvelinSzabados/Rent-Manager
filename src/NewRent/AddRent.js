import { addRent, calculateCost } from "./RentDataHandler";
import { notEmpty, isBigger } from "./Validator";

export const addRentValidation = (selectProduct, selectCustomer) => {
  const required = document.querySelector("#required");
  const endDate = document.querySelector("#end-date");
  const startDate = document.querySelector("#start-date");

  if (
    notEmpty([selectProduct, selectCustomer, startDate.value, endDate.value])
  ) {
    if (isBigger(endDate.value, startDate.value)) {
      required.innerText = "* Invalid date!";
      required.style.display = "block";
    } else {
      const cost = calculateCost(selectProduct, startDate.value, endDate.value);
      let rentedProducts = selectProduct.map((product) => product.id);
      const rent = {
        customer: selectCustomer,
        cost: cost,
        start_date: startDate.value,
        endDate: endDate.value,
        rentedProducts: rentedProducts,
      };
      console.log(rent)
      addRent(rent);
      const rentForm = document.querySelector("#rent-form");
      rentForm.reset();
      return true;
    }
  } else {
    required.style.display = "block";
  }
};
