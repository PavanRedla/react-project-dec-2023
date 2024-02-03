import React, { useState } from 'react'

export default function CounterDemo3() {
    let [counter, updateCounter] = useState(0);

    let increment = () => {
        updateCounter(++counter)
        console.log(counter)
    }

    return <>
        <p>Counter value is {counter}</p>
        <button onClick={increment}>Increment</button>
    </>
}
