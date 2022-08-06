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
                        id="V-001"
                        title="T-Virus serum"
                        price={10.98}
                        rating={4}
                        image={"https://images.unsplash.com/photo-1651760301007-5080dc7fc6a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1205&q=80"}
                    />
                    <Product
                        id="V-002"
                        title="G-Virus serum"
                        price={14.97}
                        rating={5}
                        image={"https://images.unsplash.com/photo-1486049125644-f35e226a5e14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    />
                    <Product
                        id="V-003"
                        title="C-Virus serum"
                        price={13.75}
                        rating={4}
                        image={"https://images.unsplash.com/photo-1647853042468-a152e59ab9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                    />
                </div>
                <div className={styles.homeRow}>
                    <Product
                        id="V-004"
                        title="Progenitor virus sample"
                        price={9.54}
                        rating={5}
                        image={"https://img.freepik.com/free-photo/covid-still-life-with-vaccine_23-2149079585.jpg?w=996&t=st=1659703550~exp=1659704150~hmac=56ea3b92b64a1ff11d751ae150d7d9a4d205c449a9c9dbf3d8c502161ece5287"}
                    /><Product
                        id="V-005"
                        title="T-Veronica virus sample"
                        price={11.99}
                        rating={5}
                        image={"https://img.freepik.com/free-photo/vaccine-bottle-syringe-held-by-doctor-with-gloves_23-2148801400.jpg?w=826&t=st=1659703640~exp=1659704240~hmac=6516076c0e30917794e0e1474680d1e36d4549e12971b52bfeb6f1db3cb88490"}
                    /><Product
                        id="V-006"
                        title="NE-T virus sample"
                        price={14.35}
                        rating={5}
                        image={"https://img.freepik.com/free-photo/doctor-holding-syringe-with-vaccine_23-2148741031.jpg?w=996&t=st=1659703731~exp=1659704331~hmac=545adf21098cac30029da995730da0ed36721119ce57e3241cb3a289eb147596"}
                    /><Product
                        id="V-007"
                        title="tG-virus sample"
                        price={11.45}
                        rating={4}
                        image={"https://img.freepik.com/premium-photo/doctor-holding-syringe-with-vaccine_23-2148741032.jpg?w=900"}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
