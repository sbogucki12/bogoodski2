import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "../../App.css";
import Typography from '@material-ui/core/Typography';
import CurveIcon from "../../content/images/djImages/curvy-road-warning-sign.svg"
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    icon: {
        minHeight: "290px",
        
        maxHeight: "290px",
        maxWidth: "100%"
    },
    expansionRoot: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },    
  });


function CurrentMix(props) {
    const { classes } = props; 
    return(
        <Grid container spacing={0}>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10}>
                <Paper className={classes.root} elevation={4}>
                    <Typography 
                    variant="headline" 
                    gutterBottom
                    align="center"
                    >
                        <span className="bogoodski">Current Mix</span>
                    </Typography>
                    <br />
                    <Typography 
                    variant="headline" 
                    gutterBottom
                    align="center"
                    >
                        Dog Rave Vol. 1: "The Long and Winding Path"
                    </Typography>
                    <br />
                    <Typography 
                    variant="subheading" 
                    gutterBottom 
                    align="center">
                        July 21, 2018
                    </Typography>
                    <br />
                    <hr />
                    <img src={CurveIcon} alt="logo" className={classes.icon} />
                    <br />                   
                    <br />
                    <iframe width="100%" height="100%" scrolling="no" title="Dog Rave Vol 1" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475348725&color=%23141414&inverse=false&auto_play=false&show_user=true"></iframe>
                    <br /> 
                    <br />
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Set List (With Links to Purchase Tracks)</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List component="nav">
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
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br />                    
                    <Typography variant="body2" gutterBottom align="center">
                        Introducing DJ BoGoodSki’s newest series, aptly named, because the volumes are recorded from the raves he performs in his condo for a party of one.  That audience member being Roux, world’s number one dog! <span role="img" aria-label="dog">&#128054;</span>
                        <br />
                        <br />
                        Today’s journey is a “Long and Winding Path”; it’ll string you up, down, left, and right.  Though it takes a moment to find its groove, what’s good in this set works well.  So, stick with it.  Trust me (?)
                        <br />
                        <br />
                        
                        The tracklisting contains links to each tune on Beatport where we encourage you to purchase the tracks and support great music! 
                        <br />
                    </Typography>
                    <br />
                    <br />
                    <Typography variant="caption" gutterBottom align="center">
                        Icons made by <a href="http://www.freepik.com" title="Freepik" target="_blank" rel="noreferrer noopener">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noreferrer noopener">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noreferrer noopener">CC 3.0 BY</a>
                    </Typography>
                    <br />
                </Paper>
            </Grid>
            <Grid item xs={false} sm={1} />
            <br />
        </Grid>
    )
}

export default withStyles(styles)(CurrentMix)