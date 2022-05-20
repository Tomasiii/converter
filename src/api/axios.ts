import axios from "axios";

export const axi = axios.create({
  baseURL: "https://api.apilayer.com/currency_data/",
  headers: {
    "Content-Type": "application/json",
    apikey: "dW7taNA8W1PAVqhLaHZ6IWlkkG67nufP",
  },
});
