import axios from "axios";

export const axi = axios.create({
  // baseURL: "https://api.apilayer.com/currency_data/",
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  headers: {
    "Content-Type": "application/json",
    // apikey: "3i87yrBKXJTRQ5vg1561Rz4FhbbYX0Sp",
    // SNleukyUmI8lfR5vcpQKKgA9NHMjceRN - Vlad
  },
});
