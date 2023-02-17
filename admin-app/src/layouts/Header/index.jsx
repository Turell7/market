import * as React from 'react'
import {
  Avatar,
  Button,
  IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLogOut } from '../../hooks/useLogOut'

export function Header({ open, handleDrawerOpen, AppBar }) {
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const { logOut } = useLogOut()
  const { user } = useSelector((store) => store.user)

  console.log({ user })

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const userMenu = () => {
    if (user !== null) {
      return (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={user.avatar} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Button onClick={() => navigate('/profile')}>Profile </Button>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Button onClick={logOut} type="button" className="justify-between">
                Log out
              </Button>
            </MenuItem>
          </Menu>
        </Box>
      )
    }
    return undefined
  }

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} variant="h6" noWrap component="div">
          Market - Admin Panel
        </Typography>
        {userMenu()}
      </Toolbar>
    </AppBar>
  )
}
