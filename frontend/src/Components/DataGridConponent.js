import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

function DataGridComponent(props) {

  return (
      <DataGrid
        autoHeight
        rows={props.data}
        columns={props.columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        hideFooterSelectedRowCount
        getRowId={(row) => row._id}
        onCellClick={props.rowClick && props.rowClick}
      />
  );
}
export default DataGridComponent;
