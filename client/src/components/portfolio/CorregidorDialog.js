import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CorregidorThumb from '../../content/projects/corregidorThumb.JPG';

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

function CorregidorDialog(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={CorregidorThumb} alt="Project" className={classes.img} />
            <br />
            <br />
            <Typography variant="headline" gutterBottom>
                Corregidor Services 
            </Typography>
            <br />
            <Typography variant="subheading" gutterBottom>
                <b>Technology:</b> JavaScript (Angular 5), Boostrap, VSCode, gitHub, AWS S3
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Date: </b>January, 2018
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Status:</b> <i>Inactive / Incomplete</i>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Background:</b> Before I switched to focusing more primarily on ReactJS, I began this project to expand my skills with Angular.  The site would also potentially serve as the LLC site for my independent web development company.  Other priorities superseded the completion of this one.  I may return to it. It's currently (and temporarily) published to an S3 bucket on AWS.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Source Code: 
              <a 
              href="https://github.com/sbogucki12/corregidor"
              target="_blank"
              rel="noreferrer noopener">
                gitHub
              </a>
            </Typography>
            <br />
            <Button 
            variant="contained" 
            color="primary"
            href="http://corregidor-services.s3-website-us-west-1.amazonaws.com/" 
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

CorregidorDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CorregidorDialog);