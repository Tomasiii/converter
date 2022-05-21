import { axi } from "@/api/axios";

import { ITimeframe } from "@/services/converter.types";

import { nowDate } from "@/utils/normalizeDate";

export const ConverterService = {
  async getExchangeRate(source: string, currencies: string) {
    return axi.get("live", {
      params: {
        source,
        currencies,
      },
    });
  },

  async getTimeframeRate(
    source: string,
    currencies: string,
    start_date: string
  ) {
    return axi.get<ITimeframe>("timeframe", {
      params: {
        source,
        currencies,
        start_date,
        end_date: nowDate(),
      },
    });
  },
};
