import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { SocketContext } from "../SocketContext";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div>
      <Container className="sidebarcontainer">
        <Paper elevation={10} className="sidebarpaper">
          <form className="sidebarroot" noValidate autoComplete="off">
            <Grid container className="sidebargrid">
              {/*account */}
              <Grid item xs={12} md={6} className="sidebarpadding">
                <Typography gutterBottom variant="h6">
                  Account Info
                </Typography>
                <TextField
                  label="Name"
                  value={name}
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
                <Grid className="btnpadding">
                  {console.log(me)}
                  <CopyToClipboard text={me} className="sidebarmargin">
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className="btn"
                    >
                      Copy Your ID
                    </Button>
                  </CopyToClipboard>
                </Grid>
              </Grid>
              {/*Make a call */}

              <Grid item xs={12} md={6} className="sidebarpadding">
                <Typography gutterBottom variant="h6">
                  Make a call
                </Typography>
                <TextField
                  label="ID to call"
                  value={idToCall}
                  fullWidth
                  onChange={(e) => setIdToCall(e.target.value)}
                />

                {callAccepted && !callEnded ? (
                  <Grid className="btnpadding">
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className="sidebarmargin"
                      onClick={leaveCall}
                    >
                      Hang Up
                    </Button>
                  </Grid>
                ) : (
                  <Grid className="btnpadding">
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className="sidebarmargin"
                      onClick={() => callUser(idToCall)}
                    >
                      Call
                    </Button>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </form>

          {children}
        </Paper>
      </Container>
    </div>
  );
};

export default Sidebar;
