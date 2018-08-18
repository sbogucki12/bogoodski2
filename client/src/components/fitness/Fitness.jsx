import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { runPics } from './runPics';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    paperRoot:  {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      },
      image:    {
          width: '100%',
          maxWidth: '260px',
          maxHeight: '300px'
      }
});

const Fitness = (props) => {
    const { classes } = props;

    return(
        <React.Fragment>
            <Grid container spacing={8} align='center'>
                <Grid item xs={1} sm={3} />
                <Grid item xs={10} sm={6}>
                        <Paper className={classes.paperRoot} elevation={6}>
                        <Typography variant="title" gutterBottom>
                            <span className='bogoodski'>Last Five Runs:</span> 
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={1} sm={3} />
            </Grid>
            <br />
            <Grid container spacing={8} align='center'>
                <Grid item xs={1} sm={3} />
                <Grid item xs={10} sm={6}>
                    <Paper className={classes.paperRoot} elevation={6}> 
                        {runPics.map(runPic => (
                        <div key={runPic.name}>
                            <br />
                            <Paper className={classes.paperRoot} elevation={6}>
                                <Typography 
                                variant="title" 
                                gutterBottom
                                >
                                    {runPic.date}: 
                                </Typography>
                                <br />
                                <img src={runPic.image} alt={runPic.name} className={classes.image} />
                            </Paper>
                            <br />
                        </div>                     
                        ))}  
                    </Paper>
                </Grid>
                <Grid item xs={1} sm={3} />
            </Grid>
        </React.Fragment>
    )
}

export default withStyles(styles)(Fitness);

