import React from 'react';
import styles from './Product.module.css';

const Product = ({id, title, image, price, rating}) => {
    return (
        <div className={styles.product}>
            <div className={styles.productInfo}>
                <p>{title}</p>
                <p className={styles.productPrice}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={styles.productRating}>
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>☂︎</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="flask"/>
            <button>Add to umbrella</button>
        </div>
    );
};

export default Product;
