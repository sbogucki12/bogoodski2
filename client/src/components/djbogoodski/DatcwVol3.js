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

class DatcwVol3 extends React.Component {
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
            title="DATCW Vol. 3"
            subheader="March, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 3"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/307319939&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                    <ListItemText secondary="1. Marcus Schossow - Raw" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="2. Way Out West - Tuesday Maybe" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="3. Eric Prydz - Pjanoo (Guy J Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="4. No Mana - Nostalgia Drive" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="5. BlackGummy - Descent" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="6. deadmau5 - Not Exactly" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="7. KhoMha - Blue Morning (Original Sunrise Mix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="8. Rodg - First & Last" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="9. Pryda - Run" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="10. RUFUS - Innerbloom (Sasha Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="11. Cirez D - Century of the Mouse" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="12. Markus Schulz as Dakota - Terrace 5AM" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="13. Atlantis - Fiji" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="14. Binary Finary - 1998 (Tydi & Denis Sheperd Remix" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="15. Solarstone - Release (Matt Fax Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="16. Paul Rogers, Pete Tong - Headstrong" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="17. David Tort, Alex Lark - In the Midnight Hour" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="18. Thomas Mengel - Zephyr" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="19. Nick Curly - Helter Skelter" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="20. Sander Van Doorn - Look Inside Your Head" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="21. Cari Golden, Reiner Zonneveld - Things We Might Have Said" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="22. Orkidea - P:Machinery" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="23. KhoMha - Vapor" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="24. Eric Prydz - Generate" />
                </ListItem>
              </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol3);
