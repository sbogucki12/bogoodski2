import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TwitterWidget from './TwitterWidget';
import Paper from '@material-ui/core/Paper';
import devBoodSkiIg from '../../content/images/devBogoodskiIg.JPG';

const styles = theme => ({
    root:       {
        justifyContent: 'center',
    },
    paperRoot:  {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    ig:         {
        maxWidth: '200px !important'
    }
  });

  function SocialMain(props) {
        const { classes } = props;
        
        return (          
        <div>
            <br />
            <Grid container spacing={8} className={classes.root} align='center'>
                <Grid item xs={1} sm={3} />
                <Grid item xs={10} sm={6}>
                    <Paper className={classes.paperRoot} elevation={8}>
                        <Grid container spacing={0} align='center'>
                            <Grid item xs={1} />
                            <Grid item xs={10}>
                                <TwitterWidget />
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>                        
                    </Paper>    
                </Grid>                
                <Grid item xs={1} sm={3} />
            </Grid>    
            <br />
            <Grid container spacing={0} className={classes.root} align='center'>
                <Grid item xs={1} sm={3} />
                <Grid item xs={10} sm={6} >
                    <Paper className={classes.paperRoot} elevation={8}>
                        <a 
                        href='https://www.instagram.com/devbogoodski/'
                        target='_blank'
                        rel='noreferrer noopener'
                        >      
                            <img src={devBoodSkiIg} alt='DevBoGoodSki Instagram' className={classes.ig} />
                        </a> 
                    </Paper>    
                </Grid>
                <Grid item xs={1} sm={3} />
            </Grid>
        </div>
      )
  }

  export default withStyles(styles)(SocialMain);