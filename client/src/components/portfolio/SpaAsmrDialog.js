import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SpaAsmrGif from '../../content/projects/spaAsmrGif.gif';


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

function SpaAsmrDialog(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={SpaAsmrGif} alt="Project" className={classes.img} />
            <br />
            <br />
            <Typography variant="headline" gutterBottom>
                Spa: ASMR (2018)
            </Typography>
            <br />
            <Typography variant="subheading" gutterBottom>
                <b>Technology:</b>  C#, .NET Core (Web API, MVC), Razor View Engine (CSHTML), JavaScript (jQuery), Bootstrap 4.0, SQL Server Express, Entity Framework, LINQ, OAUTH, gitHub, Visual Studio 2017 Community
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Date: </b>March, 2018
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Status:</b> <i>Finished (mostly), Never deployed</i>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Background:</b> This was a personal project that I expanded into an educational tool for self-study.  Spa: ASMR allows a user to log-in via social media and be presented with a list of ASMR videos based on the user's preferences.  The user may save videos to a personal list of favorite videos.  All functionality works locally; never deployed.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Source Code: 
                <a 
                href="https://github.com/sbogucki12/SpaASMR2018"
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

SpaAsmrDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpaAsmrDialog);