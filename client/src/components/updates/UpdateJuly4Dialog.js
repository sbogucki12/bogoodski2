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
import SemanticGif from '../../content/images/updateimages/semanticgif.gif';

const theme = createMuiTheme({
   primary: cyan[100],
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
                <span className="bogoodski">Update - July 4, 2018</span>
            </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="body1" gutterBottom>
                Wanting a place to practice implementing some front-end tools, such as design libraries and components, I created a sandbox repository on <a href="https://github.com/sbogucki12/bogoodskisandbox" target="_blank" rel="noreferrer noopener">GitHub</a>, published to <a href="https://pristine-sequoia-74948.herokuapp.com/" target="_blank" rel="noreferrer noopener">Heroku</a>.  Currently, I am using that sandbox app to practice implementing the Semantic UI library into a ReactJS app.  The Heroku app is basically a Create-React-App supported by a Node.js/ExpressJS server; the server isn’t essential now but will accommodate future expansion and allow me to focus then on my experimentation and practice without the headwind of having to build support architecture.
                <br />
                <br />
                
                <center><img src={SemanticGif} alt="Semantic Project" /></center>
                
                <br />
                
                At my previous office with the Federal Aviation Administration, I managed a program where civilian aerospace engineers conducted regulatory inspections on behalf of the government.  Those engineers are known as Designee Engineering Representatives or "DERs", and the FAA maintains a directory of those DERs online in a PDF.  I have a plan to consolidate that data, store in a database (likely SQL in the Azure cloud), and create a client application that allows searching and filtering of that directory. 
                
                <br /> 
                <br />
                I am registered to attend the Y Combinator “Work at a Startup” event in Mountain View at the end of the month.  I’m going to drive up there, attend the event, and spend the night.  I’m really looking forward to it! 
                
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

export default UpdateJuly4Dialog;