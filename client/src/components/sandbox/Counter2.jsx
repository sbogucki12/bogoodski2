import React from 'react';

class Counter2 extends React.Component {
    render(){
        return(
            <React.Fragment>
                <button type="button" onClick={() => this.props.onIncrement2()}>Increment</button>
                <br />
                {this.props.value}
            </React.Fragment>            
        )
    }
}

export default Counter2; 