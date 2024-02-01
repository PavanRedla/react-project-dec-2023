import React from 'react';
import products from './products.json'

export default function ListDemo3() {
    return <>
        <h2 className='text-center'>Product List</h2>

        <div className='container'>
            <div className='row'>
                {products.map(product => {
                    return <div className='col-sm-3'>
                        <div classname="card">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div classname="card-body text-center" >
                                <h5 classname="card-title">{product.category}</h5>
                                <p classname="card-text" style={{ height: '150px' }}>{product.description}</p>
                                <button className='btn btn-primary'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}
