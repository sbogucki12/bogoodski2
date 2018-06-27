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

class DatcwVol6 extends React.Component {
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
            title="DATCW Vol. 6"
            subheader="May, 2017"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="DATCW Vol. 6"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/319186752&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                        <ListItemText secondary="00:00:00. Wally Lopez, Third Son - Geometry (Solee Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:07:23. Yotto - Fire Walk" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:14:10. Calvin Harris - Flashback (Eric Prydz Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:19:15. The Drill - The Drill" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:24:30. Markus Schulz as Dakota - Steel Libido" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:29:40. deadmau5 - Arguru" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:35:10. Danilo Ercole - Format" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:41:35. Cirez D - Voided" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:47:40. Tchami - Adieu" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:50:25. Rafael Cerato - Blacklight" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="00:56:40. Dosem - Replicants (Edu Imbernon & Coyu Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:03:00. Andrew Bayer - Celestial" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:10:00. Sebjak - My Love" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:13:20. Max Meyer - Farza" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:18:10. Digitalism - Circles (Eric Prydz Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:23:10. No Mana - Momentarily" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:29:30. Estiva - Barba" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:35:30. Sander Van Doorn - Reach Out (Thomas Gold Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:39:35. KhoMha - Genesis" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:45:00. David Tort, Alex Lark - In the Midnight Hour" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:49:40. Wrechiski - Brief Encounter" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="01:56:10. Solarstone - Release (Matt Fax Remix)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="02:01:10. deadmau5, Grabbitz - Let Go" />
                    </ListItem>
                    <ListItem>
                        <ListItemText secondary="02:07:20. Above & Beyond - Surge" />
                    </ListItem>             
                </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DatcwVol6.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatcwVol6);
