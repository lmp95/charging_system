import { stationService } from '../services';
import { Request, Response } from 'express';

const getStations = async (req: Request, res: Response) => {
  const result = await stationService.getStations();
  res.send(result);
};

const createStation = async (req: Request, res: Response) => {
  try {
    const station = await stationService.createStation(req.body);
    res.send(station);
  } catch (error) {
    res.status(400).send({ message: "Fail to create" });
  }
};

const updateStation = async (req: Request, res: Response) => {
  await stationService.updateStation(req.params.stationId, req.body);
  res.send();
};

const deleteStation = async (req: Request, res: Response) => {
  await stationService.deleteStationById(req.params.stationId);
  res.send();
};

export const StationController = {
  getStations,
  createStation,
  updateStation,
  deleteStation
};