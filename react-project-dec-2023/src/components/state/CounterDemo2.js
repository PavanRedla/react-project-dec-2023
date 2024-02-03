import React from 'react'

export default function CounterDemo2() {
    let counter = 0; // function variable

    let increment = () => {
        counter++;
        console.log(counter)
    }

    return <>
        <p>Counter value is {counter}</p>
        <button onClick={increment}>Increment</button>
    </>
}
