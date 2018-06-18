import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(18),
		fontWeight: theme.typography.fontWeightRegular,
	},
	details: {
		textAlign: 'center',
	},
});

function Technologies(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography className={classes.heading}>Technologies</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography className={classes.details}>
						HTML, CSS, Bootstrap, ReactStrap, Material-UI, JavaScript, ReactJS, jQuery, C#, .NET Core (MVC /
						Web API), SQL Server (on Azure and Express), Entity Framework, LINQ, Identity Server, git,
						gitHub, Visual Studio, VSCode, Visual Studio Team Services, Jira, Microsoft Office (including
						Visio), Outlook, Azure (DocumentDB, Cosmos, Blob Storage), AWS S3, Heroku, Webpack, npm, Nuget,
						Postman, Agile Methodology, node.js, MongoDB, Mongoose, Express, PassportJS
					</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}

Technologies.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Technologies);
