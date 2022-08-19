import React from 'react';
import styles from './CheckoutProduct.module.css';
import {useStateValue} from "../StateProvider/StateProvider";
import toast from "react-hot-toast";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const CheckoutProduct = ({id, title, image, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromUmbrella = () => {
        dispatch({
            type: 'REMOVE_FROM_UMBRELLA',
            id: id
        });
        toast.success(`${title} has been removed from your Cart!`, {
            style: {
                border: '2px solid lightsalmon',
                padding: '16px',
                color: 'salmon',
            },
            iconTheme: {
                primary: 'coral',
                secondary: '#e7f13b',
            },
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
                            <StarBorderIcon/>
                        ))}
                </div>
                <button onClick={removeFromUmbrella}>Remove from umbrella</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
