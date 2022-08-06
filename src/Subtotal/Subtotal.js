import React from 'react';
import styles from './Subtotal.module.css';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../StateProvider/StateProvider";
import {getUmbrellaTotal} from "../reducer/reducer";

const Subtotal = () => {
    const [{ basket }] = useStateValue();

    return (
        <div className={styles.subtotal}>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items):
                            <strong>{`${value}`}</strong>
                        </p>
                        <small className={styles.subtotalGift}>
                            <input type="checkbox"/>This order contains gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getUmbrellaTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    );
};

export default Subtotal;
