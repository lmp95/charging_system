import { IconButton, Switch } from "@mui/material";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import axiosDefault from "../Configs/axios.config";

export const generateColumn = (
  object,
  setSelectedData,
  setOpenFormDialog,
  setOpenDeleteDialog,
  setLoading
) => {
  let columns = [];
  for (let i = 0; i < object.length; i++) {
    const name = object[i].replace("_", "");
    let column = {
      field: object[i],
      headerName: name.charAt(0).toUpperCase() + name.slice(1),
      flex: 1,
    };
    columns.push(column);
  }
  columns.push({
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell: (params) => {
      const handleDelete = (e) => {
        e.stopPropagation();
        setSelectedData(params.row);
        setOpenDeleteDialog(true);
      };

      const handleEdit = (e) => {
        e.stopPropagation();
        setSelectedData(params.row);
        setOpenFormDialog(true);
      };

      return (
        <div>
          <IconButton color="primary" size="small" onClick={handleEdit}>
            <MdModeEdit />
          </IconButton>
          <IconButton color="primary" size="small" onClick={handleDelete}>
            <MdOutlineDeleteOutline />
          </IconButton>
        </div>
      );
    },
  });
  columns.push({
    field: "maintenance",
    headerName: "Maintenance",
    flex: 1,
    renderCell: (params) => {
      const handleMaintenanceMode = (e) => {
        e.stopPropagation();
        axiosDefault
          .post("/station/" + params.row._id, {
            status: params.row.status == "Maintenance" ? "Idle" : "Maintenance",
          })
          .then((response) => {
            setLoading(true);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      return (
        <div>
          <Switch
            // disabled={params.row.status === "Maintenance" ? true : false}
            defaultChecked={params.row.status === "Maintenance" ? true : false}
            onChange={handleMaintenanceMode}
          />
        </div>
      );
    },
  });
  return columns;
};
