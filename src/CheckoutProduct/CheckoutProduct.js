import React from 'react';
import styles from './CheckoutProduct.module.css';
import {useStateValue} from "../StateProvider/StateProvider";

const CheckoutProduct = ({id, title, image, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromUmbrella = () => {
        dispatch({
            type: 'REMOVE_FROM_UMBRELLA',
            id: id
        });
    };

    return (
        <div className={styles.checkoutProduct}>
            <img src={image} alt="product-image"/>

            <div className={styles.checkoutProductInfo}>
                <p className={styles.title}>{title}</p>
                <p className={styles.checkoutProductPrice}>
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>
                <div className={styles.checkoutProductRating}>
                    <p className={styles.rating}>Rating:</p>
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>☂︎</p>
                        ))}
                </div>
                <button onClick={removeFromUmbrella}>Remove from umbrella</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
