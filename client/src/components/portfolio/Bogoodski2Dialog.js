import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Bogoodski2Img from '../../content/projects/bogoodski2img.gif';

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

function Bogoodski2Dialog(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={Bogoodski2Img} alt="Project" className={classes.img} />
            <br />
            <br />
            <Typography variant="headline" gutterBottom>
                BoGoodSki.com (2.0)
            </Typography>
            <br />
            <Typography variant="subheading" gutterBottom>
                <b>Technology:</b> ReactJS, Material-UI, Node.js, ExpressJS, MongoDB(mLab), Mongoose, Heroku (via CLI/git), gitHub, VSCode
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Date:</b> July, 2018
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Status:</b> <i>Active</i>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Background:</b> This was originally a rebuild of my resume site, with the intent of fully incorporating the Material-UI library.  It has since expanded into my full portfolio site. It's also the site that you are currently visiting. I'll soon redirect the BoGoodSki.com domain so that it refers here.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Source Code: 
                <a 
                href="https://github.com/sbogucki12/bogoodski2" 
                target="_blank"
                rel="noreferrer noopener">
                    gitHub
                </a>
            </Typography>
            <br />
          </Paper>
        </Grid>        
      </Grid>
    </div>
  );
}

Bogoodski2Dialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bogoodski2Dialog);