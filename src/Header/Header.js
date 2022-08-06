import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {auth} from "../firebase/firebase";
import styles from './Header.module.css';
import {useStateValue} from "../StateProvider/StateProvider";

const Header = () => {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user){
            auth.signOut();
        }
    }

    return (
        <nav>
            <Link to="/">
                <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d5851d-204c-4d9e-a61a-1895e0298a39/d31jfpe-07978a1f-4481-48b6-8323-d521e22801b5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1ZDU4NTFkLTIwNGMtNGQ5ZS1hNjFhLTE4OTVlMDI5OGEzOVwvZDMxamZwZS0wNzk3OGExZi00NDgxLTQ4YjYtODMyMy1kNTIxZTIyODAxYjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p1dgtByVIKmyCTNsDvZIYvIk3HyjL9cyHSIT8VjqY2Y"
                    alt="umbrella-logo"/>
            </Link>

            {/*search box*/}
            <div className={styles.headerSearch}>
                <input type="text"/>
                <button type="submit">
                    <i className="fa fa-search"></i>
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
                        <span className={styles.headerOptionLineTwo}>Umbrella</span>
                    </div>
                </NavLink>

                {/*4th link*/}
                <NavLink to="/checkout" className={styles.headerLink}>
                    <div className={styles.headerOptionBasket}>
                        {/*shopping basket icon*/}
                        <i className="fa fa-umbrella" style={{fontSize: "35px", color: "blue"}}></i>

                        {/*items' number in the basket*/}
                        <span className={styles.headerOptionBasketCount}>{basket?.length}</span>
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;
