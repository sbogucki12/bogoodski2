import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
	card: {
		maxWidth: 275,
		minWidth: 275,
	},
	actions: {
		display: 'flex',
	},
	expand: {
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
		marginLeft: 'auto',
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: '#4ca1af',
	},
});

class MilitaryCard extends React.Component {
	state = { expanded: false };

	handleExpandClick = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	render() {
		const { classes } = this.props;

		return (
			<div>
				<Card className={classes.card}>
					<CardHeader
						avatar={
							<Avatar aria-label="Military" className={classes.avatar}>
								1
							</Avatar>
						}
						title="13F: Forward Observer"
						subheader="U.S. Army (Active Duty)"
					/>
					<CardContent>
						<Typography component="p">Expand for details.</Typography>
					</CardContent>
					<CardActions>
						<IconButton
							className={classnames(classes.expand, {
								[classes.expandOpen]: this.state.expanded,
							})}
							onClick={this.handleExpandClick}
							aria-expanded={this.state.expanded}
							aria-label="Show more"
						>
							<ExpandMoreIcon />
						</IconButton>
					</CardActions>
					<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography paragraph variant="subheading">
								Apr., 2002 - Oct., 2005
							</Typography>
							<Typography paragraph variant="body2">
								Responsibilities:
							</Typography>
							<List>
								<ListItem>
									<ListItemText secondary="Promoted to rank of Sergeant in a team leader position as quickly as allowed by policy (24 months)" />
								</ListItem>
								<ListItem
									button
									component="a"
									href="https://www.goarmy.com/careers-and-jobs/browse-career-and-job-categories/combat/fire-support-specialist.html"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="MOS: 13F, Fire Support Specialist aka Forward Observer" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Two combat tours, Iraq; including over 100 dismounted movement-to-contact operations in urban Ar Ramadi" />
								</ListItem>
								<ListItem
									button
									component="a"
									href="https://en.wikipedia.org/wiki/Operation_Desert_Spring"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Participated in six-month intrinsic action in Kuwait to deter Iraqi aggression prior to OIF I" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Six month tour, South Korea; vicinity of the DeMilitarized Zone" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Maintained all communications equipment for platoon, including updating secured cryptological devices during real-world combat operations" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Consistently achieved maximum score on physical fitness assessments" />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	}
}

MilitaryCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MilitaryCard);
