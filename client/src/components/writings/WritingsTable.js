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
import platform from 'platform';

const styles = theme => ({
  gridRoot: {
    flexGrow: 1,
  },
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',    
  },
  table: {
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
  body: {
    
  }
});


class WritingsTable extends React.Component {
    state = {
      renderData: []
    }

    componentDidMount() {
      axios.get('http://localhost:5000/writings')
        .then(response => {
          const renderData = response.data;
          this.setState({ renderData: renderData })
        })
    }

    render() {
        const { classes } = this.props;

        if(platform.product === 'iPad'){
          return (<div>This won't work for you</div>)
        }

        return (
          <Grid container className={classes.gridRoot} spacing={0}>
          <Grid item sm={2} lg={2}/>
          <Grid item sm={8} lg={8}>
            <Paper className={classes.root}>
              <Table className={classes.table}>
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
                        <TableCell>{n.body}</TableCell>
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