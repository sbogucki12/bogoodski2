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

class BootcampCard extends React.Component {
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
							<Avatar aria-label="Bootcamp" className={classes.avatar}>
								3
							</Avatar>
						}
						title="Redwood Code Academy"
						subheader="Santa Ana, CA"
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
								June, 2017 - Oct., 2017
							</Typography>
							<Typography paragraph variant="body2">
								Responsibilities:
							</Typography>
							<List>
								<ListItem>
									<ListItemText secondary="Used JavaScript and C# to complete projects via AngularJS and .NET Core" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Built local SQL Server Express databases" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Created mLab MongoDB instances" />
								</ListItem>
								<ListItem
									button
									component="a"
									href="https://github.com/sbogucki12/WorkTrackingSystem"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Final Project: .NET Project, using Entity Framework, and SQL Server DB hosted in Azure" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Achieved First Place in Redwood Code Academy's One Day Hack-A-Thon" />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	}
}

BootcampCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BootcampCard);
