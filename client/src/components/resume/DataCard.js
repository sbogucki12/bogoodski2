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

class DataCard extends React.Component {
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
							<Avatar aria-label="Data" className={classes.avatar}>
								4
							</Avatar>
						}
						title="Data Analyst"
						subheader="Los Angeles Aircraft Certification Office"
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
								Jan., 2014 - Jan., 2016
							</Typography>
							<Typography paragraph variant="body2">
								Responsibilities:
							</Typography>
							<List>
								<ListItem>
									<ListItemText secondary="Designed, deployed, maintained office Work Tracking System database that monitored all incoming and outgoing correspondence and all work assignments and deadlines" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Analyzed aviation safety data to provide insight and predictive modeling to office management" />
								</ListItem>
								<ListItem
									button
									component="a"
									href="https://advisera.com/9001academy/knowledgebase/what-is-the-job-of-the-quality-management-representative/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Oversaw the office Quality Management System as the ISO 9001 Quality Representative" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Provided ad-hoc IT support for office of > 100 personnel" />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	}
}

DataCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataCard);
