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

class DatcwVol14 extends React.Component {
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
            title="DATCW Vol. 14"
            subheader="September, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 14"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/336752443&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                        <ListItemText secondary="00:00:00
                        DISCO SHIT
                        ALOK REMIX,
                        ARTISTS Avrosse
                        REMIXERS Alok" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="2. 00:04:50
                        AERYS
                        MARK SHERRY EXTENDED REMIX,
                        ARTISTS Heatbeat
                        REMIXERS Mark Sherry" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="3. 00:10:50
                        TRACK
                        HOLD THAT SUCKER DOWN,
                        ARTISTS Lange" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="4. 00:15:50 
                        NEPAL,
                        ARTISTS Yoel Lewis" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="5. 00:20:45
                        OVERDRIVE,
                        ARTISTS Jerome Isma-Ae" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="6. 00:25:00
                        WATCH OUT (PART 2)
                        ARTISTS Will Atkinson" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="7. 00:30:00
                        GRAVITATIONAL WAVES,
                        ARTISTS Mark Sherry" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="8. 00:37:00
                        THE FIRST REBIRTH,
                        ARTISTS Lange" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="9. 00:43:10
                        STYLE FUSION
                        JESSUS PROGRESSIVO MIX,
                        ARTISTS Elsandro
                        REMIXERS Jessus" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="10. 00:48:00
                        SPACE COWBOY,
                        ARTISTS Venaccio" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="11. 00:54:00
                        ANIMAL,
                        ARTISTS Pryda" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="12. 00:59:00
                        ARP MAKES SPHINX PURR,
                        ARTISTS BlackGummy" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="13. 01:02:10
                        BINE FACUT [BUCHAREST],
                        ARTISTS Markus Schulz, Tom Boxer" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="14. 01:06:50
                        RAVE,
                        ARTISTS Sam Paganini" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="15. 01:11:40
                        SLEEPWALKERS,
                        ARTISTS Dakota (Markus Schulz)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="16. 01:17:50
                        THE ACCUSER,
                        CIREZ D" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="17. 01:23:20
                        PROPHET,
                        ARTISTS Fehrplay" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="18. 01:29:30
                        U,
                        ARTISTS Grum" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="19. 01:33:35
                        MANT ARRAY,
                        ARTISTS Sander Van Doorn" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="20. 01:37:35
                        BRIEF ENCOUNTER,
                        ARTISTS Wrechiski" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="21. 01:44:00
                        HARDER BETTER FASTER STRONGER
                        ALIVE EXTENDED 2007,
                        ARTISTS Daft Punk" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="22. 01:48:30
                        BARBA,
                        ARTISTS Estiva" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="23. 01:54:25
                        THE DAY WILL COME
                        SIED VAN RIEL REMIX,
                        ARTISTS Arnej
                        REMIXERS Sied Van Riel" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="24. 02:00:20
                        INTO,
                        ARTISTS Super8 & Tab" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="25. 02:05:00
                        TILL WE MEET AGAIN,
                        ARTISTS Push" />
                    </ListItem>  
                    <ListItem>
                        <ListItemText secondary="26. 02:11:50
                        TRAFFIC
                        SIED VAN RIEL REMIX,
                        ARTISTS Tiesto
                        REMIXERS Sied Van Riel" />
                    </ListItem>  
                    <ListItem>
                        <ListItemText secondary="27. 02:16:50
                        COUNTDOWN
                        ONAIR EXTENDED MIX,
                        ARTISTS Giuseppe Ottaviani" />
                    </ListItem>               
            </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol14.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol14);
