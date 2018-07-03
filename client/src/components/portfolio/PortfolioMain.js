import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProjectTemplate from './ProjectTemplate';
import '../../App.css';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  center: {
      textAlign: 'center',
  }  
});

function PortfolioMain(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={2} />
        <Grid item xs={8} className={classes.center}>
            <Typography variant="display2" gutterBottom>
                <span className="bogoodski">Selected Projects</span>
            </Typography>
            
        </Grid>
        <Grid item xs={2} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <ProjectTemplate />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <ProjectTemplate />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <ProjectTemplate />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <ProjectTemplate />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <ProjectTemplate />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <ProjectTemplate />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}

PortfolioMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioMain);