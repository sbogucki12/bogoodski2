import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TwitterWidget from './TwitterWidget';
import InstagramWidget from './InstagramWidget';


const styles = theme => ({
    root: {
        justifyContent: 'center',
    }
  });

  const SocialMain = theme => {
     
      return(
        <div>
        <br />
            <Grid container spacing={24} styles={styles.root}>
                <Grid item xs={1} />
                <Grid item xs={10} lg={4}>
                    <TwitterWidget />
                </Grid>
                <Grid item xs={1} lg={false} />
                <Grid item xs={1} lg={false} />
                <Grid item xs={10} lg={4}>
                    <InstagramWidget />
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </div>
      )
  }

  export default withStyles(styles)(SocialMain);