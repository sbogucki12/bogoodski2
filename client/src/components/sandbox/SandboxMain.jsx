import React from 'react';
import Counter1 from './Counter1';
import Counter2 from './Counter2';

class SandboxMain extends React.Component {
    constructor(){
        super()
        this.state = {
            counter1Id: 1, 
            counter1Value: 0, 
            counter2Id: 2, 
            counter2Value: 0            
        }
    }

    onIncrement1 = () => {        
        this.setState((prevState) => ({
            counter1Value: prevState.counter1Value + 1
        }))
        console.log(`onIncrement = ${this.state.counter1Value}`);
    };

    onIncrement2 = () => {        
        this.setState((prevState) => ({
            counter2Value: prevState.counter2Value + 1
        }))
        console.log(`onIncrement2 = ${this.state.counter2Value}`);
    };

    render(){
        return (
            <React.Fragment>
                <Counter1 onIncrement1={this.onIncrement1} value={this.state.counter1Value} />
                <Counter2 onIncrement2={this.onIncrement2} value={this.state.counter2Value} />
            </React.Fragment>
        )
    }
}

export default SandboxMain; 