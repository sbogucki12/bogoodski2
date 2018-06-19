import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import meWork from '../../content/images/MeWork.jpg';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    title: 'Biography Image',       
  }),
  image: {
      maxHeight: 300,
      opacity: '0.5',
  }, 
});

function HomeBioCard(props) {
  const { classes } = props;
  return (
    <Grid container spacing={0}>
        <Grid  />
        <Grid item xs={12}>
            <Paper className={classes.root} elevation={16}>
            <Grid container spacing={0}>
            <Grid item xs={9}>
                <Grid item xs={1}>
                    <Typography variant="headline" component="h3">
                        <span className="bogoodski">BoGoodSki</span>
                    </Typography>
                </Grid>
                <Grid item xs={11}>
                    <Typography variant="caption" component="p">
                    <p>Born near Philadelphia, raised in North Dakota, this full-stack web developer got his professional coding career started building .NET websites using MVC and Web API, supported by SQL Server databases.  He now prefers building with the MongoDB/Mongoose, Node/Express, React stack, and is currently seeking full-time employment, preferably in a start-up environment.</p> 
                   
                    <p>He enjoys fitness, especially daily running, is always accompanied by world’s greatest dog, Roux, and lives for electronic music; especially trance.  Currently in Long Beach, he dreams of relocating to Santa Monica or Las Vegas.</p> 
                    
                    <p><i>“Go (USF) Bulls! And Trust The Process.”</i></p>
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid item xs={12}>
                    <img src={meWork} alt={classes.root.title} className={classes.image} />
                </Grid>
            </Grid>
        </Grid>
        </Paper>
        </Grid>
        <Grid  />
    </Grid>   
  );
}

HomeBioCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeBioCard);