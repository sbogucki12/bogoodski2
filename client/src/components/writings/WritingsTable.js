import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  gridRoot: {
    flexGrow: 1,
  },
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto', 
  },
  image: {
    width: '64px',
    height: '64px',
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  center: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  }
});

class WritingsTable extends React.Component {
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

        return (
          <Grid container className={classes.gridRoot} spacing={0}>
            <Grid item sm={2} lg={2}/>
            <Grid item sm={8} lg={8}>
            <br />
              <Paper className={classes.center}>
                <Typography variant="display1" gutterBottom>
                  <span className="bogoodski">Selected Writings</span> 
                </Typography>
                <br/>          
              </Paper>
              <Paper className={classes.root}>
                <Table  >
                  <TableHead>
                    <TableRow>
                      <TableCell>Category</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Summary</TableCell>
                      <TableCell>Image</TableCell>
                      <TableCell>URL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.renderData.map(n => {
                      return (
                        <TableRow key={n.id}>
                          <TableCell component="th" scope="row">
                            {n.title}
                          </TableCell>
                          <TableCell>{n.date}</TableCell>
                          <TableCell>       
                          {n.body}
                          </TableCell>
                          <TableCell><img src={n.image} className={classes.image} alt="thumbnail" /></TableCell>
                          <TableCell>
                          <Button 
                          color="primary" 
                          href={n.url} 
                          target="_blank" 
                          rel="noreferrer noopener" 
                          className={classes.button}
                          >
                          Read
                          </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
              </Grid>
              <Grid item sm={2} lg={2}/>
            </Grid>
  );
 }
}

WritingsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WritingsTable);