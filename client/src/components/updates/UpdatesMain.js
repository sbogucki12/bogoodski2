import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UpdateJuly8 from './UpdateJuly8';
import UpdateGetArchives from './UpdatesGetArchives';


const styles = theme => ({
    root: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    paperRoot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }, 
  });

  function UpdatesMain(props) {
        const { classes } = props;
        return(
          
        <div>
        <br />
            <Grid container spacing={8} className={classes.root}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <Paper className={classes.paperRoot} elevation={8}> 
                        <UpdateJuly8 /> 
                        <br />                      
                    </Paper>  
                </Grid>
                <Grid item xs={1} />
                <br />      
                 
                <Grid item xs={1} />
                <Grid item xs={10}>                    
                    <Paper className={classes.paperRoot} elevation={8}> 
                        <UpdateGetArchives />
                    </Paper>    
                </Grid> 
                <Grid item xs={1} />
            </Grid>
        </div>
      )
  }

  export default withStyles(styles)(UpdatesMain);