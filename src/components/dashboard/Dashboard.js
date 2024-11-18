import React from 'react';
import { Button, Box, Drawer, List, ListItem, ListItemText, Collapse, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ViewBlogs from './blog/ViewBlogs';
import ViewBookings from './booking/ViewBooking';
import ManageBookings from './booking/ManageBookings';
import ManageBlogs from './blog/ManageBlogs';

const Dashboard = () => {
    const [openBlogs, setOpenBlogs] = React.useState(true);
    const [openBookings, setOpenBookings] = React.useState(true);
    const navigate = useNavigate();
    const [activeComponent, setActiveComponent] = React.useState("viewBlogs");

    const showViewBlogs = () => setActiveComponent('viewBlogs');
    const showViewBookings = () => setActiveComponent('viewBookings');
    const showCreateBlogs = () => setActiveComponent('createBlogs');
    const showCreateBookings = () => setActiveComponent('createBooking');

    return (
        <Box display="flex" height="100vh" bgcolor="#1E2A38" >
            {/* Sidebar Drawer */}
            <Drawer
                variant="permanent"
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
                <Typography variant="h5" align="center" sx={{ color: "#00ACC1", fontWeight: 600, mb: 2 }}>
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
                marginLeft={30}

                sx={{height: '100vh', overflowY:"auto", backgroundColor: '#263447', padding: 3 }}
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
                    sx={{overflow: 'auto', maxHeight: '100%'}}
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
