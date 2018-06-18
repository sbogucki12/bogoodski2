import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MomandMe from '../../content/images/momAndMe.JPG';

const styles = {
  card: {
    maxWidth: 345,
    textAlign: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    opacity: '0.5',
  },
};

function HomeCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
      <CardContent>
          <Typography gutterBottom variant="subheading" component="h2">
            Welcome to...
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={MomandMe}
          title="Welcome to BoGoodSki dot com"
        />
        <CardContent>
          <Typography gutterBottom variant="subheading" component="h2">
            http:// <span className="bogoodski">BoGoodSki</span> .com
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

HomeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeCard);