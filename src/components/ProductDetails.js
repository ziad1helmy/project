import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

export default function ProductDetals() {
    const api_url = "https://fakestoreapi.com/products";
    const Params = useParams();
    const [product, setproduct] = useState({});
    

    useEffect(() => {
        fetch(`${api_url}/${Params.ProductId}`)
            .then((res) => res.json())
            .then((product) => setproduct(product));
    }, []);

    return (
        <>
            <Product product={product} showBtn={"false"} />
        </>
    );
}
