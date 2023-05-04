import * as React from 'react';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
import CropFreeRoundedIcon from '@mui/icons-material/CropFreeRounded';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';
// import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to= '/'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton component={Link} to="/evento">
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <ListItemText primary="Evento" />
    </ListItemButton>
    <ListItemButton component={Link} to="/create">
      <ListItemIcon>
        <QrCode2RoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Generar QR" />
    </ListItemButton>
    <ListItemButton component={Link} to='/scanner'>
      <ListItemIcon>
        <CropFreeRoundedIcon/>
      </ListItemIcon>
      <ListItemText primary="Scanear Qr" />
   </ListItemButton>
    <ListItemButton component={Link} to='/asistencia'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Asistencia" />
    </ListItemButton>
    <ListItemButton component={Link} to='/usuario'>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText primary="Usuarios" />
    </ListItemButton>
   
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);