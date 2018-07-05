import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../../App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
    a: {
        color: cyan,
    },
    palette: {
        primary: cyan,         
     },
});

const styles = theme => ({
    root: {
        borderColor: '#4DD0E1'
    },   
  });

class UpdateJuly4Dialog extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
      <MuiThemeProvider theme={theme}>
        <Button className={classes.root} onClick={this.handleClickOpen('paper')}>
            <Typography variant="display3" gutterBottom>
                Click here to continue ...
            </Typography>
            
        </Button>
       </MuiThemeProvider> 
        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
            <DialogTitle id="scroll-dialog-title">
                <span className="bogoodski">Update - July 4, 2018</span>
            </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Test
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(UpdateJuly4Dialog);