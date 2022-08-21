export interface InvoiceInterface {
  transactionNo: string;
  totalAmount: number;
  chargingTotalTime: number;
  startTime: Date;
  endTime: Date;
  status: String;
  stationCode: number;
}
