import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import axiosDefault from "../Configs/axios.config";

function AlertDialogComponent(props) {

    const deleteHandler = () => {
        axiosDefault.delete('/station/'+props.data._id).then((response) => {
            props.closeHandler();
            props.setLoading(true);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <Dialog open={props.open}>
            <DialogTitle>Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure to delete {props.data?.stationName}?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeHandler}>No</Button>
                <Button onClick={deleteHandler}>Yes</Button>
            </DialogActions>
        </Dialog>);
}

export default AlertDialogComponent;