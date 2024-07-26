import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-details">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
        </div>
    );
};

export default ProductDetails;
