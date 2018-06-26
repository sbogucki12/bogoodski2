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
						<Grid item xs={1} sm={3} md={5} lg={5} />
						<Grid item xs={10} sm={6} md={2} lg={2}>
							<div className={classes.heading}>
								<Typography variant="display2">
									<span className="bogoodski">Experience</span>
								</Typography>
							</div>
						</Grid>
						<Grid item xs={1} sm={3} md={5} lg={5}/>
					</Grid>
				</div>
				<div>
					<Grid container spacing={8}>
						<Grid item xs={false} sm={false} md={1} lg={1} />
						<Grid item xs={4}  sm={3} md={2} lg={2}>
							<DeveloperCard />
						</Grid>
						<Grid item xs={4} sm={1}  md={1} lg={1} />

						<Grid item xs={2} sm={1} md={1} lg={1} />
						<Grid item xs={4} sm={3} md={2}  lg={2}>
							<ManagerCard />
						</Grid>
						<Grid item xs={4} sm={1} md={1} lg={1} />

						<Grid item xs={2} sm={1} md={1} lg={1} />
						<Grid item xs={4} sm={3} md={2}  lg={2}>
							<DataCard />
						</Grid>
						<Grid item xs={4} sm={1} md={1} lg={1} />

						<Grid item xs={2} sm={1} md={1} lg={1} />
						<Grid item xs={4} sm={3} md={2}  lg={2}>
							<PolicyCard />
						</Grid>
						<Grid item xs={4} sm={1} md={1} lg={1} />

						<Grid item xs={2} sm={1} md={1} lg={1} />
						<Grid item xs={4} sm={3} md={2}  lg={2}>
							<AdminCard />
						</Grid>
						<Grid item xs={4} sm={1} md={1}  lg={1} />

						<Grid item xs={2} sm={1} md={1}  lg={1} />
						<Grid item xs={4} sm={3} md={2}  lg={2}>
							<MilitaryCard />
						</Grid>	
						<Grid item xs={4} sm={1} md={1}  lg={1} />
					</Grid>
				</div>
				<div>
					<Grid container spacing={8}>
						<Grid item xs={1} sm={3} md={5} lg={5} />
						<Grid item xs={10} sm={6} md={2} lg={2}>
							<div className={classes.heading}>
								<Typography variant="display2">
									<span className="bogoodski">Education</span>
								</Typography>
							</div>		
						</Grid>
						<Grid item xs={1} sm={3} md={5} lg={5}/>
					</Grid>
					<Grid container spacing={8}>

						<Grid item xs={false} sm={false} md={1} lg={1} />
						<Grid item xs={4}  sm={3} md={2} lg={2}>
							<BootcampCard />
						</Grid>
						<Grid item xs={4} sm={1}  md={1} lg={1} />

						<Grid item xs={2} sm={1} md={1} lg={1} />
						<Grid item xs={4} sm={3} md={2}  lg={2}>
							<UniversityCard />
						</Grid>
						
						<Grid item xs={4} sm={1} md={1} lg={1} />

						<Grid item xs={2} sm={1} md={1} lg={1} />
						<Grid item xs={4} sm={3} md={2}  lg={2}>
							<HighschoolCard />
						</Grid>
						<Grid item xs={4} sm={1} md={1} lg={1} />

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


						
						
							
						
							