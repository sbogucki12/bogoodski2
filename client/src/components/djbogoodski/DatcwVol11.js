import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#4ca1af',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  header: {
      fontFamily: 'roboto',
  }
});

class DatcwVol11 extends React.Component {
    state = { expanded: false };
  

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
        <div>
        <Card className={classes.card}>
          <CardHeader
            title="DATCW Vol. 11"
            subheader="June, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 11"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/328067351&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
            </iframe>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          Expand for Playlist
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
            
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemText secondary="1. 00:00:00
                        Track: A City in Florida
                        Artist: deadmau5" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="2. 00:50:00
                        Track: Flashback (Eric Prydz Remix)
                        Artist: Calvin Harris" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="3. 00:11:20
                        Track: Intro (XX Booty Mix)
                        Artist: Sander van Doorn" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="4. 00:15:50
                        Track: The Drill
                        Artist: The Drill" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="5. 00:20:45
                        Track: Lick the Rainbow
                        Artist: Mord Fustang" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="6. 00:27:30
                        Track: Shapes
                        Artist: Maor Levi" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="7. 00:33:05
                        Track: Zara 
                        Artist: Arty" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="8. 00:39:20
                        Track: A State of Mind (Pure Mix)
                        Artist: Solarstone" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="9. 00:47:00
                        Track: Beast in the Machine
                        Artist: Stoneface & Terminal" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="10. 00:53:15
                        Track: Amnesia 
                        Artist: Nitrous Oxide" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="11. 01:00:20
                        Track: Airport
                        Artist: Photographer" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="12. 01:07:00
                        Track: Monday Bar
                        Artist: Nic Chagall" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="13. 01:13:30
                        Track: Universal Nation (Ferry Corsten Remix)
                        Artist: Push" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="14. 01:19:00
                        Track: Sestertius
                        Artist: Markus Schulz" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="15. 01:25:30
                        Track: Sweet Harmony (Jerome Isma-Ae Remix)
                        Artist: Serge Devant" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="16. 01:32:15 Track: Coherence Artist: Thomas Bronzwaer" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="17. 01:38:00 Track: Style Fusion (Jessus Progressivo Mix) Artist: Elsandro" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="18. 01:43:50 Track: Animal Artist: Pryda" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="19. 01:49:20 Track: For You Part Two (Denis Sender Remix) Artist: Floe " />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="20. 01:53:45 Track: Love Comes Again Artist: Tiesto, BT" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="21. 01:59:10 Track: Sweet Sorrow (Thrillseekers Remix) Artist: Ferry Corsten" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="22. 02:04:50 Track: Sandgroper (Bryan Kearney's Beyond the Mind Remix) Artist: Aly & Fila" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="23. 02:09:35 Track: Let the Light Shine In Artist: Darren Tate, Jono Grant" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="24. 02:16:00 Track: For The Moment Artist: Solid Stone" />
                    </ListItem> 
                    <ListItem>
                        <ListItemText secondary="25. 02:21:00 Track: Airwave (Sunset Mix) Artist: Rank 1" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="26. 02:25:30 Track: Surge Artist: Above & Beyond" />
                    </ListItem>            
                </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol11.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol11);
