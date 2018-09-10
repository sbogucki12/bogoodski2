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

class DogRaveVol3 extends React.Component {
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
            title="Dog Rave Vol. 3"
            subheader="Aug. 4, 2018"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="Dog Rave Vol. 3"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/481284024&color=%23141414&inverse=false&auto_play=false&show_user=true" > 
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
                            <a href="https://www.beatport.com/track/hal-original-mix/10662473" target="blank" rel="noreferrer noopener">
                                1. Tiga, Kolsch: HAL
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/trip-original-mix/9493033" target="blank" rel="noreferrer noopener">
                                2. CamelPhat: Trip
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/elements-original-mix/10613266" target="blank" rel="noreferrer noopener">
                                3. Pryda: Elements
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/vanquish-original-mix/10696536" target="blank" rel="noreferrer noopener">
                                4. Cristoph: Vanquish
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/pyara-live-edit/6307630" target="blank" rel="noreferrer noopener">
                                5. Fehrplay: Pyara (Fehrplay's Live Edit)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/heaven-scent-m-o-d-e-remix/695842" target="blank" rel="noreferrer noopener">
                                6. Bedrock, Nick Muir, John Digweed: Heaven Scent (M.O.D.E. Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/hymn-2-0-original-mix/1310367" target="blank" rel="noreferrer noopener">
                                7. Sander Van Doorn presents Purple Haze: Hymn 2.0
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/dont-say-a-word-feat-anousheh-khalili-original-mix/1059913" target="blank" rel="noreferrer noopener">
                                8. Sharam (Feat. Anousheh Khalili): Don't Say a Word
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/meru-original-mix/8970116" target="blank" rel="noreferrer noopener">
                                9. Genix: Meru
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/i-love-you-wont-give-it-up-extended-mix/10742293" target="blank" rel="noreferrer noopener">
                                10. Ferry Corsten: I Love You (Won't Give It Up)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/mozart-original-mix/3118998" target="blank" rel="noreferrer noopener">
                                11. Mat Zo, ARTY: Mozart
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/space-cowboy-original-mix/7890043" target="blank" rel="noreferrer noopener">
                                12. Venaccio: Space Cowboy
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/release-matt-fax-extended-remix/8749546" target="blank" rel="noreferrer noopener">
                                13. Solarstone: Release (Matt Fax Extended Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/tears-protoculture-remix/3211665" target="blank" rel="noreferrer noopener">
                                14. Markus Schulz presents Dakota: Tears (Protoculture Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/bigger-than-love-feat-giuseppe-de-luca-original-mix/8625324" target="blank" rel="noreferrer noopener">
                                15. Ilan Bluestone (Feat. Giuseppe de Luca): Bigger Than Love
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/perfect-moments-official-airport-jam-2010-anthem-radio-edit/4409625" target="blank" rel="noreferrer noopener">
                                16. Lang & Yep: Perfect Moments
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

DogRaveVol3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DogRaveVol3);