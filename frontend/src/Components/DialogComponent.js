import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { MdClear } from "react-icons/md";
import StationForm from "./StationForm";

function DialogComponent(props) {
  return (
    <Dialog open={props.open}>
      <DialogTitle className="dialog-title">
        {props.data ? <p>Update</p> : <p>Add New</p>}
        <IconButton onClick={props.closeHandler}>
          <MdClear />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <StationForm
          setLoading={props.setLoading}
          dialogClose={props.closeHandler}
          formData={props.data}
        />
      </DialogContent>
    </Dialog>
  );
}

export default DialogComponent;
