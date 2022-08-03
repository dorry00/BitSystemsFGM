import { Box, Container } from "@mui/material";
import { AdminUsers } from "../Components/AdminUsers/AdminUsers.js";

import { DashboardSidebar } from "../Components/DashboardLayout/DashboardSidebar.js";

import { DashboardNavbar } from "../Components/DashboardLayout/DashboardNavbar.js";
import { AdminNavbar } from "../Components/AdminUsers/AdminNavbar.js";
import { styled } from "@mui/material/styles";

const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

const Customers = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <DashboardLayoutRoot>
        <Container
          maxWidth={false}
          sx={{
            display: "flex",
          }}
        >
          <DashboardSidebar />

          <Box sx={{ mt: 3 }}>
            <DashboardNavbar/>
            <AdminNavbar />
            <AdminUsers/>
          </Box>
        </Container>
      </DashboardLayoutRoot>
    </Box>
  </>
);

export default Customers;
