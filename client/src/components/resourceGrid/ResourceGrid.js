import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import tileData from './resourceTileData';

const styles = theme => ({
	root: {
		marginTop: '50px',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: 650,
		height: 500,
	},
	gridListMobile: {
		width: 500,
		height: 450,
	}
});

function ResourceGrid(props) {
	const { classes } = props;

	return (
		<div className={classes.root}>
			<GridList 
			cellHeight={180} 
			className={classes.gridList}
			spacing={10}
			cols={3}>
				{tileData.map(tile => (
					<GridListTile key={tile.img}>
						<img src={tile.img} alt={tile.title} />
						<a href={tile.url} target="_blank" rel="noreferrer noopener">
							<GridListTileBar title={tile.title} subtitle={<span>by: {tile.author}</span>} />
						</a>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

ResourceGrid.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResourceGrid);
