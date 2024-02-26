import React, { useState, MouseEvent } from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Sign Up/Sign In','Home', 'About', 'Contact']

function NavBar() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  }
  
  return (
    <AppBar position='static' sx={{bgcolor:'ash'}}>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'none', md: 'flex' } }}>
          <VolunteerActivismIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>Name</Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button variant='contained' color='primary'>{page}</Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton size='large' edge='start' color='inherit' onClick={openMenu}>
            <MenuIcon />
          </IconButton>
          <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' }}}>
            {pages.map((page) => (
              <MenuItem color='inherit'>{page}</MenuItem>
            ))}
          </Menu>
          <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{ display: { xs: 'flex', md: 'none' } }}>
            <VolunteerActivismIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'flex ', md: 'none' } }}>Name</Typography>

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
