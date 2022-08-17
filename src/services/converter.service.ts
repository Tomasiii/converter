import { axi } from "@/api/axios";

import { ITimeframe } from "@/services/converter.types";

import { nowDate } from "@/utils/normalizeDate";

export const ConverterService = {
  async getExchangeRate(base: string, symbols: string) {
    return axi.get("latest", {
      params: {
        base,
        symbols,
      },
    });
  },

  async getTimeframeRate(base: string, symbols: string, startDate: string) {
    return axi.get<ITimeframe>("timeseries", {
      params: {
        base,
        symbols,
        start_date: startDate,
        end_date: nowDate(),
      },
    });
  },
};
