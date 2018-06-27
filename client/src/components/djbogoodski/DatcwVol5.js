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

class DatcwVol5 extends React.Component {
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
            title="DATCW Vol. 5"
            subheader="April, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 5"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/317761107&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                    <ListItemText secondary="00:00:00. Wechiski - Brief Encounter" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:07:12. Zonderling - Tunnel Vision (Don Diablo Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:10:50. No Mana - Moon" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:15:40. Oliver Winters - Flutter" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:21:40. Jerome Isma-Ae - Fiction" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:27:30. Pryda - Illusions" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:33:53. Reiner Zonneveld - Megacity Servant" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:40:00. Santez, Corey James - With You" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:44:50. Pryda - Glimma" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:50:50. BlackGummy - Incoming" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:00:25. Tinlicker - In All The Fire" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:06:30. No Mana - Less Than Three" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:11:35. The Golden Boy, BUDD - Guru" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:18:15. Cirez D - Mokba" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:23:15. Estiva - Barba" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:29:50. Pig&Dan - Chemistry" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:36:40. Tchami - Adieu" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:41:45. Phil Martyn - Come On (Quivver Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:45:00. Calvin Harris - Flashback (Eric Prydz Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:51:35. Pryda - Power Drive" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:55:30. David K. - Phanga" />
                </ListItem>
              </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol5.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol5);
