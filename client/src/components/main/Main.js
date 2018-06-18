import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import MessageIcon from '@material-ui/icons/Message';
import EmailIcon from '@material-ui/icons/Email';
import CreateIcon from '@material-ui/icons/Create';
import HeadsetIcon from '@material-ui/icons/Headset';
import LanguageIcon from '@material-ui/icons/Language';
import Typography from '@material-ui/core/Typography';
import ResourceGrid from '../resourceGrid/ResourceGrid';
import ResumeMain from '../resume/ResumeMain';
import HomeMain from '../home/HomeMain';

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		height: '100%',
		backgroundColor: theme.palette.background.paper,
	},
});

class Main extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Tabs
						value={value}
						onChange={this.handleChange}
						scrollable
						scrollButtons="on"
						indicatorColor="#4ca1af"
						textColor="#4ca1af"
					>
						<Tab label="Home" icon={<HomeIcon />} />
						<Tab label="Resume" icon={<WorkIcon />} />
						<Tab label="Resources" icon={<SchoolIcon />} />
						<Tab label="Contact" icon={<EmailIcon />} />
						<Tab label="Social Media" icon={<MessageIcon />} />
						<Tab label="Writings" icon={<CreateIcon />} />
						<Tab label="DJ BoGoodSki" icon={<HeadsetIcon />} />
						<Tab label="Links" icon={<LanguageIcon />} />
					</Tabs>
				</AppBar>
				{value === 0 && (
					<TabContainer>
						<HomeMain />
					</TabContainer>
				)}
				{value === 1 && (
					<TabContainer>
						<ResumeMain />
					</TabContainer>
				)}
				{value === 2 && (
					<TabContainer>
						<ResourceGrid />
					</TabContainer>
				)}
				{value === 3 && (
					<TabContainer>
						<Typography variant="body1" gutterBottom>
							Contact - Coming Soon!
						</Typography>
					</TabContainer>
				)}
				{value === 4 && (
					<TabContainer>
						<Typography variant="body1" gutterBottom>
							Social Media - Coming Soon!
						</Typography>
					</TabContainer>
				)}
				{value === 5 && (
					<TabContainer>
						<Typography variant="body1" gutterBottom>
							Writings - Coming Soon!
						</Typography>
					</TabContainer>
				)}
				{value === 6 && (
					<TabContainer>
						<Typography variant="body1" gutterBottom>
							DJ - Coming Soon!
						</Typography>
					</TabContainer>
				)}
				{value === 7 && (
					<TabContainer>
						<Typography variant="body1" gutterBottom>
							Links - Coming Soon!
						</Typography>
					</TabContainer>
				)}
			</div>
		);
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
