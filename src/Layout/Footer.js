import * as React from 'react';
import Link from '@material-ui/core/Link';
import LayoutStyles from './LayoutStyle'
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    const classes = LayoutStyles();
    return (
        <>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center"  gutterBottom>
                    Edited by Sulthan Sidayu
                </Typography>
                <Typography variant="body2" align="center">
                  {'Copyright © '}
                  <Link color="inherit" href="https://prosigmaka.com/">
                    PT. Pro Sigmaka Mandiri
                  </Link>{' '}
                  {new Date().getFullYear()}
                </Typography>
            </footer>
        </>
    );
};
export default Footer;
