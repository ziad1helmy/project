import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
    const api_url = "https://fakestoreapi.com/products";
    const [Products, setproducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProduct = () => {
        fetch(api_url)
            .then((res) => res.json())
            .then((data) => setproducts(data));
    };

    const getCategories = () => {
        fetch(`${api_url}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    };

    const getProductInCategorie = (catname) => {
        fetch(`${api_url}/category/${catname}`)
            .then((res) => res.json())
            .then((data) => {
                setproducts(data);
            });
    };

    useEffect(() => {
        getProduct();
        getCategories();
    }, []);

    return (
        <>
            <h2 className="text-center p-4">our broduct</h2>
            <div className="container">
                <button
                    className="btn btn-info"
                    onClick={() => {
                        getProduct();
                    }}
                >
                    All
                </button>
                {categories.map((cat) => {
                    return (
                        <button
                            className="btn btn-info"
                            key={cat}
                            onClick={() => {
                                getProductInCategorie(cat);
                            }}
                        >
                            {cat}
                        </button>
                    );
                })}
                <div className="row">
                    {Products.map((product) => {
                        return (
                            <div className="col-3" key={product.id}>
                                <Product product={product} showBtn={true} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
