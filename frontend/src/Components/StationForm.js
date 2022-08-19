import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axiosDefault from "../Configs/axios.config";

function StationForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitCreate = (data) => {
    axiosDefault
      .post("/station/", data)
      .then((response) => {
        props.dialogClose();
        props.setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSubmitUpdate = (data) => {
    axiosDefault
      .post("/station/" + props.formData._id, data)
      .then((response) => {
        props.dialogClose();
        props.setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (props.formData) {
    return (
      <form
        className="form-fields-container"
        component="form"
        onSubmit={handleSubmit(onSubmitUpdate)}
      >
        <TextField
          id="stationName"
          label="Station Name"
          variant="outlined"
          className="form-text-field"
          defaultValue={props.formData.stationName}
          {...register("stationName", {
            required: "Required",
            message: "Required",
          })}
          error={!!errors?.stationName}
          helperText={errors?.stationName ? errors.stationName.message : null}
        />
        <TextField
          id="stationCode"
          label="Station Code"
          variant="outlined"
          className="form-text-field"
          defaultValue={props.formData.stationCode}
          {...register("stationCode", {
            required: "Required",
            message: "Required",
            pattern: {
              value: /^[0-9]*$/,
              message: "Must be numbers",
            },
          })}
          error={!!errors?.stationCode}
          helperText={errors?.stationCode ? errors.stationCode.message : null}
        />
        <TextField
          id="channel"
          label="Channel"
          type="string"
          variant="outlined"
          className="form-text-field"
          defaultValue={props.formData.channel}
          {...register("channel", {
            required: "Required",
            message: "Required",
          })}
          error={!!errors?.channel}
          helperText={errors?.channel ? errors.channel.message : null}
        />
        <Button
          variant="contained"
          disableElevation
          className="btn-default primary-btn"
          type="submit"
        >
          UPDATE
        </Button>
      </form>
    );
  } else
    return (
      <form
        className="form-fields-container"
        component="form"
        onSubmit={handleSubmit(onSubmitCreate)}
      >
        <TextField
          id="stationName"
          label="Station Name"
          variant="outlined"
          className="form-text-field"
          {...register("stationName", {
            required: "Required",
            message: "Required",
          })}
          error={!!errors?.stationName}
          helperText={errors?.stationName ? errors.stationName.message : null}
        />
        <TextField
          id="stationCode"
          label="Station Code"
          variant="outlined"
          className="form-text-field"
          {...register("stationCode", {
            required: "Required",
            message: "Required",
            pattern: {
              value: /^[0-9]*$/,
              message: "Must be numbers",
            },
          })}
          error={!!errors?.stationCode}
          helperText={errors?.stationCode ? errors.stationCode.message : null}
        />
        <TextField
          id="channel"
          label="Channel"
          type="string"
          variant="outlined"
          className="form-text-field"
          {...register("channel", {
            required: "Required",
            message: "Required",
          })}
          error={!!errors?.channel}
          helperText={errors?.channel ? errors.channel.message : null}
        />
        <Button
          variant="contained"
          disableElevation
          className="btn-default primary-btn"
          type="submit"
        >
          SAVE
        </Button>
      </form>
    );
}

export default StationForm;
