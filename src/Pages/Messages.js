import { Box, Container } from "@mui/material";
import { DashboardSidebar } from "../Components/DashboardLayout/DashboardSidebar.js";
import { DashboardNavbar } from "../Components/DashboardLayout/DashboardNavbar.js";
import { AdminNavbar } from "../Components/AdminUsers/AdminNavbar.js";
import { styled } from "@mui/material/styles";
import LatestOrders  from "./LatestMessages.js";
const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

const Messages = () => (
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
            <LatestOrders/>
          </Box>
        </Container>
      </DashboardLayoutRoot>
    </Box>
  </>
);

export default Messages;
