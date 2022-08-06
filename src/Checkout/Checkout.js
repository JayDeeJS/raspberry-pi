import React from 'react';
import styles from './Checkout.module.css';
import {useStateValue} from "../StateProvider/StateProvider";
import Header from "../Header/Header";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import CurrencyFormat from "react-currency-format";

const Checkout = () => {
    const [{basket}] = useStateValue();

    return (
        <>
            <Header/>
            <div className={styles.checkout}>
                <div className={styles.checkoutLeft}>
                    <img className={styles.checkoutAd}
                         src="https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1233&q=80"
                         alt="checkout-ad"/>
                    {basket?.length === 0
                        ? <div>
                            <h2 className={styles.checkoutTitle}>Your Shopping Umbrella is empty</h2>
                            <p>You have no items in your Umbrella. Click "Add to umbrella" to add the item.</p>
                        </div>
                        : <div>
                            <h2 className={styles.checkoutTitle}>Your Shopping Umbrella</h2>

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
