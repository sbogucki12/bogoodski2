import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TwitterWidget from './TwitterWidget';
import InstagramWidget from './InstagramWidget';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    root: {
        justifyContent: 'center',
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }, 
  });

  function SocialMain(props) {
        const { classes } = props;
        return(
          
        <div>
        <br />
            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={1} md={2} lg={4}/>
                <Grid item xs={10}  md={8} lg={4}>
                    <Paper className={classes.paperRoot} elevation={8}>
                        <TwitterWidget />
                    </Paper>    
                </Grid>
                <Grid item xs={1} md={2} lg={4} />

                <Grid item xs={1} md={2} lg={4} />
                <Grid item xs={10} md={8} lg={4} >
                    <Paper className={classes.paperRoot} elevation={8}>
                        <center><InstagramWidget /></center>
                    </Paper>    
                </Grid>
                <Grid item xs={1} md={2} lg={4} />
            </Grid>
        </div>
      )
  }

  export default withStyles(styles)(SocialMain);