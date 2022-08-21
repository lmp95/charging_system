import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axiosDefault from "../Configs/axios.config";

function CardComponent(props) {
  const [isChange, setIsChange] = useState(false);
  const [station, setStation] = useState(props.data);
  const sendMessage = (status) => {
    let params;
    if (status === "Idle") {
      params = {
        stationCode: props.data.stationCode,
        status: "Charging",
      };
    } else {
      params = {
        stationCode: props.data.stationCode,
        status: "Idle",
      };
    }
    axiosDefault
      .post("/message/", params)
      .then((response) => {
        setIsChange(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      axiosDefault
        .get(`/station/${station._id}`)
        .then((response) => {
          setIsChange(false);
          setStation(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  }, [isChange]);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {station.stationName} + {station.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          disabled={station.status === "Maintenance" && true}
          onClick={() => sendMessage(station.status)}
        >
          {station.status === "Idle" || station.status === "Maintenance"
            ? "Start Charging"
            : "Stop Charging"}
        </Button>
        {/* <Button size="small">View Invoice</Button> */}
      </CardActions>
    </Card>
  );
}

export default CardComponent;
