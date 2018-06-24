import React from 'react';
import Button from '@material-ui/core/Button';
import createStyled from '../helpers/createStyled';
import MediaQuery from 'react-responsive';
import Grid from '@material-ui/core/Grid';

const Styled = createStyled({
	root: {
		background: 'linear-gradient(45deg, #4ca1af 30%, #c4e0e5 90%)',
		borderRadius: 3,
		border: 0,
		color: 'white',
		height: 48,
		padding: '0 30px',
		boxShadow: '0 3px 5px 2px lightgray',
	},

	rootMobile: {
		background: 'linear-gradient(45deg, #4ca1af 30%, #c4e0e5 90%)',
		borderRadius: 3,
		border: 0,
		color: 'white',
		width: 28,
		height: 28,
		padding: '0 28px',
		boxShadow: '0 3px 5px 2px lightgray',
	},
});

const LandingButton = props =>{
	return (
		<Styled>
			{({ classes }) => (
				<div>
					<MediaQuery query="(min-device-width: 769px)">
						<div className={classes.margin}>
							<Grid container spacing={16}>
								<Grid item lg={3} />
								<Grid item lg={9}>
									<Button className={classes.root} onClick={props.click}>{'Enter'}</Button>
								</Grid>
							</Grid>
						</div>
					</MediaQuery>

					<MediaQuery query="(max-device-width: 768px)">
						<Grid container spacing={8}>
							<Grid item xs={3} />
							<Grid item xs={9}>
								<Button className={classes.rootMobile} onClick={props.click}>{'Enter'}</Button>
							</Grid>
						</Grid>
					</MediaQuery>
				</div>
			)}
		</Styled>
	);
}

export default LandingButton;
