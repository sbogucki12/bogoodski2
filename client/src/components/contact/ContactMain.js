import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import PdfIcon from '@material-ui/icons/PictureAsPdf';
import ContactForm from '../contact/ContactForm';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  }  
});

function ContactMain(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>


      <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper className={classes.paper1}>
          <Typography variant="headline" component="h3">
                <span className="bogoodski">Contact</span>
            </Typography>
            <Typography variant="caption" component="p">
                    Currently available for full-time employment. Or, to take on independent projects. Even side DJ gigs!
            </Typography>
            <br />
            <Typography variant="caption" component="p">
                    Feel free to submit inquiries or provide any comments or questions as you may wish.  You may also email, call, or text. 
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper className={classes.paper2}>
          <Grid container spacing={8}>
          <Grid item xs={12} lg={6} className={classes.paper1}><EmailIcon /></Grid>
          <Grid item xs={12} lg={6}><a href="mailto:stevebogucki12@gmail.com">stevebogucki12@gmail.com</a></Grid>
          <Grid item xs={12} lg={6} className={classes.paper1}><PhoneIcon /></Grid>
          <Grid item xs={12} lg={2}  className={classes.paper1}>(813) 446-6704</Grid> 
          <Grid item xs={12} lg={6} className={classes.paper1}><PdfIcon /></Grid>
          <Grid item xs={12} lg={2}  className={classes.paper1}><a href="https://www.scribd.com/document/380609063/Bogucki-Resume-Cover-Letter-Full-Stack-Web-Dev" target="_blank" rel="noreferrer noopener">Download Resume</a></Grid> 
          </Grid>         
          </Paper>
        </Grid>
        <Grid item xs={1} />

        <Grid item xs={1} />
        <Grid item xs={10}>
        <Paper className={classes.paper1}>
        <ContactForm />
        </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
}

ContactMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactMain);