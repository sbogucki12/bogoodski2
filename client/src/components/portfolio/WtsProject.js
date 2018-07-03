import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WtsDialog from './WtsDialog';
import WtsThumb from '../../content/projects/wtsThumb.jpg';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,      
    },
    gridRoot: {
        flexGrow: 1,
      },
    center: {
      textAlign: 'center',
      width: '100%',
    }, 
    img: {
      maxWidth: '98px',
      maxHeight: '98px',
    }
  });

class WtsProject extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    
    const { classes } = this.props;

    return (
      <div>
        <Grid container className={classes.gridRootroot} spacing={0}>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Paper className={classes.root} elevation={1}>
                  <Grid container spacing={8}>
                    <Grid item xs={12}>
                      <Button 
                      onClick={this.handleClickOpen}
                      className={classes.center}
                      >
                        Work Tracking System [.NET Core, AngularJS, Boostrap, SQL, Entity Framework] - Oct., 2017
                      </Button>
                    </Grid>
                    <br />
                    <Grid item xs={12} className={classes.center}>
                      <img src={WtsThumb} alt="Project" className={classes.img} />
                    </Grid>
                  </Grid>  
                    <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    >  
                      <DialogContent>
                        <WtsDialog />
                      </DialogContent>
                    </Dialog>
                </Paper>
            </Grid>
            <Grid item xs={1} />    
        </Grid>
      </div>
    );
  }
}

WtsProject.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(WtsProject);