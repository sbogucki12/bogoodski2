import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Angular4Thumb from '../../content/projects/angular4Thumb.jpg';

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

function Angular4Dialog(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={Angular4Thumb} alt="Project" className={classes.img} />
            <br />
            <br />
            <Typography variant="headline" gutterBottom>
                Angular 4 Portfolio
            </Typography>
            <br />
            <Typography variant="subheading" gutterBottom>
                <b>Technology:</b> JavaScript (Angular 4), Bootstrap, AWS S3
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Date: </b> Dec., 2017
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Status:</b> <i>Inactive</i>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Background:</b> This was one of my first Angular, post-AngularJS, projects.  It was a sandbox that I used to practice two-way data binding. I gave it a quick USF-themed skin and pushed to an S3 bucket on AWS, just as a pseudo-staging phase; though I have no plans to do anything further with the site.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Source Code: 
              <a 
              href="https://github.com/sbogucki12/Angular4Portfolio"
              target="_blank"
              rel="noreferrer noopener">
                gitHub
              </a>
            </Typography>
            <br />
            <Button variant="contained" 
            color="primary"
            href="http://angular4portfolio.s3-website-us-west-1.amazonaws.com/" 
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

Angular4Dialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Angular4Dialog);