import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../Dashboard/Dashboard.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../style/style";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
  { field: "inbox_router_id", headerName: "ID", width: 70 },
  { field: "msisdn", headerName: "Phone Number", width: 130 },
  {
    field: "shortcode",
    headerName: "ID Number",
    type: "Number",
    width: 150,
  },
  {
    field: "net_id",
    headerName: "Message",
    type: "text",
    width: 300,
  },
 
 
];

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [rowdata, setRowdata] = useState([])

  const fetchMessages = async () => {
    const result = await axios.get("http://localhost/database.php");
    setMessages(result.data.result);
    
   
  };

  useEffect(() => {
    
    fetchMessages();
    console.log(messages)
   
  }, []);

  const handleOnCellClick = (params) => {
    setRowdata(params);
   
    setOpen(!open)
  };

 const handleClose = () => setOpen(false);

  return (
    // <div>
    //   <table class="table table-hover">
    //     <thead>
    //       <tr>
    //         <th>id</th>
    //         <th>Phone</th>
    //         <th>short code</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {messages.map((result) => {
    //         return (
    //           <tr>
    //             <td>{result.inbox_route_id}</td>
    //             <td>{result.msisdn}</td>
    //             <td>{result.shortcode}</td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>
    
      <div>
        <div className="datatable" >
          <DataGrid
            onCellClick ={handleOnCellClick}
            rows={messages}
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[10]}
            getRowId={(row) => row.inbox_route_id}
           
            onSelectionModelChange={(ids) => {
  const selectedIDs = new Set(ids);
  const selectedRowData = messages.filter((row) =>
    selectedIDs.has(row.inbox_route_id.toString())
  );
 setRowdata(...selectedRowData)
}}

       
          />
        </div>
        {open && (

          <div>
            
            {/* <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <AppBar sx={{ position: "relative" }} style={{ backgroundColor: "pink"}}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color= "Inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={{ ml: 2, flex: 1 }}
                    variant="h6"
                    component="div"
                  >
                    Close
                  </Typography>
                  <Button
                    autoFocus
                    variant="outlined"
                    color="error"
                    onClick={handleClose}
                  >
                    Delete
                  </Button>
                </Toolbar>
              </AppBar> */}

              <div className="dashboard-message">
                <div className="message-container">
                  <div className="message-from">
                    <p className="p1"><b>From:</b></p>
                    <p className="p3">{rowdata.msisdn}</p>
                  </div>
                  <div>
                    {" "}
                    <h4 className="p2">Message from Nakuru County</h4>
                  </div>

                  <div>
                    <p className="p-message">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <button className="message-button">Take Action</button>
                  </div>
                </div>
              </div>
            {/* </Dialog> */}
          </div> 

        )}
      </div>
   
  );
}
