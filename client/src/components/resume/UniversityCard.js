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

class UniversityCard extends React.Component {
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
							<Avatar aria-label="University" className={classes.avatar}>
								2
							</Avatar>
						}
						title="University of South Florida"
						subheader="USF Honors College - Magna Cum Laude"
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
								Jan., 2006 - May, 2009
							</Typography>
							<Typography paragraph variant="body2">
								Responsibilities:
							</Typography>
							<List>
								<ListItem
									button
									component="a"
									href="http://www.usf.edu/honors/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Graduated Magna Cum Laude, USF's Honors College" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Wrote, defended, published thesis on genocide prevention that identified a model of societal symptoms that tend to precipitate the emergence of mass genocide" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Majors: International Studies and Religious Studies" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Completed courses on Arabic and Hebrew (currently study Russian recreationally)" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Tutored students in the USF Athletics Department on a variety of subjects; mostly English and some science" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Fully initiated Brother, Sigma Phi Epsilon fraternity" />
								</ListItem>
							</List>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	}
}

UniversityCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UniversityCard);
