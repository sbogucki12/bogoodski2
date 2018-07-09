import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        fontFamily: 'roboto',
    }, 
    center: {
        textAlign: 'center',
    }
})

class WritingsMobile extends React.Component {
    state = {
      renderData: []
    }

    componentDidMount() {
      axios.get('/writings')
        .then(response => {
          const renderData = response.data.sort((a,b) => {return b -a});
          this.setState({ renderData: renderData })
        })
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
            <br/>
            <Grid container spacing={0} className={classes.center}>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <Typography variant="display1" gutterBottom>
                        <span className="bogoodski">Selected Writings</span> 
                    </Typography>
                    <br/>
                    <Typography variant="subheading" gutterBottom>
                        (Mobile View) - This component best viewed on desktop
                    </Typography>
                </Grid>
                <Grid item xs={1} />
            </Grid>
            <br />
            <Grid container spacing={0}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                    {this.state.renderData.map(n => {
                        return(
                            <ul key={n.id}>
                                <li>
                                <a href={n.url} target="_blank" rel="noreferrer noopener">{n.body}</a>
                                </li>            
                            </ul>
                        )
                    })} 
                </Grid>
                <Grid item xs={2}/>                    
            </Grid>          
            </div>
        )
    }
}

export default withStyles(styles)(WritingsMobile)