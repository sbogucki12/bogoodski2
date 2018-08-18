import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InstagramEmbed from 'react-instagram-embed'


const styles = theme => ({
  
  });

  const InstagramWidget = theme => {
  
      return(
                <InstagramEmbed
                url='https://www.instagram.com/p/BkOHFSIhIak/?taken-by=devbogoodski'
                maxWidth='320px !important'
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript                               
            />
      )
  }

  export default withStyles(styles)(InstagramWidget);