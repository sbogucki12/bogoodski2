import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UpdateJuly4Dialog from './UpdateJuly4Dialog';

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

  function UpdateJuly4(props) {
        const { classes } = props;
        return(
          
        <div>
        <br />
            <Grid container spacing={24} className={classes.root}>
                <Grid >
                    <Paper className={classes.paperRoot} elevation={8}> 
                        Date Picture Lead-in        
                        <br />
                        <UpdateJuly4Dialog />
                    </Paper>
                </Grid>     
            </Grid>
        </div>
      )
  }

  export default withStyles(styles)(UpdateJuly4);