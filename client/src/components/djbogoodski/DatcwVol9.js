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

class DatcwVol9 extends React.Component {
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
            title="DATCW Vol. 9"
            subheader="July, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 9"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327190997&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                        <ListItemText secondary="00:00:00. Jerome Isma-Ae, Alastor -
                        WILDE" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:06:40.  RetroPhobia -
                        SWEET DREAMS FEAT. VANGELIS
                        BARBER DUB" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:13:30. Dosem -
                        REPLICANTS
                        EDU IMBERNON & COYU REMIX" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:19:35. Pryda -
                        SW4" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:25:10. Chris Giuliano, Paul Arcane -
                        SHAPES" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:30:55. Floe -
                        FOR YOU PART 2
                        DENIS SENDER REMIX" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:36:00. Grum -
                        REFLECTIONS" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:42:10. Estiva -
                        BLOSSOM" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:47:55. Oliver Smith -
                        ON THE MOON" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:53:25. Markus Schulz -
                        REMEMBER THIS" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:59:25. Cirez D -
                        MOUSEVILLE'S THEME" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:04:40. Dakota (Markus Schulz) - 
                        TEARS
                        PROTOCULTURE REMIX" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:10:30. 16 Bit Lolitas -
                        PENINSULA" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:18:00. " />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="Sasha, Poliça -
                        OUT OF TIME" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:30:55. Henry Saiz -
                        OF MUSES & SLAVES" />
                    </ListItem>
                </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol9.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol9);
