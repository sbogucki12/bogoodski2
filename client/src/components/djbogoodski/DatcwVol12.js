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

class DatcwVol12 extends React.Component {
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
            title="DATCW Vol. 12"
            subheader="July, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 12"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/331579641&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                        Giuseppe Ottaviani - Slow Emotion" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="2. 00:05:15 
                        Giuseppe Ottaviani - Count Down (On Air Mix) " />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="3. 00:10:30 
                        Will Atkinson - Victims" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="4. 00:19:00
                        Gary Maguire - Catch 22" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="5. 00:22:45 
                        Robert Nickson - Heliopause " />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="6. 00:28:25
                        Freigeist - 7FT" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="7. 00:35:00
                        Rank 1 - Airwave (21st Century)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="8. 00:40:00
                        Klauss Goulart - Bashert (We’ll Meet Again)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="9. 00:46:10
                        Arty, Sander Van Doorn - DaddyRock (Arty Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="10. 00:51:30
                        Pete Tong -  Right Here Right Now" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="11. 00:55:05 
                        Eric Prydz -  F.A.T." />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="12. 00:59:45
                        Grum -  U" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="13. 01:04:00
                        Fehrplay - Prophet" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="14. 01:09:50
                        Cristoph - Feel" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="15. 01:16:00
                        Dubfire, Miss Kittin - Exit" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="16. 01:22:55 
                        Sander Van Doorn - Love Is Darkness" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="17. 01:28:40
                        KhoMha - Mind Gamer" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="18. 01:35:10
                        Markus Schulz, Gabriel &  Dresden - Without You Near" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="19. 01:38:45
                        Above & Beyond, Ilan Bluestone - On A Good Day" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="20. 01:43:35
                        Ferry Corsten - Trust" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="21. 01:48:20
                        Solarstone, Matt Fax - Release (Matt Fax Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="22. 01:53:10
                        Eric Prydz - 2Night" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="23. 01:59:05
                        Above & Beyond - No One On Earth" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="24. 02:05:10
                        Ferry Corsten - We Belong" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="25. 02:11:35
                        Thomas Bronzwaer - Coherence" />
                    </ListItem> 
                    <ListItem>
                        <ListItemText secondary="26. 02:17:15 
                        Venaccio - Space Cowboy" />
                    </ListItem> 
                    <ListItem>
                        <ListItemText secondary="27. 02:22:40 
                        Moby, Above & Beyond - Porcelain" />
                    </ListItem> 
                    <ListItem>
                        <ListItemText secondary="28. 02:27:45 
                        Above & Beyond - We’re All We Need" />
                    </ListItem> 
                    <ListItem>
                        <ListItemText secondary="29. 02:31:40 
                        Eric Prydz - Sunset at Cafe Mambo" />
                    </ListItem> 
                    <ListItem>
                        <ListItemText secondary="30. 02:37:30 
                        Above & Beyond - Surge" />
                    </ListItem>              
                </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol12.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol12);
