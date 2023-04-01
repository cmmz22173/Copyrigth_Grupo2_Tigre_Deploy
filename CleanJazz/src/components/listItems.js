import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GarageIcon from '@mui/icons-material/Garage';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PersonIcon from '@mui/icons-material/Person';
import DiscountIcon from '@mui/icons-material/Discount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import InfoIcon from '@mui/icons-material/Info';
import BugReportIcon from '@mui/icons-material/BugReport';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Cuenta" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <GarageIcon />
      </ListItemIcon>
      <ListItemText primary="Vehiculos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NotificationsIcon/>
      </ListItemIcon>
      <ListItemText primary="Notificaciones" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CleaningServicesIcon />
      </ListItemIcon>
      <ListItemText primary="Servicios" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DiscountIcon/>
      </ListItemIcon>
      <ListItemText primary="Promociones" />
    </ListItemButton>
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