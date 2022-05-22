import axios from "axios";

export const axi = axios.create({
  // baseURL: "https://api.apilayer.com/currency_data/",
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  headers: {
    "Content-Type": "application/json",
    apikey: "nmurQGxFXGWOsTbXMrhTJyZ7IHi3piId",
  },
});
