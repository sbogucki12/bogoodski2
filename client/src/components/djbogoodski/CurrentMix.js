import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "../../App.css";
import Typography from '@material-ui/core/Typography';
import FolderIcon from "../../content/images/djImages/folder.svg";
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
                        Secret Set
                    </Typography>
                    <br />
                    <Typography 
                    variant="subheading" 
                    gutterBottom 
                    align="center">
                        July 20, 2018
                    </Typography>
                    <br />
                    <hr />
                    <img src={FolderIcon} alt="logo" className={classes.icon} />
                    <br />
                    <iframe title="The Secret Set" width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/474881562&color=%23ff5500&inverse=false&auto_play=false&show_user=true"></iframe>
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
                                        <a href="https://www.beatport.com/track/trubble-original-mix/7588821" target="blank" rel="noreferrer noopener">
                                            1. Eric Prydz - "Trubble"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/ozone-markus-schulz-extended-remix/10602802" target="blank" rel="noreferrer noopener">
                                            2. Giuseppe Ottaviani - "Ozone" (Markus Schulz Remix)
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/lucky-strike-original-mix/3254559" target="blank" rel="noreferrer noopener">
                                            3. Mat Zo - "Lucky Strike"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/run-original-mix/6825620" target="blank" rel="noreferrer noopener">
                                            4. Pryda - "Run"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/zero-day-original-mix/8990378" target="blank" rel="noreferrer noopener">
                                            5. Judah - "Zero-Day"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/outsider-original-mix/1986318" target="blank" rel="noreferrer noopener">
                                            6. Beat Service - "Outsider"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/tuvan-original-mix/954402" target="blank" rel="noreferrer noopener">
                                            7. Gaia - "Tuvan"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/adagio-for-strings-original-mix/5717983" target="blank" rel="noreferrer noopener">
                                            8. Mark Sixma - "Adagio For Strings"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/a-slice-of-heaven-extended-mix/10284098" target="blank" rel="noreferrer noopener">
                                            9. Ferry Corsten, Paul Oakenfold - "A Slice of Heaven"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/save-this-moment-original-mix/1836294" target="blank" rel="noreferrer noopener">
                                            10. John O'Callaghan, Betsie Larkin - "Save This Moment"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/bashert-well-meet-again-original-mix/7394988" target="blank" rel="noreferrer noopener">
                                            11. Klauss Goulart - "Bashert (We'll Meet Again)"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/nothing-without-me-feat-ana-diaz-extended-mix/3958837" target="blank" rel="noreferrer noopener">
                                            12. Markus Schulz, Ana Diaz - "Nothing Without Me"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/concrete-angel-original-mix/3750376" target="blank" rel="noreferrer noopener">
                                            13. Gareth Emery, Christina Novelli - "Concrete Angel"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/beautiful-relocate-remix/507441" target="blank" rel="noreferrer noopener">
                                            14. Ferry Corsten - "Beautiful (ReLocate Remix)"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/neuron-original-mix/6825622" target="blank" rel="noreferrer noopener">
                                            15. Pryda - "Neuron"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/your-mind-original-mix/10670339" target="blank" rel="noreferrer noopener">
                                            16. Adam Beyer, Bart Skils - "Your Mind"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/free-tibet-vini-vici-remix/7509573" target="blank" rel="noreferrer noopener">
                                            17. Hilight Tribe - "Free Tibet (Vini Vici Remix)"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/neverdeader-feat-brooks-original-mix/8338784" target="blank" rel="noreferrer noopener">
                                            18. Blackgummy (Featuring Brooks) - "NeverDeader"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/animal-original-mix/786047" target="blank" rel="noreferrer noopener">
                                            19. Pryda - "Animal"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/style-fusion-jessus-progressivo-mix/1035194" target="blank" rel="noreferrer noopener">
                                            20. Elsandro - "Style Fusion (Jessus Progressivo Mix)"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/brief-encounter-original-mix/9080001" target="blank" rel="noreferrer noopener">
                                            21. Wrechiski - "Brief Encounter"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/cafe-del-mar-deadmau5-remix/8036476" target="blank" rel="noreferrer noopener">
                                            22. Energy52 - "Cafe Del Mar (deadmau5 Remix)"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/sweet-harmony-isma-ae-remix/620744" target="blank" rel="noreferrer noopener">
                                            23. Serge Devant - "Sweet Harmony (Jerome Isma-Ae Remix)"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/linking-people-2011-giuseppe-ottaviani-remix/1966086" target="blank" rel="noreferrer noopener">
                                            24. Giuseppe Ottaviani - "Linking People 2011"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/tesseract-original-mix/6246542" target="blank" rel="noreferrer noopener">
                                            25. Ilan Bluestone - "Tesseract"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/memory-lane-original-mix/8209533" target="blank" rel="noreferrer noopener">
                                            26. Kyau & Albert - "Memory Lane"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/we-control-the-sunlight-feat-jwaydan-original-mix/2006016" target="blank" rel="noreferrer noopener">
                                            27. Aly & Fila (Featuring Jwaydan) - "We Control the Sunlight"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/song-for-sendai-original-mix/1816207" target="blank" rel="noreferrer noopener">
                                            28. The Thrillseekers - "Song for Sendai"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/sunset-at-caf-mambo-original-mix/7588824" target="blank" rel="noreferrer noopener">
                                            29. Eric Prydz - "Sunset at Cafe Mambo"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/muhanjala-davey-asprey-extended-remix/9805238" target="blank" rel="noreferrer noopener">
                                            30. Duderstadt - "Muhanjala (Davey Asprey Remix)"
                                        </a>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br />                    
                    <Typography variant="body2" gutterBottom align="center">
                        This is the <b><i>Secret Set</i></b> because it's not mixed very well. &#128514;  So, let's keep it between you and me! 
                        <br />
                        The music is awesome, so you should give it a listen.  But I introduced some flaws into the audio.  So, consider this set a prelude into the much better set I'll mix soon!
                        <br /> 
                        Enjoy!
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