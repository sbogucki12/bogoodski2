import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import HomeBioCard from './HomeBioCard/../HomeBioCard';

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
				<HomeBioCard />
			</div>
		);
	}
}

HomeMain.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeMain);
