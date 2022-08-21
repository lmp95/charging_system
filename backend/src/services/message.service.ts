import { invoiceService, stationService } from ".";
import { MessageInterface } from "../interfaces/message.interface";

/**
 * On get subscribe message
 */
const updateStationStatus = async (message: MessageInterface): Promise<any> => {
  const station = await stationService.updateStationStatusByStationCode(
    message
  );
  switch (message.status) {
    case "Charging":
      await invoiceService.createInvoice(message.stationCode);
      break;
    case "Idle":
      await invoiceService.updateInvoice(message.stationCode);
      break;
    default:
      break;
  }
  return station;
};

export const MessageService = {
  updateStationStatus,
};
