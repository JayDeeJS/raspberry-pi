import React from 'react';
import styles from './Product.module.css';
import {useStateValue} from "../StateProvider/StateProvider";
import toast from "react-hot-toast";
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
        toast.success(`${title} has been added to your Cart!`, {
            style: {
                border: '2px solid #d1db17',
                padding: '16px',
                color: '#e66322',
            },
            iconTheme: {
                primary: '#14e040',
                secondary: '#e7f13b',
            },
        });
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
                            <StarBorderIcon/>
                        ))}
                </div>
            </div>
            <img src={image} alt="flask"/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
};

export default Product;
