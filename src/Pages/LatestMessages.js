import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import { SeverityPill } from "../Components/Severitypill";
import axios from "axios";

function LatestOrders(props) {
  const [messages, setMessages] = useState([]);
  const fetchMessages = async () => {
    const result = await axios.get("http://localhost/getAllMessages.php");
    setMessages(result.data.result);
  };

  useEffect(() => {
    fetchMessages();
    console.log(messages);
  }, []);

  return (
    <Card {...props}>
      <CardHeader title="Messages" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1000 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Phone </TableCell>
                <TableCell>Message</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Area
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Action</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messages.map((message) => (
                <TableRow hover key={message.msg_id}>
                  <TableCell>{message.msg_id}</TableCell>
                  <TableCell>{message.sender_name}</TableCell>
                  <TableCell>{message.message.slice(0, 30) + "..."}</TableCell>

                  <TableCell>
                    read
                    {/* <SeverityPill
                    color={(order.status === 'resolved' && 'success')
                    || (order.status === 'pending' && 'error')
                    || 'warning'}
                  >
                    {order.status}
                    </SeverityPill> */}
                  </TableCell>
                  <TableCell>{message.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

export default LatestOrders;
