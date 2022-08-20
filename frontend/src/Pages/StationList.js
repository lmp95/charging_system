import React, { useEffect, useState } from "react";
import { generateColumn } from "../Common/common.functions";
import DataGridComponent from "../Components/DataGridConponent";
import axiosDefault from "../Configs/axios.config";
import Button from "@mui/material/Button";
import { MdAdd, MdOutlineWorkspaces } from "react-icons/md";
import DialogComponent from "../Components/DialogComponent";
import AlertDialogComponent from "../Components/AlertDialogComponent";

function StationList() {
  const [stations, setStations] = useState(null);
  const [columns, setColumns] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState(null);
  const [alertDialog, setAlertDialog] = useState(false);

  useEffect(() => {
    axiosDefault
      .get("/station/")
      .then((response) => {
        setStations(response.data);
        if (response.data.length > 0) {
          const obj = Object.keys(response.data[0]);
          setColumns(
            generateColumn(
              obj,
              setSelectedData,
              setDialog,
              setAlertDialog,
              setLoading
            )
          );
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loading]);

  const openDialogHandler = () => {
    setSelectedData(null);
    setDialog(true);
  };

  const closeDialogHandler = () => {
    setDialog(false);
  };

  const closeAlertDialogHandler = () => {
    setAlertDialog(false);
  };

  return (
    <>
      <div className="grid-header">
        <h1>Station List</h1>
        <Button
          disableElevation
          variant="outlined"
          startIcon={<MdAdd />}
          onClick={openDialogHandler}
          className={"grid-row-action-btn"}
        >
          Add
        </Button>
      </div>
      {loading ? (
        <MdOutlineWorkspaces className="loader" />
      ) : (
        <DataGridComponent data={stations} columns={columns} />
      )}
      <DialogComponent
        setLoading={setLoading}
        open={dialog}
        data={selectedData}
        closeHandler={closeDialogHandler}
      />
      <AlertDialogComponent
        setLoading={setLoading}
        open={alertDialog}
        closeHandler={closeAlertDialogHandler}
        data={selectedData && selectedData}
      />
    </>
  );
}

export default StationList;
