import express from "express";
import { stationController } from "../controllers";

const router = express.Router();

router
  .route("/")
  .get(stationController.getStations)
  .post(stationController.createStation);

router
  .route("/:stationId")
  .get(stationController.getStationById)
  .post(stationController.updateStation)
  .delete(stationController.deleteStation);

module.exports = router;
