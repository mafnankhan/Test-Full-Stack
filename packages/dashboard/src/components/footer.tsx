import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Copyright from './copyright';

import makeClasses from '../styles';

const Footer: React.FC = () => {
    const classes = makeClasses();

    const [language, setLanguage] = React.useState('eng');

    const handleChange = (event: React.SyntheticEvent) => {
        setLanguage(event.target.value);
    };
    return (
        <Container maxWidth="100%" component="footer" className={classes.footer}>
            <Grid container spacing={6} className={classes.gridItem}>
                <Grid item xs={12} sm={7}>
                <img
                    src={require('../images/blonk-white.png')}
                    className={classes.img}
                />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Box display="flex" className={classes.socialIcons}>
                        <FacebookIcon fontSize="medium" className={classes.socialIcon}/>
                        <TwitterIcon fontSize="medium" className={classes.socialIcon}/>
                        <LinkedInIcon fontSize="medium" className={classes.socialIcon}/>
                        <InstagramIcon fontSize="medium" className={classes.socialIcon}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                        value={language}
                        onChange={handleChange}
                        >
                        <MenuItem value={'eng'}>English</MenuItem>
                        <MenuItem value={'frn'}>French</MenuItem>
                        <MenuItem value={'arb'}>Arabic</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} className={classes.footerTypo}>
                    <Typography align="center" className={classes.typography}>
                        TeleChargez I'application mobile Blonk
                    </Typography>
                    <Typography align="center" className={classes.footerInfo}>
                        Commencez a vous connector avec les gens et les emplois
                    </Typography>
                    <Box display="flex" className={classes.appstoreIcons}>
                        <img width="120px" height="50px" src={require('../images/apple-store.png')}/>
                        <img width="120px" height="50px" src={require('../images/google-store.png')}/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Copyright />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;