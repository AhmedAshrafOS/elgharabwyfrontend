import React from 'react';
import {
    Button,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Typography,
    IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ViewBlogs from './ViewBlogs';
import ViewBookings from './ViewBooking';
import ManageBookings from './ManageBookings';
import ManageBlogs from './ManageBlogs';

const Dashboard = () => {
    const [openBlogs, setOpenBlogs] = React.useState(true); // Blogs section state
    const [openBookings, setOpenBookings] = React.useState(true); // Bookings section state
    const [drawerOpen, setDrawerOpen] = React.useState(false); // Drawer open/close state
    const [activeComponent, setActiveComponent] = React.useState("viewBlogs"); // Active component
    const navigate = useNavigate();

    const isMobile = window.innerWidth <= 600; // Responsive check for mobile

    const showViewBlogs = () => setActiveComponent('viewBlogs');
    const showViewBookings = () => setActiveComponent('viewBookings');
    const showCreateBlogs = () => setActiveComponent('createBlogs');
    const showCreateBookings = () => setActiveComponent('createBooking');

    // Toggle drawer for mobile
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    return (
        <Box display="flex" height="100vh">
            {/* Mobile Menu Button */}
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{
                    display: { xs: 'block', sm: 'none' }, // Visible only on mobile
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    color: '#fff',
                    zIndex: 1300,
                }}
            >
                <MenuIcon />
            </IconButton>

            {/* Sidebar Drawer */}
            <Drawer
                variant={isMobile ? "temporary" : "permanent"} // Responsive variant
                open={drawerOpen || !isMobile} // Always open for desktop
                onClose={toggleDrawer} // Close for mobile
                ModalProps={{
                    keepMounted: true, // Better performance on mobile
                }}
                sx={{
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: 260,
                        boxSizing: 'border-box',
                        backgroundColor: '#1E2A38',
                        color: '#fff',
                        paddingTop: 2,
                    },
                }}
            >
                {/* Close Icon for Mobile */}
                {isMobile && drawerOpen && (
                    <IconButton
                        onClick={toggleDrawer}
                        sx={{
                            display: 'block',
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            color: '#fff',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                )}

                <Typography
                    variant="h5"
                    align="center"
                    sx={{ color: "#00ACC1", fontWeight: 600, mb: 2 }}
                >
                    Admin Dashboard
                </Typography>
                <List>
                    {/* Blogs Section */}
                    <ListItem button onClick={() => setOpenBlogs(!openBlogs)} sx={{ color: openBlogs ? '#00ACC1' : '#fff' }}>
                        <ListItemText primary="Manage Blogs" />
                        {openBlogs ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={openBlogs} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button onClick={showCreateBlogs} sx={{ pl: 4, color: activeComponent === 'createBlogs' ? '#00ACC1' : '#ccc' }}>
                                <ListItemText primary="Create Blog" />
                            </ListItem>
                            <ListItem button onClick={showViewBlogs} sx={{ pl: 4, color: activeComponent === 'viewBlogs' ? '#00ACC1' : '#ccc' }}>
                                <ListItemText primary="View Blogs" />
                            </ListItem>
                        </List>
                    </Collapse>

                    {/* Bookings Section */}
                    <ListItem button onClick={() => setOpenBookings(!openBookings)} sx={{ color: openBookings ? '#00ACC1' : '#fff' }}>
                        <ListItemText primary="Manage Bookings" />
                        {openBookings ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItem>
                    <Collapse in={openBookings} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button onClick={showCreateBookings} sx={{ pl: 4, color: activeComponent === 'createBooking' ? '#00ACC1' : '#ccc' }}>
                                <ListItemText primary="Create Booking" />
                            </ListItem>
                            <ListItem button onClick={showViewBookings} sx={{ pl: 4, color: activeComponent === 'viewBookings' ? '#00ACC1' : '#ccc' }}>
                                <ListItemText primary="View Bookings" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>

                <Button
                    onClick={() => {
                        localStorage.removeItem('isAdmin');
                        navigate('/admin');
                    }}
                    variant="contained"
                    sx={{
                        margin: 2,
                        position: 'absolute',
                        bottom: 20,
                        width: 'calc(100% - 32px)',
                        bgcolor: '#F44336',
                        color: '#fff',
                        '&:hover': { bgcolor: '#D32F2F' },
                    }}
                >
                    Logout
                </Button>
            </Drawer>

            {/* Main Content Area */}
            <Box
                flex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    marginLeft: isMobile ? 0 : 30, // Adjust for desktop drawer
                    height: '100vh',
                    overflowY: "auto",
                    backgroundColor: '#263447',
                    padding: 3,
                }}
            >
                <Box
                    width="100%"
                    maxWidth={800}
                    p={4}
                    borderRadius={2}
                    boxShadow={3}
                    bgcolor="#1E2A38"
                    textAlign="center"
                    color="#ffffff"
                    sx={{ overflow: 'auto', maxHeight: '100%' }}
                >
                    {/* Render components based on active selection */}
                    {activeComponent === 'viewBlogs' && (
                        <>
                            <Typography variant="h4" sx={{ color: '#00ACC1', mb: 2 }}>View Blogs</Typography>
                            <ViewBlogs />
                        </>
                    )}
                    {activeComponent === 'viewBookings' && (
                        <>
                            <Typography variant="h4" sx={{ color: '#00ACC1', mb: 2 }}>View Bookings</Typography>
                            <ViewBookings />
                        </>
                    )}
                    {activeComponent === 'createBlogs' && (
                        <>
                            <Typography variant="h4" sx={{ color: '#00ACC1', mb: 2 }}>Create Blog</Typography>
                            <ManageBlogs />
                        </>
                    )}
                    {activeComponent === 'createBooking' && (
                        <>
                            <Typography variant="h4" sx={{ color: '#00ACC1', mb: 2 }}>Create Booking</Typography>
                            <ManageBookings />
                        </>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
