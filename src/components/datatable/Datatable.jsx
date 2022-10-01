import React from "react";
import "./Datatable.scss";
import { motion } from "framer-motion";

import { DataGrid } from "@mui/x-data-grid";

import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/users/1">
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="viewButton caView"
              >
                View
              </motion.div>
            </Link>
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="viewButton caDelete"
            >
              Delete
            </motion.div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <span>Add New User</span>
        <Link className="link" to="/users/new">
          <AddIcon className="icon" />
          <span>Add New</span>
        </Link>
      </div>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          sx={{ fontSize: "1.4rem" }}
          className="dataGrid"
        />
      </div>
    </div>
  );
};

export default Datatable;
