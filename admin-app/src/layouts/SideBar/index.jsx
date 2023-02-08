import {
  Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import AccountCircle from '@mui/icons-material/AccountCircle'
import StorefrontIcon from '@mui/icons-material/Storefront'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import PeopleIcon from '@mui/icons-material/People'
import { useLocation, useNavigate } from 'react-router-dom'

export function SideBar({
  open, theme, handleDrawerClose, Drawer, DrawerHeader,
}) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/profile')} selected={location.pathname === '/profile'}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/users')} selected={location.pathname === '/users'}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText>Users</ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/products')} selected={location.pathname === '/products'}>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/categories')} selected={location.pathname === '/categories'}>
            <ListItemIcon>
              <CategoryOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  )
}
