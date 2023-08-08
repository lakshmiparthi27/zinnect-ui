import { AppBar, Typography, Avatar, Grid,Box} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import NoteIcon from '@mui/icons-material/Note';
import ContactsIcon from '@mui/icons-material/Contacts';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import Groups3SharpIcon from '@mui/icons-material/Groups3Sharp';

const Header = () =>{
    return(
        <AppBar position="static" className='appbar'>
        <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item xs={6}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        zinnect
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
                        <Grid container spacing={2} justifyContent="end">
                        <Grid item={4} >
                        
                        <Avatar sx={{backgroundColor:"#DCEDF8" }}>
                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                {/* <Badge badgeContent={4} color="error"> */}
                                <HomeIcon  color='primary'/>
                                {/* </Badge> */}
                            </IconButton>
                        </Avatar>
                        </Grid>
                        <Grid item={4} >
                        <Avatar sx={{ bgcolor: '#F3F4F7' }}>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                {/* <Badge badgeContent={17} color="error"> */}
                                <NoteIcon  color='primary'/>
                                {/* </Badge> */}
                            </IconButton>
                        </Avatar>
                        </Grid>
                        <Grid item={4} >
                        <Avatar sx={{ bgcolor: '#F3F4F7' }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                //   aria-controls={menuId}
                                aria-haspopup="true"
                                //   onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <ContactsIcon color='primary' />
                            </IconButton>
                        </Avatar>
                        </Grid>
                        <Grid item={4} >
                        <Badge badgeContent="" color="error">
                        <Avatar  sx={{ bgcolor: '#F3F4F7' }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                //   aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                //   onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                               
                                    <Groups3SharpIcon color='primary' />
                               
                            </IconButton>
                        </Avatar>
                        
                       
                        </Badge>
                        </Grid>
                        <Grid item={4} >
                        <Avatar  sx={{ bgcolor: '#F3F4F7' }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                //   aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                //   onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <ForumSharpIcon color='primary' />
                            </IconButton>
                        </Avatar>
                        </Grid>
                        <Grid item={2}>
                        <Avatar sx={{ backgroundColor:"#DCEDF8" }}>JM</Avatar>
                        </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </Toolbar>
    </AppBar>
    )
}
export default Header