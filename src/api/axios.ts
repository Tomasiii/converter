import axios from "axios";

export const axi = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  headers: {
    "Content-Type": "application/json",
    apikey: "nmurQGxFXGWOsTbXMrhTJyZ7IHi3piId",
    // apikey: "3i87yrBKXJTRQ5vg1561Rz4FhbbYX0Sp",
    //apikey: "SNleukyUmI8lfR5vcpQKKgA9NHMjceRN"
  },
});
