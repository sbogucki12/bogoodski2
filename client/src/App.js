import React, { Component } from 'react';
import './App.css';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Main from './components/main/Main';
import Landing from './components/landing/Landing';

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
	}

	toggleVisited() {
		this.setState({
			firstTime: false,
		});
	}

	render() {
		const firstTime = this.state.firstTime;
		return (
			<div style={styles.root}>
				<CssBaseLine />
				{firstTime ? (
					<div
						onClick={() => {
							this.toggleVisited();
						}}
					>
						<Landing />
					</div>
				) : (
					<Main />
				)}
			</div>
		);
	}
}

export default App;
