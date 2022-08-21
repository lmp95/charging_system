import { InvoiceInterface } from "../interfaces/invoice.interface";
import { MessageInterface } from "../interfaces/message.interface";
import { StationInterface } from "../interfaces/station.interface";
import { Invoice, Station } from "../models";

/**
 * Get invoice list
 * @returns {Promise<InvoiceInterface[]>}
 */
const getInvoices = async (): Promise<InvoiceInterface[]> => {
  return await Invoice.find();
};

/**
 * Create invoice
 * @param {InvoiceInterface} data
 * @returns {Promise<InvoiceInterface>}
 */
const createInvoice = async (
  stationCode: number
): Promise<InvoiceInterface> => {
  const existInvoice = await findInvoiceByStationCode(stationCode);
  if (!existInvoice) {
    const invoice: InvoiceInterface = {
      transactionNo: new Date().getTime().toString(),
      totalAmount: null,
      chargingTotalTime: null,
      endTime: null,
      startTime: new Date(),
      status: "Ongoing",
      stationCode: stationCode,
    };
    return await Invoice.create(invoice);
  }
  return;
};

const findInvoiceByStationCode = async (
  stationCode: number
): Promise<InvoiceInterface> => {
  return await Invoice.findOne({
    stationCode: stationCode,
    status: "Ongoing",
  });
};

/**
 * Update invoice by Id
 * @param {InvoiceInterface} data
 * @returns {Promise<InvoiceInterface>}
 */
const updateInvoice = async (
  stationCode: number
): Promise<InvoiceInterface> => {
  const invoice = await findInvoiceByStationCode(stationCode);
  const endedTime = new Date();
  if (invoice) {
    const getTotalMins = Math.round(
      (endedTime.getTime() - invoice.startTime.getTime()) / 60 / 1000
    );
    const total = Math.round(getTotalMins * 2);
    return await Invoice.findOneAndUpdate(
      { transactionNo: invoice.transactionNo },
      {
        endTime: endedTime,
        chargingTotalTime: getTotalMins,
        totalAmount: total,
        status: "Completed",
      }
    );
  }
};

export const InvoiceService = {
  createInvoice,
  getInvoices,
  updateInvoice,
};
