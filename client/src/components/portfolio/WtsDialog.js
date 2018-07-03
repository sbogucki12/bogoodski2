import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WtsImage from '../../content/projects/wtsImage.jpg';

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

function WtsDialog(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={WtsImage} alt="Project" className={classes.img} />
            <br />
            <br />
            <Typography variant="headline" gutterBottom>
                Work Tracking System 
            </Typography>
            <br />
            <Typography variant="subheading" gutterBottom>
                <b>Technology:</b> C#, .NET Core (Web API), JavaScript (AngularJS), SQL Server Express (and on Azure), Entity Framework, Bootstrap, Visual Studio 2017 (Community), gitHub, Visual Studio Team Services 
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Date: </b>Oct., 2017
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Status:</b> <i>Inactive</i>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Background:</b> I built this for two reasons: 1. As a proof-of-concept to replace an existing system (that operated in an Access database!) at my previous office, and 2. As the final project for my bootcamp. Entire project was successfully deployed to Azure. Including the SQL Server database which was originally built locally via SQL Server Express and then deployed via the Microsoft Data Migration tool.  Site has been taken down in order to manage costs.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Source Code: 
              <a 
              href="https://github.com/sbogucki12/WorkTrackingSystem"
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

WtsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WtsDialog);