import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const drawerWidth = 300

export default function BaseLayout() {
  return (
    <>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Toolbar />
      <Box
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          p: 3
        }}
      >
        <Outlet />
      </Box>
    </>
  )
}
