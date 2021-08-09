import React, { HTMLAttributes } from 'react';
import Box from '@material-ui/core/Box';
import makeClasses from '../styles';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const ContentContainer: React.FC<Props> = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const classes = makeClasses();
    return (
      <Box className={classes.Container}>
        <div className={classes.innerContainer}>{children}</div>
      </Box>
    );
};

export default ContentContainer;
