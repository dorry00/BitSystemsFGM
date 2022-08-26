import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/index";
import Customers from "./Pages/customers";
import AddUser from "./Pages/AddUser";
import UpdateUser from "./Pages/UpdateUser"
import Messages from "./Pages/Messages";
import MapVisualization from "./Pages/MapVisualization";
import Logout from "./Pages/Logout";
//import MessageInfo from "./Components/NessageInfo/MessageInfo";

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
            <Route path = "/logout" element = {<Logout/>}/>
            {/* <Route path = "/message" element = {<MessageInfo/>}/> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
   
  );
}

export default App;
