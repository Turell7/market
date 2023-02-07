import {
  AppBar, IconButton, Toolbar, Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export function Header() {
  return (
    <AppBar>
      <Toolbar position="static">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="span"
          style={{ flexGrow: 1 }}
        >
          Market - Admin Panel
        </Typography>
      </Toolbar>

    </AppBar>
  )
}
