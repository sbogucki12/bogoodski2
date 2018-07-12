import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../App.css';
import Typography from '@material-ui/core/Typography';
import Bogoodski2 from './Bogoodski2Project';
import Bogoodski1 from './Bogoodski1Project';
import SpaAsmr from './SpaAsmrProject';
import Corregidor from './CorregidorProject';
import BogoodskiPortfolio from './BogoodskiPortfolio';
import Angular4Portfolio from './Angular4Portfolio';
import WtsProject from './WtsProject';
import MetaBlogProject from './MetaBlogProject';
import PomrProject from './PomrProject';
import AcoPortalProject from './AcoPortalProject';

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
        <Grid item xs={1} />
        <Grid item xs={10} className={classes.center}>
            <Typography variant="display2" gutterBottom>
                <span className="bogoodski">Selected Projects</span>
            </Typography>
            
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <AcoPortalProject />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <Bogoodski2 />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <Bogoodski1 />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <SpaAsmr />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <Corregidor />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <BogoodskiPortfolio />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <Angular4Portfolio />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <WtsProject />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <MetaBlogProject />
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
            <PomrProject />
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