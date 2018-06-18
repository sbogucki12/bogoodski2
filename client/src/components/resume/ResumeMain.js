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
		width: '100%',
		height: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	heading: {
		textAlign: 'center',
	},
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
					<Grid container spacing={24}>
						<Grid item md={3} sm={3} />
						<Grid item md={5} sm={5}>
							<div className={classes.heading}>
								<Typography variant="display2">
									<span className="bogoodski">Experience</span>
								</Typography>
							</div>
						</Grid>
						<Grid item md={4} sm={4} />

						<Grid item md={4} sm={4} />
						<Grid item md={4} sm={4}>
							<div>
								<DeveloperCard />
							</div>
						</Grid>
						<Grid item md={4} sm={4} />

						<Grid item md={4} sm={4} />
						<Grid item md={4} sm={4}>
							<div>
								<ManagerCard />
							</div>
						</Grid>
						<Grid item md={4} sm={4} />

						<Grid item md={4} sm={4} />
						<Grid item md={4} sm={4}>
							<div>
								<DataCard />
							</div>
						</Grid>
						<Grid item md={4} sm={4} />

						<Grid item md={4} sm={4} />
						<Grid item md={4} sm={4}>
							<div>
								<PolicyCard />
							</div>
						</Grid>
						<Grid item md={4} sm={4} />

						<Grid item md={4} sm={4} />
						<Grid item md={4} sm={4}>
							<div>
								<AdminCard />
							</div>
						</Grid>
						<Grid item md={4} sm={4} />

						<Grid item md={4} sm={4} />
						<Grid item md={4} sm={4}>
							<div>
								<MilitaryCard />
							</div>
						</Grid>
						<Grid item md={4} sm={4} />
					</Grid>
				</div>
				<div>
					<Grid container spacing={24}>
						<Grid item md={3} sm={3} />
						<Grid item md={5} sm={5}>
							<div className={classes.heading}>
								<Typography variant="display2">
									<span className="bogoodski">Education</span>
								</Typography>
							</div>
						</Grid>
						<Grid item md={4} sm={4} />

						<Grid item md={4} sm={4} />
						<Grid item md={4} sm={4}>
							<div>
								<BootcampCard />
							</div>
						</Grid>
						<Grid item md={4} sm={4} />

						<Grid item md={4} sm={4} />
						<Grid item md={4} sm={4}>
							<div>
								<UniversityCard />
							</div>
						</Grid>
						<Grid item md={4} sm={4} />

						<Grid item md={4} sm={4} />
						<Grid item md={4} sm={4}>
							<div>
								<HighschoolCard />
							</div>
						</Grid>
						<Grid item md={4} sm={4} />
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
