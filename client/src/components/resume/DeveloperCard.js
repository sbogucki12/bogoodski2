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

class DeveloperCard extends React.Component {
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
							<Avatar aria-label="Developer" className={classes.avatar}>
								6
							</Avatar>
						}
						title="Independent Web Developer"
						subheader="Long Beach, CA"
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
								June, 2017 - Present
							</Typography>
							<Typography paragraph variant="body2">
								Responsibilities:
							</Typography>
							<List>
								<ListItem
									button
									component="a"
									href="https://maxresistance.herokuapp.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Web developer / Content owner: http://maxresistanceblog.com" />
								</ListItem>
								<ListItem
									button
									component="a"
									href="https://redwoodcodeacademy.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Graduated: Redwood Code Academy" />
								</ListItem>
								<ListItem
									button
									component="a"
									href="https://github.com/sbogucki12"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="My gitHub" />
								</ListItem>
								<ListItem
									button
									component="a"
									href="https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Currently enrolled: Harvard's CS50, Intro to Computer Science, online" />
								</ListItem>
								<ListItem>
									<ListItemText secondary="Currently enrolled: Node and React Full Stack, Online (Udemy)" />
								</ListItem>
								<ListItem
									button
									component="a"
									href="https://i.imgur.com/SCZTWbW.jpg"
									target="_blank"
									rel="noreferrer noopener"
								>
									<ListItemText secondary="Courses completed:" />
								</ListItem>
								<ul>
									<li>Mosh Hamedani's C# Beginner, Intermediate, Advanced courses</li>
									<li>Build a Real World App with ASP.NET Core and Angular 2</li>
									<li>The Complete ASP.NET MVC 5 Course</li>
									<li>Learn ASP.NET Web API 2 for Absolute Beginner</li>
									<li>Maximilian Schwarzmuller's Angular 6, The Complete Guide</li>
									<li>Learning Microsoft Transact - SQL</li>
									<li>Colt Steele's The Ultimate MySQL Bootcamp</li>
								</ul>
							</List>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	}
}

DeveloperCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeveloperCard);
