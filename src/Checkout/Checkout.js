import React from 'react';
import styles from './Checkout.module.css';
import {useStateValue} from "../StateProvider/StateProvider";
import Header from "../Header/Header";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import CurrencyFormatter from 'react-currency-format';

const Checkout = () => {
    const [{basket}] = useStateValue();

    return (
        <>
            <Header/>
            <div className={styles.checkout}>
                <div className={styles.checkoutLeft}>
                    <img className={styles.checkoutAd}
                         src="https://korben.info/app/uploads/2018/03/rpi3B.jpg"
                         alt="checkout-ad"/>
                    {basket?.length === 0
                        ? <div>
                            <h2 className={styles.checkoutTitle}>Your Shopping Basket is empty</h2>
                            <p>You have no items in your Basket. Click "Add to basket" to add the item.</p>
                        </div>
                        : <div>
                            <h2 className={styles.checkoutTitle}>Your Shopping Basket</h2>

                            {/*List of all of the Checkout items*/}
                            <div className={styles.checkoutWrapper}>
                                {basket?.map((item) => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))}
                            </div>
                        </div>}
                </div>
                {basket.length > 0 && (
                    <div className={styles.checkoutRight}>
                        <Subtotal/>
                    </div>
                )}
            </div>
        </>
    );
};

export default Checkout;
