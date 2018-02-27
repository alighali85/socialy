import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state= {
            email: "",
            list: []
        }
    }

getEmail = ( input )=> {
    this.setState({
        email: input
    });
    console.log(this.state.email)
}

addEmail= ( )=> {
    const emailInput = document.getElementById('email').value;
    this.setState({
        email: emailInput
    });
    console.log( emailInput)

    let newList = this.state.list;
    newList.push( emailInput );
    this.setState({
        list: newList
    });
    this.setState({
        email: ''
    })
    console.log(this.state.list)

}



render() {

    return (
            <div> 
                
                <input id="email" />
                <button onClick={this.addEmail} >Add to list </button>
                
                <ul style={{ textAlign: 'left'}}>
                { this.state.list.slice(0).reverse().map(value=> <h2> {value} </h2>)}
                </ul>
            </div>
            )
        }
}




export default Todo;