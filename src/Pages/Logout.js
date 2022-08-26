import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { getInitials } from "../Utils/get-initials";
function Logout() {
  const { user, dispatch } = useContext(AuthContext);

  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
    (user == null) && window.location.replace("http://localhost:3000/login");
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              sx={{
                height: 64,
                mb: 2,
                width: 64,
              }}
            >
              {getInitials(user.user_name)}
            </Avatar>
            <Typography color="textPrimary" gutterBottom variant="h5">
              {user.user_name}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {`${user.location}`}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="error" fullWidth variant="text" onClick={handlelogout}>
            LogOut
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Logout;
