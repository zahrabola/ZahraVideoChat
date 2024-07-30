import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material/styles';
import './App.css';
import VideoPLayer from './Component/VideoPLayer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));


function App() {
  return (
    <div className="App">
 Video chat
 <AppBar position="static" color="inherit">
<Typography> Video chat</Typography>
{/*video */}
<VideoPLayer />
<Sidebar>
  <Notification />
</Sidebar>
{/*options - notification*/}
 </AppBar>
    </div>
  );
}

export default App;
