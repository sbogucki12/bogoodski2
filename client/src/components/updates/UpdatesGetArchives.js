import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import UpdateJuly4 from './UpdateJuly4';

const styles = theme => ({
    button: {
        color: '#4DD0E1',
    }     
  });
  
class UpdatesGetArchives extends React.Component {
  state = {
    showArchives: false,
  };

  handleShowArchives = () => {
      this.setState(prevState => ({
        showArchives: !prevState.showArchives
      }));
    }

  render() {
    const { classes } = this.props;
    var showArchives; 
    if(this.state.showArchives === true){
      showArchives = <UpdateJuly4 />
    } else {
      showArchives = null; 
    }

    return (
      <div>
        <div>
          <Button 
          className={classes.button}
          color="primary" 
          onClick={this.handleShowArchives}>
              Previous Updates
          </Button>    
        </div>
        <div>
          {showArchives}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(UpdatesGetArchives);