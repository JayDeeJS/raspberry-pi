import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {auth} from "../firebase/firebase";
import styles from './Header.module.css';
import {useStateValue} from "../StateProvider/StateProvider";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    const [{basket, user}] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav>
            <Link to="/">
                <img
                    src="https://images.hdqwalls.com/wallpapers/raspberry-pi-4k-bt.jpg"
                    alt="raspberry-logo"/>
            </Link>

            {/*search box*/}
            <div className={styles.headerSearch}>
                <input type="text"/>
                <button type="submit">
                    <SearchIcon/>
                </button>
            </div>

            {/*3 links*/}
            <div className={styles.headerNav}>
                {/*1st link*/}
                <NavLink to={!user && "/login"} className={styles.headerLink}>
                    <div onClick={login} className={styles.headerOption}>
                        <span className={styles.headerOptionLineOne}>Hello, {user?.email}</span>
                        <span className={styles.headerOptionLineTwo}>{!user ? 'Sign in' : 'Sign out'}</span>
                    </div>
                </NavLink>

                {/*2nd link*/}
                <NavLink to="/" className={styles.headerLink}>
                    <div className={styles.headerOption}>
                        <span className={styles.headerOptionLineOne}>Returns</span>
                        <span className={styles.headerOptionLineTwo}>& Orders</span>
                    </div>
                </NavLink>

                {/*3rd link*/}
                <NavLink to="/" className={styles.headerLink}>
                    <div className={styles.headerOption}>
                        <span className={styles.headerOptionLineOne}>Your</span>
                        <span className={styles.headerOptionLineTwo}>Raspberry</span>
                    </div>
                </NavLink>

                {/*4th link*/}
                <NavLink to="/checkout" className={styles.headerLink}>
                    <div className={styles.headerOptionBasket}>
                        {/*shopping basket icon*/}
                        <ShoppingCartIcon/>

                        {/*items' number in the basket*/}
                        <span className={styles.headerOptionBasketCount}>{basket?.length}</span>
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;
