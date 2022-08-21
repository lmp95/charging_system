const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
  {
    transactionNo: {
      type: String,
      required: true,
      trim: true,
    },
    totalAmount: {
      type: Number,
    },
    chargingTotalTime: {
      type: Number,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
    },
    stationCode: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const InvoiceModel = mongoose.model("Invoice", invoiceSchema);
export default InvoiceModel;
