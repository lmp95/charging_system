import { IconButton } from "@mui/material";
import { MdModeEdit, MdOutlineDeleteOutline } from "react-icons/md";

export const generateColumn = (object, setSelectedData, setOpenFormDialog, setOpenDeleteDialog) => {
    let columns = [];
    for (let i = 0; i < object.length; i++) {
      const name = object[i].replace('_', '');
      let column = {
        field: object[i],
        headerName: name.charAt(0).toUpperCase() + name.slice(1),
        flex: 1,
      };
      columns.push(column);
    };
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
            <IconButton color='primary' size='small' onClick={handleEdit}>
              <MdModeEdit />
            </IconButton>
            <IconButton color='primary' size='small' onClick={handleDelete}>
              <MdOutlineDeleteOutline />
            </IconButton>
          </div>
        );
      },
    });
    return columns;
}