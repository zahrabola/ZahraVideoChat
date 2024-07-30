import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import "./App.css";
import VideoPlayer from "./Component/VideoPlayer";
import Sidebar from "./Component/Sidebar";
import Notification from "./Component/Notification";
import Container from '@mui/material/Container';


function App() {
  //const classes = useStyles();
  return (
    <div >
      <Container maxWidth="sm">
      <AppBar className="appBar" position="static" color="inherit">
        <Typography variant="h2" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer />
      <Sidebar>
        <Notification />
      </Sidebar>
      </Container>
     
    </div>
  );
}

export default App;
