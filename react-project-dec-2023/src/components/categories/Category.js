import React from 'react';
import './categories.css'

export default function Category(props) {
    return <>
        <div className='col'>
            <div className='category text-center'>
                <img src={props.img} alt='some text' />
                <div>{props.name}</div>
            </div>
        </div>
    </>
}
