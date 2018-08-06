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

class DogRaveVol2 extends React.Component {
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
            title="Dog Rave Vol. 2"
            subheader="Jul. 28, 2018"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="Dog Rave Vol. 1"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/478134555&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/long-wait-feat-solomon-grey-extended-mix/8364920" target="blank" rel="noreferrer noopener">
                                1. Dusky (Feat. Solomon Grey): Long Wait
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/fire-walk-original-mix/8554602" target="blank" rel="noreferrer noopener">
                                2. Yotto: Fire Walk
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/penrith-original-mix/10459325" target="blank" rel="noreferrer noopener">
                                3. Rolo Green: Penrith
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/meridian-pryda-remix/3100333" target="blank" rel="noreferrer noopener">
                                4. Henry Saiz, Guy J: Meridian (Pryda Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/memoria-extended-mix/10793080" target="blank" rel="noreferrer noopener">
                                5. Bjorn Akesson, Dennis Sheperd: Memoria
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/do-you-dream-original-mix/914440" target="blank" rel="noreferrer noopener">
                                6. Markus Schulz: Do You Dream
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/silence-dj-tiestos-in-search-of-sunrise-remix/2752147" target="blank" rel="noreferrer noopener">
                                7. Delirium: Silence (DJ Tiesto's In Search of Sunrise Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/moon-dust-original-mix/1056570" target="blank" rel="noreferrer noopener">
                                8. Nitrous Oxide, Adam Nickey: Moon Dust
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/the-day-will-come-sied-van-riel-remix/1400260" target="blank" rel="noreferrer noopener">
                                9. Arnej: The Day Will Come (Sied Van Riel Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/linking-people-2011-giuseppe-ottaviani-remix/1966086" target="blank" rel="noreferrer noopener">
                                10. Giuseppe Ottaviani: Linking People 2011 (Giuseppe Ottaviani Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/the-things-we-should-say-solarstone-pure-mix/6901586" target="blank" rel="noreferrer noopener">
                                11. Bryan Kearney: The Things We Should Say (Solarstone Pure Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/victims-original-mix/5642087" target="blank" rel="noreferrer noopener">
                                12. Will Atkinson: Victims
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/if-you-should-go-aly-and-fila-remix/700904" target="blank" rel="noreferrer noopener">
                                13. Armin Van Buuren, Susana: If You Should Go (Aly & Fila Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/reborn-original-mix/7449561" target="blank" rel="noreferrer noopener">
                                14. Ferry Corsten: Reborn
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/synapse-dynamics-arty-remix/4746591" target="blank" rel="noreferrer noopener">
                                15. Mat Zo: Synapse Dynamics (Arty Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/i-love-you-wont-give-it-up-extended-mix/10742293" target="blank" rel="noreferrer noopener">
                                16. Ferry Corsten: I Love You (Won't Give It Up)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/empire-of-hearts-original-mix/5159644" target="blank" rel="noreferrer noopener">
                                17. Gaia: Empire of Hearts
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/the-longest-road-feat-lissie-deadmau5-remix/516899" target="blank" rel="noreferrer noopener">
                                18. Morgan Page (Feat. Lissie): The Longest Road (deadmau5 Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/dont-you-want-me-dave-spoon-remix/4138742" target="blank" rel="noreferrer noopener">
                                19. Young Rebels, Francesco Diaz, Thomas Gold: Don't You Want Me (Dave Spoon Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/flashback-eric-prydz-remix/1032291" target="blank" rel="noreferrer noopener">
                                20. Calvin Harris: Flashback (Eric Prydz Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/quarterback-original-mix/817856" target="blank" rel="noreferrer noopener">
                                21. Sharam: Quarterback
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/circles-eric-prydz-remix/3029391" target="blank" rel="noreferrer noopener">
                                22. Digitalism: Circles (Eric Prydz Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/homeward-original-mix/7610713" target="blank" rel="noreferrer noopener">
                                23. Ferry Corsten: Homeward
                            </a>
                        </ListItemText>
                    </ListItem>                    
                </List>
            </CardContent>
          </Collapse>
        </Card>
        </div>
    );
  }
}

DogRaveVol2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DogRaveVol2);