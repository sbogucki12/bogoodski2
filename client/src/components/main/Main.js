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
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import Typography from '@material-ui/core/Typography';
import ResourceGrid from '../resourceGrid/ResourceGrid';
import ResumeMain from '../resume/ResumeMain';
import HomeMain from '../home/HomeMain';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import ContactMain from '../contact/ContactMain';
import WritingsMain from '../writings/WritingsMain';
import SocialMain from '../social/SocialMain';
import DjMain from '../djbogoodski/DjMain';
import PortfolioMain from '../portfolio/PortfolioMain';
import UpdatesMain from '../updates/UpdatesMain';
import Fitness from '../fitness/Fitness';
import FitnessIcon from '@material-ui/icons/DirectionsRun'; 

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

const theme = createMuiTheme({
	palette: {
	  primary: cyan,
	  tonalOffset: 0.1,
	},
  });

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
			<MuiThemeProvider theme={theme}>
			<div className={classes.root}>
				<AppBar position="static" color="default">
					<Tabs
						value={value}
						onChange={this.handleChange}
						scrollable
						scrollButtons="on"
						indicatorColor="primary"
						textColor="primary"
					>
						<Tab label="Home" icon={<HomeIcon />} />
						<Tab label="Portfolio" icon={<LanguageIcon />} />
						<Tab label="Social Media" icon={<MessageIcon />} />
						<Tab label="Writings" icon={<CreateIcon />} />
						<Tab label="Contact" icon={<EmailIcon />} />
						<Tab label="DJ BoGoodSki" icon={<HeadsetIcon />} />
						<Tab label="Fitness" icon={<FitnessIcon />} />	
						<Tab label="Updates" icon={<NewReleasesIcon />} />
						<Tab label="Resume" icon={<WorkIcon />} />	
											
						<Tab label="Resources" icon={<SchoolIcon />} />
					</Tabs>
				</AppBar>
				{value === 0 && (
					<TabContainer>
						<HomeMain />
					</TabContainer>
				)}				
				{value === 1 && (
					<TabContainer>
						<PortfolioMain />
					</TabContainer>
				)}
				{value === 2 && (
					<TabContainer>
						<SocialMain />
					</TabContainer>
				)}
				{value === 3 && (
					<TabContainer>
						<WritingsMain />
					</TabContainer>
				)}
				{value === 4 && (
					<TabContainer>
						<ContactMain />
					</TabContainer>
				)}
				{value === 5 && (
					<TabContainer>
						<DjMain />
					</TabContainer>
				)}
				{value === 6 && (
					<TabContainer>
						<Fitness />
					</TabContainer>
				)}	
				{value === 7 && (
					<TabContainer>
						<UpdatesMain />
					</TabContainer>
				)}
				{value === 8 && (
					<TabContainer>
						<ResumeMain />
					</TabContainer>
				)}
				{value === 9 && (
					<TabContainer>
						<ResourceGrid />
					</TabContainer>
				)}
			</div>
			</MuiThemeProvider>
		);
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
