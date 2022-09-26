import {
  AppBar,
  Typography,
  Toolbar
} from '@mui/material'

export default function Navbar({ drawerWidth }) {
  return (
    <AppBar
      sx={{
        backgroundColor: '#fff5',
        backdropFilter: 'blur(5px)',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'grey.300',
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`
      }}
      position="fixed"
    >
      <Toolbar
        sx={{ paddingLeft: 0 }}
      >
        <Typography sx={{ textShadow: '0 0 1px 1px #fff5' }} variant="h6" color="black">Movie App</Typography>
      </Toolbar>
    </AppBar>
  )
}
