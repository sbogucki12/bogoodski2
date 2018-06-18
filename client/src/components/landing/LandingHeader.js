import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MediaQuery from 'react-responsive';
import createStyled from '../helpers/createStyled';

const Styled = createStyled({
	root: {
		flexGrow: 1,
	},
});

class LandingHeader extends Component {
	render() {
		return (
			<Styled>
				{({ classes }) => (
					<div className={classes.root}>
						<MediaQuery query="(min-device-width: 769px)">
							<Typography variant="display1" gutterBottom>
								Thank you for your interest in <span className="bogoodski">BoGoodSki</span>
							</Typography>
						</MediaQuery>
						<MediaQuery query="(max-device-width: 768px)">
							<Typography variant="body2" gutterBottom>
								Thank you for your interest in <span className="bogoodski">BoGoodSki</span>
							</Typography>
						</MediaQuery>
					</div>
				)}
			</Styled>
		);
	}
}

export default LandingHeader;
