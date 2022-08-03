import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Footer/Footer";
import { AdminUsers } from "./Components/AdminUsers/AdminUsers";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/index";
import { AdminNavbar } from "./Components/AdminUsers/AdminNavbar";
import Customers from "./Pages/customers";
import AddUser from "./Pages/AddUser";
import UpdateUser from "./Pages/UpdateUser"
import Messages from "./Pages/Messages";

function App() {
  return (
   
      <ThemeProvider theme={theme}>
      

        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<AddUser />} />
            <Route path = "/messages" element = {<Messages/>}/>
            <Route path = "/users" element={<Customers />} />
            <Route path = "/users/:userId" element ={<UpdateUser/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
   
  );
}

export default App;
