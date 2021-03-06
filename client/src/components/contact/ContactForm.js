import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import "../../App.css";

const theme = createMuiTheme({
	palette: {
	  primary: cyan,
	  tonalOffset: 0.1,
	},
  });

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class ContactForm extends React.Component {
    state = {
      name: '',
      email: '',
      emailError: '',
      multiline: '',
      phone: '',
      open: false,
    };

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,        
      });      
    };

    validate = () => {
      let isError = false;
      const errors = {
        emailError: ""
      };

      if(this.state.email.indexOf("@") === -1){
        isError = true; 
        errors.emailError = "Email must contain @ symbol."
      }

      if(isError){
        this.setState({
          ...this.state, 
          ...errors
        });
      }
      return isError; 
    }

    handleClick = (e) => {
        e.preventDefault();
        const err = this.validate();
        if(!err){
          axios.post('/submitMessage',{
            name: this.state.name, 
            email: this.state.email,         
            phone: this.state.phone, 
            message: this.state.multiline
          })
  
          this.setState({ open: true });
        }
        
    };
    
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ open: false });
    };

    render() {
      const { classes } = this.props;      

      return (
        <MuiThemeProvider theme={theme}>
          <div>
            <form className={classes.container} noValidate autoComplete="off" >
                <TextField
                id="name"
                label="Name"
                placeholder="First LastName"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
                />
                <TextField
                id="email"
                label="Email"
                placeholder="name@email.com"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
                helperText={this.state.emailError}
                />
                <TextField
                id="phone"
                label="Phone"
                placeholder="(555) 123-4567"
                className={classes.textField}
                value={this.state.phone}
                onChange={this.handleChange('phone')}
                margin="normal"
                />
                <TextField
                id="multiline-flexible"
                label="Message"
                placeholder="Your message here."
                multiline
                rowsMax="10"
                value={this.state.multiline}
                onChange={this.handleChange('multiline')}
                className={classes.textField}
                margin="normal"       
                />
            
            
        </form>
        <Button 
          variant="outlined" 
          color="primary" 
          className={classes.button}
          onClick={this.handleClick}
          type="submit"
        >
            Send
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Message Sent</span>}
          action={
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
            <CloseIcon />
            </IconButton>
          }
        />
        </div>
        </MuiThemeProvider>
       )
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ContactForm);