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
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
	card: {
		maxWidth: 400,
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

class AdminCard extends React.Component {
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
							<Avatar aria-label="Admin" className={classes.avatar}>
								2
							</Avatar>
						}
						title="Management Assistant"
						subheader="FAA - Washington, D.C. (HQ)"
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
								Sept., 2010 - Mar., 2012
							</Typography>
							<Typography paragraph variant="body2">
								Responsibilities:
							</Typography>
							<List>
								<ListItem>
									<ListItemText secondary="Coordinated travel arrangements" />
								</ListItem>
								<ListItem>
									<ListItemText
										secondary="Reviewed and submitted payroll for office and division-level staff; up to 70
								personnel"
									/>
								</ListItem>
								<ListItem>
									<ListItemText
										secondary="Provided customer service to non-government stakeholders and to high-level D.C.
								government officials who interacted with our office"
									/>
								</ListItem>
								<ListItem>
									<ListItemText secondary="Maintained calendar/schedule for multiple federal executives" />
								</ListItem>
								<ListItem>
									<ListItemText
										secondary="Served as branch communications lead, maintained internal and external websites,
									published newsletters, and facilitated webinars"
									/>
								</ListItem>
								<ListItem>
									<ListItemText
										secondary="Served as Assistant SharePoint lead for the FAA's Engineering Division within the
									Aircraft Certification Service"
									/>
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	}
}

AdminCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminCard);
