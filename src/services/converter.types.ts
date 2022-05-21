export interface ITimeframe {
  end_date: Date;
  quotes: { [key: string]: Quote };
  source: string;
  start_date: Date;
  success: boolean;
  timeframe: boolean;
}

export interface Quote {
  USDUAH: number;
}
