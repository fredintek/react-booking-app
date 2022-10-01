import React from "react";
import "./TableComp.scss";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import P1 from "./../../assets/product-1.jpg";
import P2 from "./../../assets/product-2.jpg";
import P3 from "./../../assets/product-3.jpg";
import P4 from "./../../assets/product-4.jpg";
import P5 from "./../../assets/product-5.jpg";

const dataRow = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: P2,
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2233676,
    product: "Playstation 5",
    img: P1,
    customer: "Mike doe",
    date: "1 March",
    amount: 900,
    method: "Online Payment",
    status: "Pending",
  },
  {
    id: 3452451,
    product: "Redragon S101",
    img: P3,
    customer: "John Smith",
    date: "1 March",
    amount: 35,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 4324567,
    product: "Razer Blade 15",
    img: P5,
    customer: "Sonny Miller",
    date: "1 March",
    amount: 920,
    method: "Online",
    status: "Approved",
  },
  {
    id: 5674667,
    product: "ASUS ROG Srix",
    img: P4,
    customer: "Harold Carol",
    date: "1 March",
    amount: 2000,
    method: "Online Payment",
    status: "Pending",
  },
];

const TableComp = () => {
  return (
    <div className="tableComp">
      <TableContainer component={Paper}>
        <Table
          className="tableMain"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">
                <div className="tableCellContent">
                  <p>Tracking Id</p>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="tableCellContent">
                  <p>Product</p>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="tableCellContent">
                  <p>Customer</p>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="tableCellContent">
                  <p>Date</p>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="tableCellContent">
                  <p>Amount</p>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="tableCellContent">
                  <p>Payment Method</p>
                </div>
              </TableCell>
              <TableCell className="tableCell">
                <div className="tableCellContent">
                  <p>Status</p>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRow.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell" component="th" scope="dataRow">
                  <div className="tableCellContent">
                    <p>{row.id}</p>
                  </div>
                </TableCell>
                <TableCell className="tableCell">
                  <div className="tableCellContent">
                    <div className="cellWrapper">
                      <img src={row.img} alt="product-img" />
                    </div>
                    <span>{row.product}</span>
                  </div>
                </TableCell>
                <TableCell className="tableCell">
                  <div className="tableCellContent">
                    <span>{row.customer}</span>
                  </div>
                </TableCell>
                <TableCell className="tableCell">
                  <div className="tableCellContent">
                    <span>{row.date}</span>
                  </div>
                </TableCell>
                <TableCell className="tableCell">
                  <div className="tableCellContent">
                    <span>{row.amount}</span>
                  </div>
                </TableCell>
                <TableCell className="tableCell">
                  <div className="tableCellContent">
                    <span>{row.method}</span>
                  </div>
                </TableCell>
                <TableCell className="tableCell">
                  <div className="tableCellContent">
                    <span className={`status ${row.status}`}>{row.status}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
