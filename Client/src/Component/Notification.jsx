import React, { useContext } from "react";
import Button from "@mui/material/Button";

import { SocketContext } from "../SocketContext";

const Notification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <div>
      {call.isReceivingCall && !callAccepted && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "15px",
          }}
        >
          <h3>{call.name} is calling:</h3>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default Notification;
