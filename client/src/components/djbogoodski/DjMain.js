import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import InMyDefenseVol1 from './InMyDefenseVol1';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InMyDefenseImage from '../../content/images/djImages/inMyDefenseVol1.JPG';
import { withStyles } from '@material-ui/core/styles';
import DatcwVol1 from '../djbogoodski/DatcwVol1';
import DatcwVol2 from '../djbogoodski/DatcwVol2';
import DatcwVol3 from '../djbogoodski/DatcwVol3';
import DatcwVol4 from '../djbogoodski/DatcwVol4';
import DatcwVol5 from '../djbogoodski/DatcwVol5';
import DatcwVol6 from '../djbogoodski/DatcwVol6';
import DatcwVol7 from '../djbogoodski/DatcwVol7';
import DatcwVol9 from '../djbogoodski/DatcwVol9';
import DatcwVol10 from '../djbogoodski/DatcwVol10';
import DatcwVol11 from '../djbogoodski/DatcwVol11';
import DatcwVol12 from '../djbogoodski/DatcwVol12';
import DatcwVol13 from '../djbogoodski/DatcwVol13';
import DatcwVol14 from '../djbogoodski/DatcwVol14';
import DatcwVol1Image from '../../content/images/djImages/Dactw1Image.JPG';
import DatcwVol2Image from '../../content/images/djImages/Dactw2Image.JPG';
import DatcwVol3Image from '../../content/images/djImages/Dactw3Image.JPG';
import DatcwVol4Image from '../../content/images/djImages/Dactw4Image.JPG';
import DatcwVol5Image from '../../content/images/djImages/Dactw5Image.JPG';
import DatcwVol6Image from '../../content/images/djImages/Dactw6Image.JPG';
import DatcwVol7Image from '../../content/images/djImages/Dactw7Image.JPG';
import DatcwVol9Image from '../../content/images/djImages/Dactw9Image.JPG';
import DatcwVol10Image from '../../content/images/djImages/Dactw10Image.JPG';
import DatcwVol11Image from '../../content/images/djImages/Dactw11Image.JPG';
import DatcwVol12Image from '../../content/images/djImages/Dactw12Image.JPG';
import DatcwVol13Image from '../../content/images/djImages/Dactw13Image.JPG';
import DatcwVol14Image from '../../content/images/djImages/Dactw14Image.JPG';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    image: {
        maxHeight: '64px',
        maxWidth: '64px',
    }, 
    root: {
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
    }
})

