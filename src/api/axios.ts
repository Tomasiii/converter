import axios from "axios";

export const axi = axios.create({
  baseURL: "https://api.apilayer.com/currency_data/",
  headers: {
    "Content-Type": "application/json",
    apikey: "4peuY0KJPNZxfeSi03K8kokGZEowHogI",
  },
});
