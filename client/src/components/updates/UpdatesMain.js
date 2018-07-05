import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UpdateJuly4 from './UpdateJuly4';
import UpdateGetArchives from './UpdatesGetArchives';


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

  function UpdatesMain(props) {
        const { classes } = props;
        return(
          
        <div>
        <br />
            <Grid container spacing={24} className={classes.root}>
                <Grid item>
                    <Paper className={classes.paperRoot} elevation={8}> 
                        <UpdateJuly4 />                       
                    </Paper>    
                </Grid> 
                <Grid item>
                    <Paper className={classes.paperRoot} elevation={8}> 
                        <UpdateGetArchives />                       
                    </Paper>    
                </Grid>     
            </Grid>
        </div>
      )
  }

  export default withStyles(styles)(UpdatesMain);