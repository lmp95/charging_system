import { ObjectId } from "mongoose";
import { StationInterface } from "../interfaces/station.interface";
import { Station } from "../models";

/**
 * Get station list
 * @returns {Promise<StationInterface[]>}
 */
const getStations = async (): Promise<StationInterface[]> => {
    return await Station.find();
};

/**
 * Create station
 * @param {StationInterface} data
 * @returns {Promise<StationInterface>}
 */
const createStation = async (data: StationInterface): Promise<StationInterface> => {
    data = { ...data, createdDate: new Date(), updatedDate: new Date() }
    return Station.create(data);
};

/**
 * Get station by id
 * @param {ObjectId} stationId
 * @returns {Promise<StationInterface>}
 */
const getStationById = async (stationId: string) => {
    return Station.findById(stationId);
};

/**
 * Update station by Id
 * @param {StationInterface} data
 * @returns {Promise<StationInterface>}
 */
const updateStation = async (stationId: string, data: StationInterface): Promise<StationInterface> => {
    const station = await getStationById(stationId);
    if (station) {
        const updatedStation = Station.findOneAndUpdate({ _id: station.id }, data);
        return updatedStation;
    }
};

/**
 * Delete station by id
 * @param {ObjectId} stationId
 * @returns {Promise<User>}
 */
const deleteStationById = async (stationId: string) => {
    const station = await getStationById(stationId);
    if (!station) {
        console.log("delete fail");
    }
    await station.remove();
    return station;
};

export const StationService = {
    getStations,
    createStation,
    updateStation,
    deleteStationById
};