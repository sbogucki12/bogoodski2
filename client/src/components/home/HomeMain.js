import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import HomeCard from './HomeCard/../HomeCard';

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		height: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	heading: {
		textAlign: 'center',
	},
});

class HomeMain extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container spacing={24}>
					<Grid item lg={4} md={4} sm={4} />
					<Grid item lg={4} md={4} sm={4}>
						<div>
							<HomeCard />
						</div>
					</Grid>
					<Grid item lg={4} md={4} sm={4} />
				</Grid>
			</div>
		);
	}
}

HomeMain.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMain);
