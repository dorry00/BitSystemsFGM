import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

const states = [
  {
    value: 0,
    label: "SuperAdmin",
  },
  {
    value: 1,
    label: "Admin",
  },
  {
    value: 2,
    label: "Normal user",
  },
];

export const UserForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [location, setLocation] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setErrors] = useState([]);
  const [usertype, setUsertype] = useState(null);

  const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value;
    setUserInfo({ ...userInfo, [e.target.name]: value });
  };
  console.log(userInfo)


   const handleRegister = (e) => {
    e.preventDefault()
  
    const res = fetch("http://localhost/register.php", {
      method:"POST",
     
      body:JSON.stringify({Fullname: userInfo.Fullname, Password:userInfo.Password, email:userInfo.email, phone:userInfo.phone, location:userInfo.location, usertype:userInfo.usertype})
      
      })
      .then((res)=>res.json())

            
  }

  return (

   <form autoComplete="off"
   noValidate
   {...props}>
    
      <Card >
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the full name"
                label="Full name"
                name="Fullname"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="User Password"
                name="Password"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                onChange={handleChange}
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                onChange={handleChange}
                name="usertype"
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" type = "submit" onClick = {handleRegister}>
            Create User
          </Button>
        </Box>
      </Card>
      </form>
    
  );
};
