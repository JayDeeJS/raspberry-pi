import React from 'react';
import styles from './Home.module.css';
import Header from "../Header/Header";
import Product from "../Product/Product";

const Home = () => {
    return (
        <>
            <Header/>
            <div className={styles.home}>
                <img
                    className={styles.homeImage}
                    src="https://images.unsplash.com/photo-1643780668909-580822430155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                    alt="banner"/>

                {/*Product props*/}
                <div className={styles.homeRow}>
                    <Product
                        id="1"
                        title="T-Virus serum"
                        price={10.98}
                        rating={5}
                        image={"https://images.unsplash.com/photo-1651760301007-5080dc7fc6a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1205&q=80"}
                    />
                    <Product
                        id="2"
                        title="G-Virus serum"
                        price={10.98}
                        rating={5}
                        image={"https://images.unsplash.com/photo-1486049125644-f35e226a5e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    />
                    <Product
                        id="3"
                        title="C-Virus serum"
                        price={10.98}
                        rating={5}
                        image={"https://images.unsplash.com/photo-1647853042468-a152e59ab9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
