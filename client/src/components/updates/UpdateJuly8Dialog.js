import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import '../../App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
   primary: cyan[100],
});

class UpdateJuly8Dialog extends React.Component {
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
    return (
      <div>
      <MuiThemeProvider theme={theme}>
        <Button onClick={this.handleClickOpen('paper')}>
            <Typography variant="caption" gutterBottom>
                Click to read the rest of this update ...
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
                <span className="bogoodski">Update - July 8, 2018</span>
            </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="body1" gutterBottom>
                The next addition to this app will be a "Sandbox" component.  I'll use that to practice implementation of different things on which I'm working, new technologies that I'm learning, and old skills that I want to refresh.  
                <br /> 
                <br />
                The first thing I want to do in the Sandbox component is implement a simple form that sends data back to a .NET Core Web API controller, which returns that data after some trivial manipulation.  The point of the exercise would simply be to practice using the .NET Controller class, ActionResult return types and just get back into the “Microsoft” way of thinking after having been focused on Node.js/Express for the recent past.  
                <br />
                <br />               
                I’m trying to avoid deploying to Azure.  My old Azure account quickly became expensive.  I haven’t discovered a perfect way of publishing .NET Core to Heroku yet.  That difficulty is sort of welcome because I’ve gained valuable knowledge of Docker images, containers, and buildpacks during my struggles wrestling .NET Core onto Heroku.    
                <br /> 
              </Typography>
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

export default UpdateJuly8Dialog;