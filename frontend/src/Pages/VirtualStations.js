import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardComponent from "../Components/CardComponent";
import axiosDefault from "../Configs/axios.config";

function VirtualStations() {
  const [stations, setStations] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosDefault
      .get("/station/")
      .then((response) => {
        setStations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loading]);

  return (
    <Grid container className="grid-container" spacing={2}>
      {stations && stations.length > 0 ? (
        stations.map((station) => {
          return (
            <Grid key={station._id} item xs={3}>
              <CardComponent data={station} />
            </Grid>
          );
        })
      ) : (
        <p>No Stations</p>
      )}
    </Grid>
  );
}

export default VirtualStations;
