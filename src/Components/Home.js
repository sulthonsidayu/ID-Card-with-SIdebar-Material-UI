import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import useStyles from './Style'

function Home() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h1"
              align="center"
              gutterBottom
            >
             Selamat Datang di Aplikasi Kami!
            </Typography>
          </Container>
          <br></br>
          <br></br>
          <Container maxWidth="md">
            <Typography variant="h3" align="center" paragraph>
              Aplikasi ini dibuat untuk mempermudah anda dalam mencetak id card anda
            </Typography>
          </Container>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Container>
            <Typography variant="h5" align="center" paragraph>
              Silahkan klik link di bawah ini untuk membuat ID Card anda 
            </Typography>
            <br></br>
            <Typography variant="h6" align="center" paragraph>
              {'>> '}
              <Link color="inherit" href="/main/form">
                 <u>Go to Form Creator</u>
              </Link>{' <<'}
            </Typography>
          </Container>
        </div>

    </React.Fragment>
    
  );
}

export default Home;
