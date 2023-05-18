import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,    
    },
    appBar: {
        boxShadow: "none",
        position: 'static',
        backgroundColor: "transparent",    
    },
    toolbar: {

    },
    sectionMenuIcon: {
        position: 'static',
        right: '0px',
    },
    sectionMobile: {
        marginLeft: theme.spacing(2),
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
            position: 'absolute',
            right: '0px',
            
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            position: 'absolute',
            right: '0px',
        },
    },
    desktopButton: {
        background: "rgba(255,255,255, 0.6)", 
        marginLeft: 3,
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
  
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

   
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>

                <Button aria-label="About Me" href='/yodev/' >About Me</Button>

            </MenuItem>

            <MenuItem>

                <Button aria-label="Projects" href='/yodev/projects'>Projects</Button>

            </MenuItem>

        </Menu>
    );

    return (
        <div className={classes.grow}>

            <AppBar className={classes.appBar}>

                <Toolbar className={classes.toolbar}>

                    <IconButton
                        edge="start"
                        className={classes.sectionMobile}
                        aria-label="open drawer" aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                    >
                        <MenuIcon className={classes.sectionMenuIcon}/>
                    </IconButton>

                    <div className={classes.sectionDesktop}>

                        <Button className={classes.desktopButton} aria-label="About Me" href='/'>About Me</Button>

                        <Button className={classes.desktopButton} aria-label="Projects" href='/projects'>Projects</Button>

                    </div>

                </Toolbar>

            </AppBar>
            {renderMobileMenu}
        </div>
    );
}