import {
  AppBar, Toolbar, Typography,
} from '@mui/material'
import { SideBar } from '../SideBar'

export function Header() {
  return (
    <AppBar>
      <Toolbar position="static">
        <SideBar />
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
