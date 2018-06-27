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

class DatcwVol2 extends React.Component {
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
            title="DATCW Vol. 2"
            subheader="March, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 2"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/304853989&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                    <ListItemText secondary="1 - 9: No Data Available" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="10. Nick Curly - Helter Skelter" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="11. Armin Van Buuren - Sail (Sudhaus Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="12. Cirez D - Mokba" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="13. Norman Doray, Bottai - #BringBackTheGroove" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="14. Boy Bianchi - Firework (Joris Voorn Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="15. Dusky - Ingrid is a Hybrid" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="16. TP, Leu Leu Land - Revelation" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="17. Adam K, Soha - Twilight" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="18. Funkagenda - Atychiphobia" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="19. Prydz - The End is Just the Beginning" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="20. Quivver - Brand New Medicine" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="21. Paul Keeley - A Sort of Homecoming (Michael Cassette Remix)" />
                </ListItem>
                <ListItem>
                    <ListItemText secondary="22. Orjan Nilsen - Between the Rays" />
                </ListItem>
              </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol2);
