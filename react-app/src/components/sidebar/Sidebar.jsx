import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {CssBaseline, Divider, Drawer, Hidden, List} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {useDashboardTabs} from "./hooks";
import Tab from "./components/Tabs";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        background: theme.palette.primary.main,
        color: '#fff',
        padding: '0 !important',
        border: 'unset'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

const Sidebar = (props) => {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const dashboardTabs = useDashboardTabs();
    const theme = useTheme();
    const classes = useStyles();
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);


    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {
                    _.map(dashboardTabs, ({text, index, Icon, route}) => (
                        <Tab key={index} text={text} Icon={Icon} route={route}/>
                    ))
                }
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

Sidebar.propTypes = {
    window: PropTypes.func,
};

export default Sidebar;