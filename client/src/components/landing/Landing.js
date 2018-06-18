import React, { Component } from 'react';
import LandingHeader from '../landing/LandingHeader';
import PicRow from '../landing/PicRow';
import LandingButton from '../landing/LandingButton';
import { Col, Row, Container } from 'reactstrap';

class Landing extends Component {
	render() {
		return (
			<Container className="landingLayout">
				<Row>
					<Col xs="11">
						<LandingHeader />
					</Col>
					<Col />
				</Row>
				<Row>
					<Col xs="11">
						<PicRow />
					</Col>
					<Col />
				</Row>
				<Row>
					<Col xs="11">
						<LandingButton />
					</Col>
					<Col />
				</Row>
			</Container>
		);
	}
}

export default Landing;
