import {
  IconButton, Toolbar, Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export function Header({ open, handleDrawerOpen, AppBar }) {
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
        <Typography variant="h6" noWrap component="div">
          Market - Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