class DjMain extends React.Component {
  state = {
    open: false,
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
    open7: false,
    open9: false,
    open10: false,
    open11: false,
    open12: false,
    open13: false,
    open14: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickOpen1 = () => {
    this.setState({ open1: true });
  };

  handleClickOpen2 = () => {
    this.setState({ open2: true });
  };

  handleClickOpen3 = () => {
    this.setState({ open3: true });
  };

  handleClickOpen4 = () => {
    this.setState({ open4: true });
  };

  handleClickOpen5 = () => {
    this.setState({ open5: true });
  };

  handleClickOpen6 = () => {
    this.setState({ open6: true });
  };

  handleClickOpen7 = () => {
    this.setState({ open7: true });
  };

  handleClickOpen9 = () => {
    this.setState({ open9: true });
  };

  handleClickOpen10 = () => {
    this.setState({ open10: true });
  };

  handleClickOpen11 = () => {
    this.setState({ open11: true });
  };

  handleClickOpen12 = () => {
    this.setState({ open12: true });
  };

  handleClickOpen13 = () => {
    this.setState({ open13: true });
  };

  handleClickOpen14 = () => {
    this.setState({ open14: true });
  };



  handleClose = () => {
    this.setState({ open: false });
  };

  handleClose1 = () => {
    this.setState({ open1: false });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };

  handleClose3 = () => {
    this.setState({ open3: false });
  };

  handleClose4 = () => {
    this.setState({ open4: false });
  };

  handleClose5 = () => {
    this.setState({ open5: false });
  };

  handleClose6 = () => {
    this.setState({ open6: false });
  };

  handleClose7 = () => {
    this.setState({ open7: false });
  };

  handleClose9 = () => {
    this.setState({ open9: false });
  };

  handleClose10 = () => {
    this.setState({ open10: false });
  };

  handleClose11 = () => {
    this.setState({ open11: false });
  };

  handleClose12 = () => {
    this.setState({ open12: false });
  };

  handleClose13 = () => {
    this.setState({ open13: false });
  };

  handleClose14 = () => {
    this.setState({ open14: false });
  };


  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <br />
            <Grid container spacing={8}>
                <Grid item xs={1} lg={3}/>
                <Grid item xs={10} lg={4}>
                    <Typography variant="display2" gutterBottom>
                        <span className="bogoodski">Selected Mixes</span>
                    </Typography>
                </Grid>
            <Grid item xs={1} lg={3} />

            <Grid item xs={1} lg={3}/>
            <Grid item xs={10} lg={4}>
                <Typography variant="subheading" gutterBottom>
                    All sets mixed live, "on the fly", using a Native Instruments S5 mixer, recorded directly from Traktor 2
                </Typography>        
            </Grid>
            <Grid item xs={1} lg={3} />
        </Grid>
        <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "In My Defense" Vol. 1 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={InMyDefenseImage} alt="In My Defense Vol. 1" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <InMyDefenseVol1 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 14
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol14Image} alt="Dance Around the Camelot Wheel Vol. 14" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen14}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open14}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose14}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol14 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                             "Dance Around the Camelot Wheel" Vol. 13
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol13Image} alt="Dance Around the Camelot Wheel Vol. 13" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen13}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open13}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose13}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol13 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 12 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol12Image} alt="Dance Around the Camelot Wheel Vol. 12" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen12}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open12}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose12}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol12 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 11 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol11Image} alt="Dance Around the Camelot Wheel Vol. 11" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen11}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open11}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose11}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol11 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 10 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol10Image} alt="Dance Around the Camelot Wheele Vol. 10" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen10}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open10}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose10}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol10 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 9 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol9Image} alt="Dance Around the Camelot Wheel Vol. 9" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen9}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open9}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose9}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol9 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 7 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol7Image} alt="Dance Around the Camelot Wheel Vol. 7" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen7}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open7}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose7}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol7 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 6 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol6Image} alt="Dance Around the Camelot Wheel 6" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen6}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open6}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose6}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol6 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 5 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol5Image} alt="Dance Around the Camelot Wheel Vol. 5" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen5}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open5}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose5}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol5 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 4 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol4Image} alt="Dance Around the Camelot Wheel Vol. 4" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen4}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open4}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose4}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol4 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 3 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol3Image} alt="Dance Around the Camelot Wheel Vol. 3" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen3}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open3}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose3}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol3 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 2 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol2Image} alt="Dance Around the Camelot Wheel Vol. 2" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen2}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open2}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose2}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol2 />
                </DialogContent>
            </Dialog>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={1} lg={3} />
                <Grid item xs={10} lg={4}>
                <Paper elevation={8}>        
                    <Grid container spacing={8}>
                        <Grid item xs={1} md={3} />
                        <Grid item xs={10} md={6}>
                            <Typography variant="headline" gutterBottom>
                                "Dance Around the Camelot Wheel" Vol. 1 
                            </Typography>
                        </Grid>
                        <Grid item xs={1} md={3} />

                        <Grid item xs={1} md={3} />
                        <Grid item xs={5} md={3}>
                            <img src={DatcwVol1Image} alt="Dance Around the Camelot Wheel Vol. 1" className={classes.image} />
                        </Grid>
                        <Grid item xs={5} md={3}>
                            <Button onClick={this.handleClickOpen1}>Click to Listen / See Playlist</Button>
                        </Grid>
                        <Grid item xs={1} md={3} />
                    </Grid>
                </Paper>
                </Grid>
            <Grid item xs={1} lg={3} />
            </Grid>

            <Dialog
                open={this.state.open1}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose1}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DatcwVol1 />
                </DialogContent>
            </Dialog>
        </div>
    );
  }
}

export default withStyles(styles)(DjMain);


