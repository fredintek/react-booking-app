import P1 from "./assets/p1.jpg";
import P2 from "./assets/p2.jpg";
import P3 from "./assets/p3.jpg";
import P4 from "./assets/p4.jpg";
import P5 from "./assets/p5.jpg";
import P6 from "./assets/p6.jpg";
import P7 from "./assets/p7.jpg";
import P8 from "./assets/p8.jpg";
import P9 from "./assets/p9.jpg";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "userName",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.userName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 50,
    renderCell: (params) => {
      return (
        <div className="cellAge">
          <span>{params.row.age || "N/A"}</span>
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellStatus ${params.row.status}`}>
          <p>{params.row.status}</p>
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    userName: "Snow",
    age: 35,
    img: P1,
    email: "hey@gmail.com",
    status: "passive",
  },
  {
    id: 2,
    userName: "Lannister",
    age: 42,
    img: P2,
    email: "hey@gmail.com",
    status: "active",
  },
  {
    id: 3,
    userName: "Jamie Lannister",
    age: 45,
    img: P3,
    email: "hey@gmail.com",
    status: "passive",
  },
  {
    id: 4,
    userName: "Stark",
    age: 16,
    img: P4,
    email: "hey@gmail.com",
    status: "active",
  },
  {
    id: 5,
    userName: "Targaryen",
    age: null,
    img: P5,
    email: "hey@gmail.com",
    status: "passive",
  },
  {
    id: 6,
    userName: "Melisandre",
    age: 150,
    img: P6,
    email: "hey@gmail.com",
    status: "pending",
  },
  {
    id: 7,
    userName: "Clifford",
    age: 44,
    img: P7,
    email: "hey@gmail.com",
    status: "active",
  },
  {
    id: 8,
    userName: "Frances",
    age: 36,
    img: P8,
    email: "hey@gmail.com",
    status: "pending",
  },
  {
    id: 9,
    userName: "Roxie",
    age: 65,
    img: P9,
    email: "hey@gmail.com",
    status: "active",
  },
];
