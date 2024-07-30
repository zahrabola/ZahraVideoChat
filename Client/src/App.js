import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import "./App.css";
import VideoPlayer from "./Component/VideoPlayer";
import Notification from "./Component/Notification";
import Container from "@mui/material/Container";
import Sidebar from "./Component/Sidebar";

function App() {

  return (
    <Container>
      <div className="wrapper">
        <AppBar className="appBar" position="static" color="inherit">
          <Typography variant="h2" align="center">
            Video Chat
          </Typography>
        </AppBar>
        <VideoPlayer />
        <Sidebar>
          <Notification />
        </Sidebar>
      </div>
    </Container>
  );
}

export default App;

