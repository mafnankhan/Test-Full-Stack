import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';

import makeClasses from '../styles';

const Header: React.FC = () => {
    const classes = makeClasses();
    return (
        <>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={.2} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <img
                        src={require('../images/blonk-blue.png')}
                    />
                    <Box display="flex" className={classes.toolbarFlex}>
                        <Button href="#" color="primary" variant="outlined" className={classes.toolbarBtn}>
                        <Icon className="fas fa-sign-out-alt" style={{ color: 'white', "margin-right": "8px" }}  />
                        S'identifier
                        </Button>
                        <Avatar>H</Avatar>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;