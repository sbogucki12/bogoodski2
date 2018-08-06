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

class DogRaveVol1 extends React.Component {
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
            title="Dog Rave Vol. 1"
            subheader="Jul. 21, 2018"
            className={classes.header}
          />
           <CardContent>
            <iframe width = "100%"
            height="100%"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            title="Dog Rave Vol. 1"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475348725&color=%23ff5500&inverse=false&auto_play=false&show_user=true" > 
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
                            <a href="https://www.beatport.com/track/7-instead-of-8-original-mix/3863278" target="blank" rel="noreferrer noopener">
                                1. Rank 1 - "7 Instead of 8"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/daddyrock-arty-remix/1978219" target="blank" rel="noreferrer noopener">
                                2. Sander Van Doorn - "DaddyRock" (Arty Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/feel-it-extended-mix/8951871" target="blank" rel="noreferrer noopener">
                                3. Solis & Sean Truby - "Feel It"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/hello-jerome-isma-ae-remix/6738741" target="blank" rel="noreferrer noopener">
                                4. Above & Beyond - "Hello" (Jerome Isma-Ae Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/format-original-mix/7476743" target="blank" rel="noreferrer noopener">
                                5. Danilo Ercole - "Format"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/meridian-extended-mix/8923302" target="blank" rel="noreferrer noopener">
                                6. Monoverse - "Meridian"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/vega-original-mix/8424830" target="blank" rel="noreferrer noopener">
                                7. Genix - "Vega"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/zara-original-mix/1639797" target="blank" rel="noreferrer noopener">
                                8. Arty - "Zara"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/l-e-d-there-be-light-tydi-and-trent-mcdermott-mix/824092" target="blank" rel="noreferrer noopener">
                                9. Rank 1 - "L.E.D. There Be Light" (Tydi & Trent McDermott Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/skyfire-alex-m-o-r-p-h-remix/2072222" target="blank" rel="noreferrer noopener">
                                10. Shogun - "Skyfire" (Alex M.O.R.P.H. Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/fiji-original-mix/3643807" target="blank" rel="noreferrer noopener">
                                11. Atlantis - "Fiji"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/ozone-markus-schulz-extended-remix/10602802" target="blank" rel="noreferrer noopener">
                                12. Giuseppe Ottaviani - "Ozone" (Markus Schulz Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/sunburst-original-mix/3475238" target="blank" rel="noreferrer noopener">
                                13. Pryda - "Sunburst"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/nana-jerome-isma-ae-remix/7893534" target="blank" rel="noreferrer noopener">
                                14. Orkidea - "Nana" (Jerome Isma-Ae Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/flashback-eric-prydz-remix/1032291" target="blank" rel="noreferrer noopener">
                                15. Calvin Harris - "Flashback" (Eric Prydz Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/mutter-original-mix/7809098" target="blank" rel="noreferrer noopener">
                                16. Konstantin Sibold - "Mutter"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/kill-techno-original-mix/827162" target="blank" rel="noreferrer noopener">
                                17. Sharam - "Kill Techno"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/hey-now-sasha-remix/5679228" target="blank" rel="noreferrer noopener">
                                18. London Grammar - "Hey Now" (Sasha Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/faded-original-mix/5350923" target="blank" rel="noreferrer noopener">
                                19. Zhu - "Faded"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/mota-mota-original-mix/10008952" target="blank" rel="noreferrer noopener">
                                20. Markus Schulz presents Dakota, Koen Groeneveld - "Mota-Mota"
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/cafe-del-mar-deadmau5-remix/8036476" target="blank" rel="noreferrer noopener">
                                21. Energy 52 - "Cafe Del Mar" (deadmau5 Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/airwave-21st-century-mix/5650470" target="blank" rel="noreferrer noopener">
                                22. Rank 1 - "Airwave" (21st Century Mix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/save-this-moment-gareth-emery-remix/1836295" target="blank" rel="noreferrer noopener">
                                23. John O'Callaghan, Betsie Larkin - "Save This Moment" (Gareth Emery Remix)
                            </a>
                        </ListItemText>
                    </ListItem>
                    <ListItem button>                          
                        <ListItemText>
                            <a href="https://www.beatport.com/track/were-all-we-need-feat-zoe-johnston-extended-mix/6052121" target="blank" rel="noreferrer noopener">
                                24. Above & Beyond, Zoe Johnston - "We're All We Need"
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

DogRaveVol1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DogRaveVol1);