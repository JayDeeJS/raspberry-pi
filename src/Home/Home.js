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
                    src="https://wallpaperaccess.com/full/1597983.jpg"
                    alt="banner"/>

                {/*Product props*/}
                <div className={styles.homeRow}>
                    <Product
                        id="R-001"
                        title="Raspberry Pi Zero 2 W"
                        price={15.15}
                        rating={4}
                        image={"https://images.prismic.io/rpf-products/3fe7f109-d614-4030-92cd-4bfff10d80aa_Raspberry%20Pi%20Zero%202%20W%20Hero%20WEB%20RES.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=799&h=533"}
                    />
                    <Product
                        id="R-002"
                        title="Raspberry Pi Pico"
                        price={4.14}
                        rating={5}
                        image={"https://images.prismic.io/rpf-products/7d247ace-afb2-4555-b7b3-4f236eb779d6_Raspberry%20Pi%20Pico%201.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=799&h=533"}
                    />
                    <Product
                        id="R-003"
                        title="RP2040"
                        price={13.99}
                        rating={4}
                        image={"https://images.prismic.io/rpf-products/94107323-e359-4bf0-a7cb-a5f4f72586ad_RP2040%20LO%20RES.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=799&h=533"}
                    />
                </div>
                <div className={styles.homeRow}>
                    <Product
                        id="R-004"
                        title="Raspberry Pi 3 Model A+"
                        price={35.15}
                        rating={5}
                        image={"https://images.prismic.io/rpf-products/581d414e-e8b2-42c4-850a-54655f388bb6_3A%2B%20Angle%20REFRESH.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=799&h=533"}
                    />
                    <Product
                        id="R-005"
                        title="Raspberry Pi 1 Model B+"
                        price={11.99}
                        rating={5}
                        image={"https://images.prismic.io/rpf-products/3dc09a41-c237-4d2c-a9b8-c92eb3dc98e8_B%2B%20ANGLE%201%20REFRESH.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=799&h=533"}
                    />
                    <Product
                        id="R-006"
                        title="Raspberry Pi 1 Model A+"
                        price={14.35}
                        rating={5}
                        image={"https://images.prismic.io/rpf-products/23ca7cd2-48b1-433b-841e-cd0241a5480f_1A%20Angle%201%20REFRESH.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=799&h=533"}
                    />
                    <Product
                        id="R-007"
                        title="Raspberry Pi Zero W"
                        price={8.95}
                        rating={4}
                        image={"https://images.prismic.io/rpf-products/9371b539-77d4-47f1-b89b-aa65b23c9833_RPI%20ZERO%20W%20ANGLE%202%20REFRESH_.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=799&h=533"}
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
