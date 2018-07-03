import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MetaBlogThumb from '../../content/projects/metaBlogThumb.jpg';
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

function MetaBlogDialog(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={MetaBlogThumb} alt="Project" className={classes.img} />
            <br />
            <br />
            <Typography variant="headline" gutterBottom>
                Meta Blog
            </Typography>
            <br />
            <Typography variant="subheading" gutterBottom>
                <b>Technology:</b>  JavaScript (Node.js), ExpressJS, Heroku, HTML, VSCode, gitHub
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Date: </b> Jan., 2018
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Status:</b> <i>Inactive</i>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Background:</b> I built this as a personal project to practice implementing a super simple Node.js (ExpressJS) server, which I used to share a few 100% static HTML files.  The project is deployed to Heroku, but is no longer updated.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Source Code: 
              <a 
              href="https://github.com/sbogucki12/metablog"
              target="_blank"
              rel="noreferrer noopener">
                gitHub
              </a>
            </Typography>
            <br />
            <Button variant="contained" 
            color="primary"
            href="https://meta-blog.herokuapp.com/" 
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

MetaBlogDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MetaBlogDialog);