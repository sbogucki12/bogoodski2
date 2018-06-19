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

class PolicyCard extends React.Component {
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
							<Avatar aria-label="Policy" className={classes.avatar}>
								3
							</Avatar>
						}
						title="Policy Analyst"
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
								Mar., 2012 - Jan., 2014
							</Typography>
							<Typography paragraph variant="body2">
								Responsibilities:
							</Typography>
							<List>
								<ListItem
									button
									component="a"
									href="https://www.faa.gov/about/initiatives/cp/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="With a partner, developed, wrote, published Aircraft Certification's Service's implementation of the Federal Aviation Administration's new Compliance Philosophy; Developed/deployed all associated online and in-person instructional courses for FAA personnel pertaining to new policy" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Prepared material and conducted briefings for federal executives while working in our Washington, D.C. headquarters" />
								</ListItem>
								<ListItem
									button
									component="a"
									href="http://money.cnn.com/news/newsfeeds/articles/prnewswire/PH85214.htm"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Served as the Business Lead on a large Software Development Life Cycle (SDLC) project; building a web portal for all Aircraft Certification internal applications, per the FAA NISC contract" />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	}
}

PolicyCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PolicyCard);
