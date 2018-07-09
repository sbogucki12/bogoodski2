import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UpdateJuly8Dialog from './UpdateJuly8Dialog';
import July8Thumb from '../../content/images/updateimages/july8thumb.JPG';

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
    image: {
        maxWidth: '96px',
        maxHeight: '96px',
    }
  });

  function UpdateJuly8(props) {
        const { classes } = props;
       
        return(          
        <div>
            <br />
            <Paper className={classes.paperRoot} elevation={8}> 
                <Grid container spacing={8} className={classes.root}>
                    <Grid item xs={1}/>
                    <Grid item xs={10} className={classes.root}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={8}>
                            <br />
                                <span className="bogoodski">July 8, 2018</span> - Working on a .NET Core Web API deployment to Heroku.
                            </Grid>
                            <Grid item xs={12} sm={4}>                            
                                <img src={July8Thumb} className={classes.image} alt="Update Thumbnail" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} />      
                    
                    <Grid item xs={1}/>
                    <Grid item xs={10}>
                        <UpdateJuly8Dialog />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Paper>
        </div>
      )
  }

  export default withStyles(styles)(UpdateJuly8);