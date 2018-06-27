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

class DatcwVol10 extends React.Component {
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
            title="DATCW Vol. 10"
            subheader="June, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 10"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327763234&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                        Track: Hide U (Jerome Isma-Ae Remix)
                        ARTISTS: Roger Shah, Sian Evans" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="2. 00:05:45
                        Track: Boss Fight
                        ARTISTS Jaytech, Judah (Official)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="3. 00:11:28
                        Track: Repeater
                        ARTIST: Estiva" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="4. 00:19:05
                        Track: PYARA (LIVE EDIT)
                        ARTIST: Fehrplay" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="5. 00:26:45
                        Track: Ya Amar 
                        ARTISTS Matisse & Sadko" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="6. 00:30:00
                        Track: Zero-Day
                        ARTIST: Judah (Official)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="7. 00:35:45
                        Track: Alarm
                        ARTIST: BlackGummy" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="8. 00:40:25
                        Track: CHAOS
                        ARTIST: Cirez D" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="9. 00:46:40
                        Track: Foregone Conclusion 
                        ARTIST: Cristoph" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="10. 00:53:20
                        Track: Faded
                        ARTIST: Zhu" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="11. 00:56:50
                        Track: Asphalt
                        ARTIST: Protoculture" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="12. 01:01:40
                        Track: Perth
                        ARTIST: Andrew Beyer" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="13. 01:09:00
                        Track: Terrace 5 A.M.
                        ARTIST: Markus Schulz presents DAKOTA" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="14. 01:14:30
                        Track: Space Cowboy
                        ARTIST: Venaccio" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="15. 01:20:55
                        Track: Song for Sendai
                        ARTIST: The Thrillseekers" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="16. 01:27:30
                        Track: BROKEN (NITROUS OXIDE REMIX)
                        ARTISTS: Duderstadt, Store N Forward" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="17. 01:34:05
                        Track: THE ORANGE THEME (FERRY CORSTEN'S MOONMAN ORANGE JUICE REMIX)
                        ARTIST: Cygnus X" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="18. 01:40:40
                        Track: No Less Than Three
                        ARTIST: No Mana" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:45:45
                        Track: Home
                        ARTIST: Eelke Kleijn" />
                    </ListItem>
                </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol10.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol10);
