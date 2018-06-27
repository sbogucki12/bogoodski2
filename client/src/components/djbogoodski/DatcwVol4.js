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

class DatcwVol4 extends React.Component {
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
            title="DATCW Vol. 4"
            subheader="April, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 4"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311606132&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                    <ListItemText secondary="00.00 Above & Beyond - Hello (Isma-Ae Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="06:25. Indecent Noise - The Lost Odyssey" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="13:50. Mike Van Fabio - Peacemaker" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="18:00. Duderstadt - Spectrum (Solarstone Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="24:35. Tiesto - Just Be" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="34:20. Gareth Emery - Concrete Angel (John O'Callaghan Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="39:55. Ferry Corsten as Gouryella - Anahera" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="46:10. Solarstone - A State of Mind (Pure Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="53:19. Driftmoon - Beggar in Your Own Kingdom" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="61:00. Aly & Fila - We Control the Sunlight" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="67:50. Gaia - Aisha (Aly & Fila Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="73:20. 4 Strings - Wondering" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="78:35. Kyau & Albert - Are You Fine (20 Years Remake)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="83:50. Vix, Snatt, KeyPlayer - Skyrise (Artisan Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="88:55. Oceanlab, Above & Beyond - On a Good Day (Ilan Bluestone Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="93:40. Marc Marberg, Kyau & Albert - Neo Love (Giuseppe Ottaviani Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="98:50. Sander Van Doorn as Purple Haze - Hymn 2.0" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="105:00. The Thrillseekers - Song for Sendai" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="112:45. Ferry Corsten - Sweet Sorrow (Thrillseekers Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="118:00. Gaia - Tuvan" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="124:15. Beat Service - Outsider" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="130:15. KhoMha - Artemis" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="136.25. Dave Neven - Drifter" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="142:40. Sander Van Doorn - Love is Darkness" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="148:25. Mark Pledger, Super8 & Tab - Worldwide" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="154:40. Solid Stone - For the Moment" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="158:55. Conjure One - Extraordinary Way (Antillas Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="166:10. Above & Beyond - We're All We Need" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="170:00. Ferry Corsten - We Belong" />
                </ListItem>             
              </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol4.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol4);
