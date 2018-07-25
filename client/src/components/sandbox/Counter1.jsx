import React from 'react';

class Counter1 extends React.Component { 

    render(){
        return(
            <React.Fragment>
                <button type="button" onClick={() => this.props.onIncrement1()}>Increment</button>
                <br />
                <h1>
                    {this.props.value}
                </h1>
            </React.Fragment>
        )
    }
}

export default Counter1; 