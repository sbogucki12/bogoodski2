import React from 'react';

class ApiPlayground extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false, 
            data: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())        
        .then(json => {
            this.setState({
                isLoaded: true,
                data: json
            })
        })
    }     

    render(){
        const isLoaded = this.state.isLoaded;
        const data = this.state.data;  
        
        return(
            <React.Fragment>
                {isLoaded ? <ul>
                {data.map(item => (
                    <li key={item.id}>
                    Name: {item.name}  | Street: {item.email}
                    </li>
                ))}
                </ul> : <span>loading...</span>}

            </React.Fragment>)
    }
}

export default ApiPlayground; 

