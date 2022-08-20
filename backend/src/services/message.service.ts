import { stationService } from ".";
import { MessageInterface } from "../interfaces/message.interface";

/**
 * On get subscribe message
 */
const updateStationStatus = async (message: MessageInterface): Promise<any> => {
    return stationService.updateStationStatusByStationCode(message);
};

export const MessageService = {
    updateStationStatus
};