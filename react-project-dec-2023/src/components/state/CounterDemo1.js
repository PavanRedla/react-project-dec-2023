import React, { Component } from 'react'

export default class CounterDemo1 extends Component {
    counter = 0; // Class Variable / instance variable

    increment=()=> {
        this.counter = this.counter + 1;
        console.log(this.counter);
        this.forceUpdate(); // forceUpdate() is inbuilt method
    }

    render() {
        return <>
            <h2>This is counter Demo 1 Component</h2>
            <hr />
            <div>Counter value is {this.counter} </div>
            <p>
                <button onClick={this.increment}>Increment</button>
            </p>
        </>
    }
}
