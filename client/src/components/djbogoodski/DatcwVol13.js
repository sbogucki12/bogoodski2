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

class DatcwVol13 extends React.Component {
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
            title="DATCW Vol. 13"
            subheader="August, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 13"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/332940049&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                        <ListItemText secondary="1. 00:00
                        Bryan Kearney, Sneijder -
                        Next Level" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="2. 06:20
                        Ula - 
                        Sadness and Sorrow (Etasonic Remix) " />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="3. 13:20
                        Scott Lowe, Liam Nicklin - 
                        Ignosco (Harmonic Rush Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="4. 19:20
                        Will Atkinson - 
                        Awake" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="5. 25:15
                        Electric Universe - 
                        Mantra" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="6. 32:10
                        John O’Callaghan - 
                        Raw Deal (Revolution9 Remix) " />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="7. 38:00
                        Will Atkinson - 
                        Victims" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="8. 45:40 
                        Tempo Giusto - 
                        Burn" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="9. 51:10
                        Will Atkinson -
                        Game Over 2015" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="10. 57:50 
                        8 Wonders, Arnej - 
                        Together We Will Rise" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="11. 01:03:10
                        Phaxe, Time In Motion - 
                        Dreamless" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="12. 01:11:05
                        Dakota - 
                        Terrace 5AM" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="13. 01:15:50
                        Orkidea - 
                        Nana (Jerome Isma-Ae Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="14. 01:21:30
                        Sander Van Doorn - 
                        Reach Out (Thomas Gold Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="15. 01:26:30
                        Cirez D - 
                        Mokba" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="16. 01:31:10
                        Estiva - 
                        Barba" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="17. 01:37:20
                        Pryda - 
                        SW4" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="18. 01:42:50
                        Mord Fustang - 
                        Lick the Rainbow" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="19. 01:48:40
                        Lange  - 
                        Hold That Sucker Down" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="20. 01:54:00
                        Yoel Lewis - 
                        Nepal" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="21. 01:58:40
                        Pryda - 
                        Power Drive" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="22. 02:05:50
                        Danilo Ercole - 
                        Format" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="23. 02:11:50 
                        Filterheadz, Orange 3 - 
                        In Your Eyes (Marcus Sortoro Remode)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="24. 02:17:20
                        Andrew Bayer - 
                        Need Your Love" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="25. 02:23:40 
                        Above & Beyond  - 
                        1001" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="26. 02:29:00 
                        Eric Prydz - 
                        Generate" />
                    </ListItem>    
                    <ListItem>
                        <ListItemText secondary="27. 02:34:30
                        Giuseppe Ottaviani, Tricia McTeague - 
                        Loneliest Night" />
                    </ListItem>    
                    <ListItem>
                        <ListItemText secondary="28. 02:39:20
                        Pryda - 
                        Lillo" />
                    </ListItem>    
                    <ListItem>
                        <ListItemText secondary="29. 02:46:40
                        David K. - 
                        Phanga" />
                    </ListItem>    
                    <ListItem>
                        <ListItemText secondary="30. 02:51:40
                        Ferry Corsten - 
                        Homeward" />
                    </ListItem>                 
                </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol13.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol13);
