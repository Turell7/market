import * as React from 'react'
import {
  Box, Divider, Drawer, IconButton, List, ListItem,
  ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'

export function SideBar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setIsOpen(open)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Users', 'Roles', 'Products', 'Categories', ''].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  )
}
