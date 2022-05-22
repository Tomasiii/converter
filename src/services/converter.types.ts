export interface ITimeframe {
  end_date: Date;
  rates: { [key: string]: Quote };
  base: string;
  start_date: Date;
  success: boolean;
  timeframe: boolean;
}

export interface Quote {
  UAH: number;
}
