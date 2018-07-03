import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Bogoodski1Gif from '../../content/projects/bogoodski1gif.gif';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
      maxWidth: '180px',
      maxHeight: '250px',
  },
  button: {
    margin: theme.spacing.unit,
    background: 'linear-gradient(45deg, #4ca1af 30%, #c4e0e5 90%)',
		borderRadius: 3,
		border: 0,
		color: 'white',
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px lightgray',
  },
  input: {
    display: 'none',
  },
});

function Bogoodski1Dialog(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={Bogoodski1Gif} alt="Project" className={classes.img} />
            <br />
            <br />
            <Typography variant="headline" gutterBottom>
                BoGoodSki - Resume 
            </Typography>
            <br />
            <Typography variant="subheading" gutterBottom>
                <b>Technology:</b> JavaScript (ReactJS), Material-UI, ReactStrap, React Router, Heroku, VSCode
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Date</b>: May, 2018
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Status:</b> <i>Active-ish</i>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Background:</b> This was my original resume site.  I no longer update the design or refactor the code, but I do sometimes update the content.  I'll soon be transferring the Bogoodski.com domain so that it refers to the site you are currently visiting. 
            </Typography>
            <Typography variant="body1" gutterBottom>
                Source Code:
                <a 
                href="https://github.com/sbogucki12/resume"
                target="_blank"
                rel="noreferrer noopener">
                 gitHub
                </a>
            </Typography>
            <br />
            <Button 
            variant="contained" 
            color="primary"
            href="https://resumebogucki.herokuapp.com/" 
            target="_blank"
            rel="noreferrer noopener"
            className={classes.button}>
              Visit
            </Button>
          </Paper>
        </Grid>        
      </Grid>
    </div>
  );
}

Bogoodski1Dialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bogoodski1Dialog);