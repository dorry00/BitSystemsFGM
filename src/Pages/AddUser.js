import React from 'react'

import { Box, Container, Grid, Typography } from '@mui/material';
import {UserForm} from "../Components/AddUsers/UserForm"
// import { DashboardLayout } from '../components/dashboard-layout';
import { styled } from "@mui/material/styles";

import { DashboardSidebar } from "../Components/DashboardLayout/DashboardSidebar.js";
import { DashboardNavbar } from "../Components/DashboardLayout/DashboardNavbar.js";


const DashboardLayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 64,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

const AddUser = () => (
  <>
  <DashboardLayoutRoot>
  <DashboardNavbar/>

  <DashboardSidebar/>
    
    <Box
      component="main"
    
      sx={{
        flexGrow: 1,
        maxWidth : 1000,
        py: 8
      }}
    >
      <Container maxWidth= "1000">
        <Typography
          sx={{ mb: 1 }}
          variant="h4"
        >
          Account
        </Typography>
        <Grid
          container
          spacing={3}
        >
          
          <Grid
            item
            lg={8}
            md={12}
            xs={12}
          >
            <UserForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </DashboardLayoutRoot>
  </>
);

// AddUser.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

export default AddUser;