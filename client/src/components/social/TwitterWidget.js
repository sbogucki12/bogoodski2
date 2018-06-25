import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const styles = theme => ({
    
  });

  const TwitterWidget = theme => {
      return(
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="devbogoodski"
                options={{height: 400}}
                />
      )
  }

  export default withStyles(styles)(TwitterWidget);