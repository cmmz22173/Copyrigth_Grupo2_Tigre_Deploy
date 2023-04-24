
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from '../components/listItems';
import logoLanding from '../images/CleanJazz.png'
import Avatar from '@mui/material/Avatar';
import { Card} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import {CardMedia} from '@mui/material';
import { Link } from "react-router-dom";
import ProfileMenuButton from '../components/ProfileMenuButton';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


function CardGroup({ cardsData }) {
    return (
      <Grid  container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        
        {cardsData.map((card, index) => (
       
        
        <Card sx={{width: 420, display: 'flex', m:1, '@media (max-width:800px)': {
            width: 320
          }}}>
         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
           <CardContent sx={{ width: 210, '@media (max-width:800px)': {
            width: 200
          }}}>
             <Typography component="div" sx={{fontFamily: 'Font Awesome 5 Free',letterSpacing: "0.12em",fontWeight: 400}}>
               {card.title}
             </Typography>
             <Typography sx={{fontFamily: 'Font Awesome 5 Free',letterSpacing: "0.12em",fontWeight: 400,fontSize:13,mt:1}} color="text.secondary" component="div">
               Ultimo servicio
             </Typography>
             <Typography sx={{fontFamily: 'Font Awesome 5 Free',letterSpacing: "0.12em",fontWeight: 400, fontSize:12}} color="text.secondary" component="div">
               {card.lastService}
             </Typography>
             <Typography sx={{fontFamily: 'Font Awesome 5 Free',letterSpacing: "0.12em",fontWeight: 400,fontSize:13,mt:1}} color="text.secondary" component="div">
               Ultima visita
             </Typography>
             <Typography sx={{fontFamily: 'Font Awesome 5 Free',letterSpacing: "0.12em",fontWeight: 400, fontSize:12}} color="text.secondary" component="div">
               {card.fecha}
             </Typography>
           </CardContent>
         
         </Box>
         <CardMedia
           component="img"
           sx={{height: 170, width: 250}}
           image={card.imageUrl}
           alt="sd"
         />
       </Card>  
        
        ))}
      </Grid>
    );
  }


const drawerWidth = 225;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(0),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

export default function Vehiculos() {
  
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);

   
  
  };
 const cardsData = [
        {
          title: 'Porsche 911',
          lastService: 'Aspirado',
          fecha:'12/12/12',
          imageUrl: 'https://source.unsplash.com/featured/?cars',
        },
        {
            title: 'Honda Civic',
            lastService: 'Lavado',
            fecha:'12/12/12',
            imageUrl: 'https://source.unsplash.com/featured/?cars',
          },
          {
            title: 'Toyota Corolla',
            lastService: 'Pulido',
            fecha:'12/12/12',
            imageUrl: 'https://source.unsplash.com/featured/?cars',
          },
          {
            title: 'Mitsubishi Montero',
            lastService: 'Aspirado',
            fecha:'12/12/12',
            imageUrl: 'https://source.unsplash.com/featured/?cars',
          },
        
       
        
      ];

  return (
    
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              backgroundColor: '#f6d88b',
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >


              <Link to={"/home"}>
                <Avatar sx={{ m: 0, width: 65,height: 65}} src={logoLanding}/>
              </Link>


            </Typography>
            <IconButton color="inherit">
            <ProfileMenuButton/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: '#efebdb',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ml:2,mt: 7, mb: 4 }}>
          <Typography sx={{fontFamily: 'Font Awesome 5 Free',letterSpacing: "0.12em",fontWeight: 400, fontSize:24,mb:2,ml:-2,
            '@media (max-width:800px)': {
                ml:0,
                fontSize:22
              }}} color="text.secondary" component="div">
               Coleccion
             </Typography>
          <CardGroup cardsData={cardsData} />
          
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}