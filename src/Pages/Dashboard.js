import { Box, Container, Grid } from '@mui/material';
import CaseProjection from '../Components/Reports/CaseProjection';
import CasesTrend from "../Components/Reports/CasesTrend";
import ResolvedCases from '../Components/Reports/ResolvedCases';
import TotalCases from "../Components/Reports/TotalCases";
import MostAffectedArea from '../Components/Reports/MostAffectedArea';
import CasesCategories from "../Components/Reports/CasesCategories";

const Dashboard = () => (
    <div >
    
      <Box
        component="main"
        sx={{
          float: 'right',
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={3}
              sm={6}
              xl={3}
              xs={12}
            >
              <CaseProjection />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <TotalCases />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <ResolvedCases />
            </Grid>
            <Grid
              item
              xl={3}
              lg={3}
              sm={6}
              xs={12}
            >
              <MostAffectedArea sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <CasesTrend />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <CasesCategories sx={{ height: '100%' }} />
            </Grid>
            {/* <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
              <TrendingCases sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <LatestCases />
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </div>
  );
  

  
  export default Dashboard;
  