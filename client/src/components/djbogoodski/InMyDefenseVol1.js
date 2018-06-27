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

class InMyDefenseVol1 extends React.Component {
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
            title="In My Defense Vol. 1"
            subheader="May, 2018"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="In My Defense Vol. 1"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/440288256&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                    <ListItemText secondary="00:00:00 - Cirez D, Sirtos Madness" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:05:30 - Calvin Harris, Flashback (Eric Prydz Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:10:50 - The Drill, The Drill" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:15:00 - Alok, Disco Shit (Avrosse Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:19:45 - deadmau5, The 16th Hour" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:29:10 - M83, Midnight City (Eric Prydz Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:33:15 - Fatboy Slim, Right Here Right Now" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:37:30 - Mord Fustang, Lick the Rainbow" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:43:00 - Grum, U" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:47:10 - Genix, Vega" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:52:00 - Kyau & Albert, Memory Lane" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="00:55:30 - Armin Van Buuren, Sail (Sudhaus Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:00:40 - Serge Devant, Sweet Harmony (Isma-Ae Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:07:00 - Thomas Bronzwaer - Coherence" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:12:10 - Ferry Corsten, We Belong" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:19:00 - Markus Schulz (as Dakota), Terrace 5AM" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:24:30 - Pryda, Animal" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:30:20 - Cristoph, Feel" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:37:10 - Wrechiski, Brief Encounter" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:44:00 - Sam Paganini, Rave" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:49:20 - Cirez D, Glow" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="01:57:20 - Pryda, Stay With Me" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="02:02:50 - Sharam, Kill" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="02:10:45 - Mark Knight, Your Love" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="02:15:40 - Kyau & Albert, Are You Fine (20 Yr. Remake)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="02:21:20 - Ilan Bluestone, Tesseract" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="02:25:50 - Sharam, Our Love" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="02:32:10 - Nick Muir, Bedrock, John Digweed, Heaven Scent (M.O.D.E. Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="2:41:00 - Venaccio, Space Cowboy" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="02:47:20 - Ferry Corsten, Trust" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="02:52:15 - Above & Beyond, Surge" />
                </ListItem>
              </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

InMyDefenseVol1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InMyDefenseVol1);
