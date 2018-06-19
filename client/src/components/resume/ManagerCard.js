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

class ManagerCard extends React.Component {
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
							<Avatar aria-label="Manager" className={classes.avatar}>
								5
							</Avatar>
						}
						title="Manager"
						subheader="Los Angeles Aircraft Cerfication Office"
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
								Jan., 2016 - June, 2017
							</Typography>
							<Typography paragraph variant="body2">
								Responsibilities:
							</Typography>
							<List>
								<ListItem
									button
									component="a"
									href="https://www.faa.gov/aircraft/air_cert/locate_office/aco/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Supervised 13 members of the Administrative and Technical Support Staff at the Los Angeles Aircraft Certification Office of the Federal Aviation Administration" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Oversaw all facilities, office equipment; coordinated with building maintenance and ownership" />
								</ListItem>
								<ListItem
									button
									component="a"
									href="https://www.faa.gov/other_visit/aviation_industry/designees_delegations/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Managed the aviation safety engineer designee program for a multi-state region" />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	}
}

ManagerCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManagerCard);
