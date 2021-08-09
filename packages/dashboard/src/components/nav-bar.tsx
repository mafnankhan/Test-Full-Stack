import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import makeClasses from '../styles';

interface Props {
  name: String;
}

const Navbar: React.FC<Props> = (props) => {
    const { name } = props;
    const classes = makeClasses();
    return (
      <Box display="flex" className={classes.navbar}>
        <Typography className={classes.navbarPage}>{name}</Typography>
        <Typography align="center" className={classes.navbarTypo}>{'Home > ' + name}</Typography>
      </Box>
    );
}

export default Navbar;