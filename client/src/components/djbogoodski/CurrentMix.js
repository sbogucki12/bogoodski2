import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "../../App.css";
import Typography from '@material-ui/core/Typography';
import DogRaveVol3Logo from '../../content/images/djImages/DogRaveVol3Aug042018Cover.jpg'
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
                        Dog Rave Vol. 3
                    </Typography>
                    <br />
                    <Typography 
                    variant="subheading" 
                    gutterBottom 
                    align="center">
                        August 4, 2018
                    </Typography>
                    <br />
                    <hr />
                    <img src={DogRaveVol3Logo} alt="logo" className={classes.icon} />
                    <br />                   
                    <br />
                    <iframe width="100%" height="100%" scrolling="no" title="Dog Rave Vol 1" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/481284024&color=%23141414&inverse=false&auto_play=false&show_user=true"></iframe>
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
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <br />                    
                    <Typography variant="body2" gutterBottom align="center">
                        "Best live set of summer, '18!!" - esteemed raver, Roux the Dog. 
                        <br />
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