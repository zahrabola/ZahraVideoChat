import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div>
      <Grid container className="videocontainer">
        {/* Our Video */}
        {stream && (
          <Paper className="videopaper">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {" "}
                {name || "Name"}{" "}
              </Typography>
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className="videoitem"
              />
            </Grid>
          </Paper>
        )}

        {/* User Video */}

        {callAccepted && !callEnded && (
          <Paper className="videopaper">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                {call.name || "Name"}
              </Typography>
              <video
                playsInline
                ref={userVideo}
                autoPlay
                className="videoitem"
              />
            </Grid>
          </Paper>
        )}
      </Grid>
    </div>
  );
};

export default VideoPlayer;
