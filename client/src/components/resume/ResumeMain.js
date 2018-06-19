import React from 'react';
import ManagerCard from './ManagerCard';
import DeveloperCard from './DeveloperCard';
import DataCard from './DataCard';
import PolicyCard from './PolicyCard';
import AdminCard from './AdminCard';
import MilitaryCard from './MilitaryCard';
import BootcampCard from './BootcampCard';
import UniversityCard from './UniversityCard';
import HighschoolCard from './HighSchoolCard';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Technologies from './Technologies';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	root: {
		flexGrow: 1,		
		height: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	colCentered: {
		float: 'none',
		margin: '0 auto',
	}
	
});

class ResumeMain extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<div>
					<Technologies />
				</div>
				<div>
					<Grid container spacing={8}>
						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11}>
							<div className={classes.heading}>
								<Typography variant="display2">
									<span className="bogoodski">Experience</span>
								</Typography>
							</div>
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />

						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11} className={classes.colCentered}>
							
								<DeveloperCard />
							
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />

						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11} className={classes.colCentered}>
							
								<ManagerCard />
							
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />

						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11} className={classes.colCentered}>
							
								<DataCard />
							
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />

						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11}  className={classes.colCentered}>
							
								<PolicyCard />
							
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />

						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11} className={classes.colCentered}>
							
								<AdminCard />
							
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />

						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11} className={classes.colCentered}>
							
								<MilitaryCard />
							
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />
					</Grid>
				</div>
				<div>
					<Grid container spacing={8}>
						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11}>
							<div className={classes.heading}>
								<Typography variant="display2">
									<span className="bogoodski">Education</span>
								</Typography>
							</div>
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />

						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11} className={classes.colCentered}>
							
								<BootcampCard />
							
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />

						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11} className={classes.colCentered}>
							
								<UniversityCard />
							
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />

						<Grid item md={1} sm={0} lg={4} xl={1} />
						<Grid item md={11} sm={12} lg={4} xl={11} className={classes.colCentered}>
							
								<HighschoolCard />
							
						</Grid>
						<Grid item md={1} sm={0} lg={4} xl={0} />
					</Grid>
				</div>
			</div>
		);
	}
}

ResumeMain.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeMain);
