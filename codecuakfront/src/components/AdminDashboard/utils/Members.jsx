import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { useEffect,useState } from "react";
import { allUserAdmin } from "../../../redux/action";
import { useSelector,useDispatch } from "react-redux";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { width } from "@mui/system";
import Ban from "../Ban";
import Status from "../Status.jsx"
import Perfiles from "./Perfiles";
const Members = ({allusers}) => {
  const loading= [
		{
			"id": "1c434c87-2b90-4add-a2f2-e8a03cd15201",
			"name": "codeCuak",
			"nickName": "codeCuak",
			"status": "superadmin",
			"email": "codecuak@gmail.com",
			"active": true
		}]
  // const dispatch = useDispatch()
  // const users = useSelector((state)=>state.alluser)
  //  useEffect(()=>{
  //    dispatch(allUserAdmin())
  //  },[dispatch])
  const [rowId, setRowId] = useState(null);
  const [pageSize, setPageSize] = useState(5);
  const columns = [
    {
      field: "perfil",
      headerName: "Perfil",
      renderCell: (params) => <Perfiles {...{ params, rowId, setRowId }} />,
      width:"60"
    },
    { field: "id", headerName: "ID" ,width:300,},
    {
      field: "name",
      headerName: "Name",
      flex: 1
    },
    {
      field: "nickName",
      headerName: "Nombre de Usuario",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "active",
      headerName: "Active",
      width: 40,
      flex: 1,
      renderCell:({ row: { active } })=>{
        return (
          <Box>
            {active? "✅":"🚫"}
          </Box>
        )
      }
    },
    {
      field: "status",
      headerName: "Access Level",
      flex: 1,
      renderCell: (params) => <Status params={params}></Status>
    },
    {
      field: "ban",
      headerName: "Baneos",
      renderCell: (params) => <Ban {...{ params, rowId, setRowId }} />,
    },
  ];

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="73vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontFamily:"Sen"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#94e2cd",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1E8449",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#59AD7C",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#1E8449",
          },
          "& .MuiCheckbox-root": {
            color: `#b7ebde !important`,
          },
        }}
      >
        <DataGrid rowsPerPageOptions={[5, 10, 20, 100]} onPageSizeChange={(newPageSize) => setPageSize(newPageSize)} pageSize={pageSize} onCellEditCommit={(params) => setRowId(params.id)}  getRowId={(row) => row.id}  rows={allusers?allusers:loading} columns={columns} fontFamily={"Sen"} />
      </Box>
    </Box>
  );
};

export default Members;
