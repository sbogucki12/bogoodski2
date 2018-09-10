import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "../../App.css";
import Typography from '@material-ui/core/Typography';
import DogRaveVol4Logo from '../../content/images/djImages/DogRaveVol4Cover.jpg'
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
                        Dog Rave Vol. 4, "Dog Days"
                    </Typography>
                    <br />
                    <Typography 
                    variant="subheading" 
                    gutterBottom 
                    align="center">
                        September 3, 2018
                    </Typography>
                    <br />
                    <hr />
                    <img src={DogRaveVol4Logo} alt="logo" className={classes.icon} />
                    <br />                   
                    <br />
                    <iframe width="100%" height="100%" scrolling="no" title="Dog Rave Vol 1" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/494756475&color=%23141414&inverse=false&auto_play=false&show_user=true"></iframe>
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
                                        <a href="https://www.beatport.com/track/primeval-extended-mix/10971317" target="blank" rel="noreferrer noopener">
                                            1. Will Atkinson - Primeval
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/into-the-fire-extended-mix/10869222" target="blank" rel="noreferrer noopener">
                                            2. Arkham Knights - Into the Fire
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/mangrove-extended-mix/10931788" target="blank" rel="noreferrer noopener">
                                            3. Artento Divini - Mangrove
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/fire-which-burns-us-all-original-mix/10708093" target="blank" rel="noreferrer noopener">
                                            4. Robert Nickson & Driftmoon present Astrosphere - Fire Which Burns Us All
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/knocker-extended-mix/10873070" target="blank" rel="noreferrer noopener">
                                            5. Ferry Corsten presents Eon - Knocker
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/lost-in-the-moment-extended-mix/10819396" target="blank" rel="noreferrer noopener">
                                            6. Jam el Mar & Paul Oakenfold - Lost in the Moment
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/style-fusion-jessus-progressivo-mix/1035194" target="blank" rel="noreferrer noopener">
                                            7. Elsandro - Style Fusion (Jessus Progressivo Mix)
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/tears-protoculture-remix/3275430" target="blank" rel="noreferrer noopener">
                                            8. Markus Schulz presents Dakota - Tears (Protoculture Remix)
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/artemis-original-mix/3502668" target="blank" rel="noreferrer noopener">
                                            9. KhoMha - Artemis
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/opera-of-northern-ocean-nifra-extended-remix/10737845" target="blank" rel="noreferrer noopener">
                                            10. Rex Mundi - Opera of the Northern Ocean (Nifra Remix)
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/loaded-original-mix/786049" target="blank" rel="noreferrer noopener">
                                            11. Pryda - Loaded
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/the-duel-original-mix/10937841" target="blank" rel="noreferrer noopener">
                                            12. Cristoph - The Duel
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/animal-original-mix/786047" target="blank" rel="noreferrer noopener">
                                            13. Pryda - Animal
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/yorkesia-extended-mix/10869345" target="blank" rel="noreferrer noopener">
                                            14. Enzo & Attila Syah - Yorkesia
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/we-belong-extended-mix/833559" target="blank" rel="noreferrer noopener">
                                            15. Ferry Corsten - We Belong
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/bigger-than-love-feat-giuseppe-de-luca-original-mix/7655079" target="blank" rel="noreferrer noopener">
                                            16. Ilan Bluestone feat. Giuseppe De Luca - Bigger Than Love
                                        </a>
                                    </ListItemText>
                                </ListItem>
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/adrenaline-original-mix/477233" target="blank" rel="noreferrer noopener">
                                            17. Sander van Doorn presents Purple Haze - Adrenaline
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/a-slice-of-heaven-extended-mix/10322696" target="blank" rel="noreferrer noopener">
                                            18. Ferry Corsten & Paul Oakenfold - A Slice of Heaven
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/save-this-moment-gareth-emery-remix/1836295" target="blank" rel="noreferrer noopener">
                                            19. John O'Callaghan, Betsie Larkin - Save this Moment (Gareth Emery Remix)
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/dusk-original-mix/8219666" target="blank" rel="noreferrer noopener">
                                            20. Will Atkinson - Dusk
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/meridian-extended-mix/8923302" target="blank" rel="noreferrer noopener">
                                            21. Monoverse - Meridian
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/the-end-original-mix/1277401" target="blank" rel="noreferrer noopener">
                                            22. Pryda - The End
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/your-mind-original-mix/10670339" target="blank" rel="noreferrer noopener">
                                            23. Adam Beyer & Bart Skils - Your Mind
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/in-the-midnight-hour-original-mix/7066231" target="blank" rel="noreferrer noopener">
                                            24. David Tort & Alex Lark - In the Midnight Hour
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/dont-say-a-word-feat-anousheh-khalili-original-mix/1059913" target="blank" rel="noreferrer noopener">
                                            25. Sharam feat. Anousheh Khalili - Don't Say a Word
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/trust-extended-mix/10345567" target="blank" rel="noreferrer noopener">
                                            26. Ferry Corsten - Trust
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/gold-rush-original-mix/1064653" target="blank" rel="noreferrer noopener">
                                            27. Jamie Matrix - Gold Rush
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/tuesday-maybe-original-mix/9237812" target="blank" rel="noreferrer noopener">
                                            28. Way Out West - Tuesday Maybe
                                        </a>
                                    </ListItemText>
                                </ListItem>                         
                                <ListItem button>                          
                                    <ListItemText>
                                        <a href="https://www.beatport.com/track/home-extended-mix/8945847" target="blank" rel="noreferrer noopener">
                                            29. Eelke Kleijn - Home
                                        </a>
                                    </ListItemText>
                                </ListItem>                                                                                         
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br />                    
                    <Typography variant="body2" gutterBottom align="center">
                        "Every set, better than the last!" - esteemed raver, Roux the Dog. 
                        <br />
                        Tunes for the doggiest of Dog Days of summer.  Three hours of the best old and new trance and progressive music! 
                    </Typography>
                    <br />
                    <br />                    
                </Paper>
            </Grid>
            <Grid item xs={false} sm={1} />
            <br />
        </Grid>
    )
}

export default withStyles(styles)(CurrentMix)