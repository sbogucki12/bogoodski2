import React, { Component } from 'react';
import './App.css';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Main from './components/main/Main';
import Landing from './components/landing/Landing';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
	palette: {
	  primary: cyan,
	},
  });

const styles = theme => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			firstTime: true,
		};
		this.toggleVisited = this.toggleVisited.bind(this);
	}

	toggleVisited = () => {
		this.setState({
			firstTime: false
		});
	};

	render() {

		if(this.state.firstTime){
			return (<div><CssBaseLine /><Landing click={this.toggleVisited}/></div>)
		} else {
			return (<div><CssBaseLine /><MuiThemeProvider theme={theme}><Main /></MuiThemeProvider></div>)
		}
	}
}

export default withStyles(styles)(App);
