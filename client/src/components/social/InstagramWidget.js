import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InstagramEmbed from 'react-instagram-embed'


const styles = theme => ({
    
  });

  const InstagramWidget = theme => {
      return(
                <InstagramEmbed
                url='https://www.instagram.com/p/BkOHFSIhIak/?taken-by=devbogoodski'
                maxWidth={320}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
      )
  }

  export default withStyles(styles)(InstagramWidget);