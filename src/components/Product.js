import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
    const { product, showBtn } = props;
    return (
        <>
            <div className="card">
                <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.titel}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.titel}</h5>
                    <p className="card-text">{product.description}</p>
                    <p>price : {product.price}$</p>
                    { showBtn &&
                        <Link href="#" className="btn btn-primary" to={`/product/${product.id}`}>
                            Detals
                        </Link>
                    }
                </div>
            </div>
        </>
    );
}
