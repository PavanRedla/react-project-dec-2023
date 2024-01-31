import React from 'react';
import { FaBeer, FaTrash, FaTrashAlt, FaTrashRestore } from "react-icons/fa";
import Increment from '../increment/Increment';
import EvenOdd from '../EvenOdd/EvenOdd';


export default function Main() {
    return <div style={{ 'minHeight': '400px' }}>
        {/* <Increment/> */}
        <EvenOdd />
    </div>
}
