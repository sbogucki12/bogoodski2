import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BogoodskiPortfolioThumb from '../../content/projects/bogoodskiPortfoliothumb.jpg';

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

function BogoodskiPortfolioDialog(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <img src={BogoodskiPortfolioThumb} alt="Project" className={classes.img} />
            <br />
            <br />
            <Typography variant="headline" gutterBottom>
                BoGoodSki (Old) Portfolio 
            </Typography>
            <br />
            <Typography variant="subheading" gutterBottom>
                <b>Technology:</b> .NET MVC (Razor View Engine), Bootstrap, JavaScript (jQuery), Azure, data from the Weather Underground API
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Date: </b> Dec., 2017
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Status:</b> <i>Complete, Inactive</i>
            </Typography>
            <br />
            <Typography variant="body1" gutterBottom>
                <b>Background:</b> This was my original portfolio site.  .NET backend with views rendered via the Razor View Engine in .CSHTML files.  The site was deployed successfully to Microsoft Azure, but was taken down in order to manage costs.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Source Code: 
              <a 
              href="https://github.com/sbogucki12/BoGoodSkiPortfolio"
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

BogoodskiPortfolioDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BogoodskiPortfolioDialog);