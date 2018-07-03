import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PomrGif from '../../content/projects/pomrGif.gif';
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
      maxWidth: '170px',
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

function PomrDialog(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={PomrGif} alt="Project" className={classes.img} />
            <br />
            <br />
            <Typography variant="headline" gutterBottom>
                Path of Maximum Resistance
            </Typography>
            <br />
            <Typography variant="subheading" gutterBottom>
                <b>Technology:</b> JavaScript (ReactJS) via Create-React-App, React Router, Webpack, Bootstrap 4.0, ReactStrap, VSCode, gitHub, Heroku (via CLI/git)
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Date: </b> June, 2018
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Status:</b> <i>Active</i>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Background:</b> This is the official app for a series of video logs, "MaxResistanceBlog.com".  
            </Typography>
            <Typography variant="body1" gutterBottom>
              Source Code: 
              <a 
              href="https://github.com/sbogucki12/maximum_resistance"
              target="_blank"
              rel="noreferrer noopener">
                gitHub
              </a>
            </Typography>
            <br />
            <Button variant="contained" 
            color="primary"
            href="https://maxresistance.herokuapp.com/" 
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

PomrDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PomrDialog);