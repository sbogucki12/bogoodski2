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

class DatcwVol7 extends React.Component {
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
            title="DATCW Vol. 7"
            subheader="June, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 7"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319734271&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                        <ListItemText secondary="1. 00:00 Robert Nickson - Heliopause" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="2. 06:30
                        M.I.K.E. Push - Sonorous " />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="3. 12:10 
                        Markus Schulz - Rain" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="4. 16:30 
                        Axel Karakasis - Pull the Trigger (Joint Operations Centre Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="5. 21:00
                        Matias Faint - Last Breath (Heatbeat Original Mix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="6. 27:20
                        Jerome Isma-Ae, Alastor - Kubrick" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="7. 33:33
                        Pryda - Illusions" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="8. 39:20 
                        Frainbreeze - Black Eagle" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="9. 43:45
                        Sander van Doorn - Apple " />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="10. 48:40 
                        Venaccio - Space Cowboy " />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="11. 54:20 
                        The Thrillseekers - Song for Sendai" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="12. 01:01:40 
                        Ferry Corsten (Feat. Betsi Larkin) - Made of Love" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="13. 01:07:22 
                        Orjan Nilsen - Between the Rays" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="14. 01:12:35
                        Solarstone - Release (Matt Fax Extended Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="15. 01:17:35 
                        Genix - Meru" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="16. 01:22:45 
                        Sebastian Weikum - Midnight Train" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="17. 01:28:20 
                        Kobana, Mario Hatchet - Play (Dub Mix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="18. 01:34:10
                        Oliver Winters - Flutter" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="19. 01:39:30
                        Thomas Bronzwaer - Coherence" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="20. 01:44:45
                        Marc Marberg, Kyau & Albert - Neo Love " />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="21. 01:49:45
                        TyDi (Feat. Audrey Gallagher) - You Walk Away" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="22. 01:57:25
                        Ilan Bluestone (Feat. Giuseppe de Luca) - BIgger Than Love" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="23. 02:03:00 
                        Mark Knight - Your Love" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="24. 02:08:15 
                        Arty, Angel Taylor - Up All Night" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="25. 02:12:30 
                        Andain - Summer Calling (Airwave Progressive Remix)" />
                    </ListItem>             
                    <ListItem>
                        <ListItemText secondary="26. 02:20:20
                        Nick Curly - Helter Skelter " />
                    </ListItem>             
                    <ListItem>
                        <ListItemText secondary="26. 02:20:20
                        Nick Curly - Helter Skelter " />
                    </ListItem>                          
                </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol7.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol7);
