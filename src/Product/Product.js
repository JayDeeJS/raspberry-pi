import React from 'react';
import styles from './Product.module.css';
import {useStateValue} from "../StateProvider/StateProvider";

const Product = ({id, title, image, price, rating}) => {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_UMBRELLA',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className={styles.product}>
            <div className={styles.productInfo}>
                <p className={styles.title}>{title}</p>
                <p className={styles.productPrice}>
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>
                <div className={styles.productRating}>
                    <p className={styles.rating}>Rating:</p>
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>☂︎</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="flask"/>
            <button onClick={addToBasket}>Add to umbrella</button>
        </div>
    );
};

export default Product;
