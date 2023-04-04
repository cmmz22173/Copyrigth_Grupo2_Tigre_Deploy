import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import GarageIcon from '@mui/icons-material/Garage';
import PersonIcon from '@mui/icons-material/Person';
import DiscountIcon from '@mui/icons-material/Discount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import BugReportIcon from '@mui/icons-material/BugReport';
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Cuenta" />
    </ListItemButton>
    <Link to={"/vehiculos"} style={{ textDecoration: 'none' }}>
        <ListItemButton>
          <ListItemIcon>
            <GarageIcon />
          </ListItemIcon>
          <ListItemText primary="Vehiculos" sx={{color:"black"}}/>
        </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <NotificationsIcon/>
      </ListItemIcon>
      <ListItemText primary="Notificaciones" />
    </ListItemButton>
  <Link to={"/servicios"} style={{ textDecoration: 'none' }}>
    <ListItemButton>
      <ListItemIcon>
        <CleaningServicesIcon />
      </ListItemIcon>
      <ListItemText primary="Servicios" sx={{color:"black"}}/>
    </ListItemButton>
  </Link>
  <Link to={"/promociones"} style={{ textDecoration: 'none' }}>
    <ListItemButton>
      <ListItemIcon>
        <DiscountIcon/>
      </ListItemIcon>
      <ListItemText primary="Promociones" sx={{color:"black"}}/>
    </ListItemButton>
  </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon  />
      </ListItemIcon>
      <ListItemText primary="Configuraciones" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        < BugReportIcon/>
      </ListItemIcon>
      <ListItemText primary="Reportar" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItemButton>
  </React.Fragment>
);