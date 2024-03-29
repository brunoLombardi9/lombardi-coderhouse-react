import * as React from 'react';
import './NavBar.css';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { Button, Grid } from '@mui/material';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justifyContent="center">
            <NavLink to='./' >
              <Typography fontFamily={"Pattaya"} fontSize={"2.5rem"} color="white">Exodus</Typography>
            </NavLink>
          </Grid>

          <CartWidget></CartWidget>
        </Toolbar>

      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={(_, reason) =>
          reason === 'backdropClick' && setOpen(false)}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />
        <Typography variant="h5" textAlign="center" className="categorias">Instrumentos</Typography>
        <Divider />

        <List sx={{ mb: "20px" }}>

          <li><NavLink to='./category/Basses'>Bajos</NavLink></li>
          <li><NavLink to='./category/Guitars'>Guitarras</NavLink></li>
          <li><NavLink to='./category/Drums'>Baterías</NavLink></li>
          <li><NavLink to='./category/Keyboards'>Teclados</NavLink></li>

        </List>

        <Divider />
        <Typography variant="h5" textAlign="center" className="categorias">Electrónica</Typography>
        <Divider />


        <List>

          <li><NavLink to='./category/Mics'>Micrófonos</NavLink></li>
          <li><NavLink to='./category/Consoles'>Consolas</NavLink></li>
          <li><NavLink to='./category/Amplifiers'>Amplificadores</NavLink></li>
          <li><NavLink to='./category/Pedals'>Pedales</NavLink></li>

        </List>


       <Grid container justifyContent="center">
        <NavLink to='./tracking'><Button variant="contained" sx={{borderRadius:"100px"}} >Seguir Orden</Button></NavLink>
        </Grid>

      </Drawer>

      <Main open={open}>
        <DrawerHeader />

      </Main>

    </Box>
  );
}
