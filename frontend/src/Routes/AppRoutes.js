import { Route, Routes } from "react-router-dom";
import Main from "../Pages/Main";
import StationList from "../Pages/StationList";
import VirtualStations from "../Pages/VirtualStations";

export const AppRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/chargingStation" element={<StationList />} />
      <Route exact path="/stations" element={<VirtualStations />} />
    </Routes>
  );
};
