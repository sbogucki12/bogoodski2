import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import UpdateJuly4Dialog from './UpdateJuly4Dialog';
import SemanticThumb from '../../content/images/updateimages/semanticthumb.JPG';

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

  function UpdateJuly4(props) {
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
                            <span className="bogoodski">July 4, 2018</span> - Began development on a new React project that implements the Semantic-UI library.  Also, brainstorming a future project that will harness an available online library of data and add access tools to make that data library more user-friendly (This will be a .NET/SQL project).
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <br />
                            <img src={SemanticThumb} className={classes.image} alt="Update Thumbnail" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} />       
                <br />
                <Grid item xs={1}/>
                <Grid item xs={10}>
                    <UpdateJuly4Dialog />
                </Grid>
                <Grid item xs={1} />
            </Grid>
        </Paper>
        </div>
      )
  }

  export default withStyles(styles)(UpdateJuly4);