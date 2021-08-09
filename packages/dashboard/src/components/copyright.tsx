import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import makeClasses from '../styles';

const Copyright: React.FC = () => {
    const classes = makeClasses();
    return (
      <Typography align="center" className={classes.typography}>
        {'© '}
        <Link color="inherit" href="#" className={classes.link}>
          Blonk Group
        </Link>{' '}
        {new Date().getFullYear()}
        {'. All rights reserved'}
      </Typography>
    );
}

export default Copyright;