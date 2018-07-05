import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
        color: '#4DD0E1',
    }     
  });

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class UpdatesGetArchives extends React.Component {
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
        <Button 
        className={classes.button}
        color="primary" 
        onClick={this.handleClickOpen}>
            Previous Updates
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"There currently are no other updates.  Check back soon!"}
          </DialogTitle>          
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(UpdatesGetArchives);