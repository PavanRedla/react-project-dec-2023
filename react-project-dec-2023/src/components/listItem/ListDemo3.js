import React from "react";
import products from "./products.json";
import "./listDemo3.css";

export default function ListDemo3() {
  return (
    <>
      <h2 className="text-center">Product List</h2>

      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-sm-3" key={product.id}>
                <div className="card" style={{ height: "750px" }}>
                  <img src={product.image} className="card-img-top" alt="..." />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.category}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
