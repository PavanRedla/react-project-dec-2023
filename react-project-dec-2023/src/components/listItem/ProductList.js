import React, { useState } from 'react';
import productsArr from './products.json';
import SearchBar from 'react-js-search';

export default function ProductList() {
    const [filteredProducts, setFilteredProducts] = useState(productsArr);

    const sortAsc = () => {
        let sortedProducts = filteredProducts.sort((p1, p2) => p1.price - p2.price);
        setFilteredProducts([...sortedProducts])
    }
    const sortDesc = () => {
        let sortedProducts = filteredProducts.sort((p1, p2) => p2.price - p1.price);
        setFilteredProducts([...sortedProducts])
    }

    return <>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <SearchBar
                        onSearchTextChange={(term, filteredData) => {
                            setFilteredProducts([...filteredData]);
                        }}
                        // onSearchButtonClick={onSearchClick}
                        placeHolderText={"Search here..."}
                        data={productsArr}
                    />
                </div>
                <div className='col-sm-4 mt-2'>
                    <button onClick={sortAsc} className='btn btn-primary m-1'>Asc</button>
                    <button onClick={sortDesc} className='btn btn-secondary'>Desc</button>
                </div>

            </div>
            <div className='row mt-3'>
                {filteredProducts.map(product => {
                    return <div className='col-sm-3 mb-1' key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" style={{ height: '200px' }} alt='something' />
                            <div className="card-body text-center" >
                                <h5 className="card-title">{product.category}</h5>
                                <p className="card-text text-truncate" title={product.description}>{product.description}</p>
                                <p className="card-text text-truncate" title={product.price}>{product.price}</p>
                                <button className='btn btn-primary'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}
