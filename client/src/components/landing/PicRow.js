import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MediaQuery from 'react-responsive';
import createStyled from '../helpers/createStyled';
import Grid from '@material-ui/core/Grid';
import MeThumbnail from '../../content/images/MeThumbnail.jpg';

const Styled = createStyled({
	root: {
		flexGrow: 1,
	},

	meThumbnail: {
		width: '65px',
		height: '65px',
		borderRadius: '25px',
		boxShadow: '10px 10px 5px lightgray',
		title: 'Landing Page Image'
	},

	meThumbnailMobile: {
		width: '50px',
		height: '50px',
		borderRadius: '15px',
		boxShadow: '10px 10px 5px lightgray',
	},
});

class PicRow extends Component {
	render() {
		return (
			<Styled>
				{({ classes }) => (
					<div className={classes.root}>
						<MediaQuery query="(min-device-width: 769px)">
							<Grid container spacing={8}>
								<Grid item lg={6}>
									<Typography variant="title" gutterBottom>
										Please click to explore my world.
									</Typography>
								</Grid>
								<Grid item lg={6}>
									<Typography variant="title" gutterBottom>
										<img src={MeThumbnail} className={classes.meThumbnail} alt={classes.meThumbnail.title} />
									</Typography>
								</Grid>
							</Grid>
						</MediaQuery>
						<MediaQuery query="(max-device-width: 768px)">
							<Grid container spacing={16}>
								<Grid item xs={9}>
									<Typography variant="caption" gutterBottom>
										Please click to explore my world.
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography variant="caption" gutterBottom>
										<img src={MeThumbnail} className={classes.meThumbnailMobile} alt={classes.meThumbnail.title} />
									</Typography>
								</Grid>
							</Grid>
						</MediaQuery>
					</div>
				)}
			</Styled>
		);
	}
}

export default PicRow;
