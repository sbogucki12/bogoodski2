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

class DatcwVol1 extends React.Component {
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
            title="DATCW Vol. 1"
            subheader="March, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 1"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303928917&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                    <ListItemText secondary="1. Orkidea - Pacifique (Chantola Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="2. Davi - The Time Has Come" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="3. Cirez D - Bauerpost" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="4. Sander Van Doorn - Slap my Pitch Up" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="5. Jerome Isma-Ae - Reflection" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="6. Jeremy Olander - Atlanten" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="7. Cirez D - Exit" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="8. Michael Woods - Fruitcake" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="9. Eric Prydz - Opus (Four Tet Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="10. Klauss Goulart - Bashert (We'll Meet Again)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="11. Arnej - The Day Will Come (Sied Van Riel Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="12. Andrew Bayer - Memories" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="13. 4 Strings - Wondering" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="14. Photographer - Airport" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="15. Kyau & Albert - Are You Fine (20 Years Remake)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="16. ATB - Ecstacy (Intro Edit)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="17. Lange - The First Rebirth" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="18. Push - Universal Nation" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="19. Orkidea - Beautiful (Whiteout Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="20. Sander Van Doorn - Reach Out (Thomas Gold Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="21. Pryda - Waves" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="22. Boy Bianchi - Fireworks (Joris Voorn Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="23. Moby - Porcelain (Above & Beyond Remix)" />
                </ListItem>
              </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol1);
