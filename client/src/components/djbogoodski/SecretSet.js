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

class SecretSet extends React.Component {
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
            title="The Secret Set"
            subheader="July 20, 2018"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="The Secret Set"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/474881562&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                        <ListItemText secondary="1. Rank 1: 7 Instead of 8" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="2. Sander Van Doorn: DaddyRock - Arty Remix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="3. Solis & Sean Truby: Feel It" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="4. Above & Beyond: Hello - Jerome Isma-Ae Remix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="5. Danilo Ercole: Format" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="6. Monoverse: Meridian" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="7. Genix: Vega" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="8. Arty: Zara" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="9. Rank 1: L.E.D. There Be Light - Tydi and Trent McDermott Remix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="10. Shogun: SkyFire - Alex M.O.R.P.H. Remix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="11. Atlantis: Fiji" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="12. Giuseppe Ottaviani: Ozone - Markus Szhulz Remix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="13. Pryda: Sunburst" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="14. Orkidea: Nana - Jerome Isma-Ae Remix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="15. Calvin Harris: Flashback - Eric Prydz Remix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="16. Konstantin Sibold: Mutter" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="17. Sharam: Kill Techno" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="18. London Grammar: Hey Now - Sasha Remix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="19. Zhu: Faded" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="20. Markus Schulz presents Dakota, Koen Groeneveld: Mota-Mota" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="21. Energy 52: Cafe Del Mar - deadmau5 Remix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="22. Rank 1: Airwave - 21st Century Mix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="23. John O'Callaghan, Betsie Larkin: Save This Moment - Gareth Emery Remix" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="24. Above & Beyond, Zoe Johnston: We're All We Need" />
                    </ListItem>
            </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

SecretSet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecretSet);