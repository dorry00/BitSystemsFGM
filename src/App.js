import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminUsers } from "./Components/AdminUsers/AdminUsers";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/index";
import { AdminNavbar } from "./Components/AdminUsers/AdminNavbar";
import Customers from "./Pages/customers";
import AddUser from "./Pages/AddUser";
import UpdateUser from "./Pages/UpdateUser"
import Messages from "./Pages/Messages";
import MapVisualization from "./Pages/MapVisualization";
// import {TotalCases} from "../../my-app/src/Components/Reports/TotalCases"
import CasesTrend from "./Components/Reports/CasesTrend";
// import MostAffectedArea from "./Components/Reports/MostAffectedArea";
import ResolvedCases from "./Components/Reports/ResolvedCases";

function App() {
  return (
   
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path = "/dashboard" element = {<Dashboard/>}/>
            <Route path = "/adduser" element={<AddUser />} />
            <Route path = "/messages" element = {<Messages/>}/>
            <Route path = "/login" element ={<SignUp/>}/>
            <Route path = "/users" element={<Customers />} />
            <Route path = "/users/:userId" element ={<UpdateUser/>}/>
            <Route path = "/map" element={<MapVisualization />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
   
  );
}

export default App;
