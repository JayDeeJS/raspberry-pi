import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from './Login.module.css';
import {auth} from "../firebase/firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate("/");
        })
            .catch(e => alert(e.message));
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                navigate("/");
            })
            .catch((e) => alert(e.message));
    }

    return (
        <div className={styles.login}>
            <Link to="/">
                <img onClick={login}
                     src="https://cdn.shopify.com/s/files/1/0176/3274/products/raspberry-pi-enamel-pin-badge-raspberry-pi-rpi-013-30241336000707_grande.jpg?v=1646240591"
                     alt="home"/>
            </Link>
            <div className={styles.loginContainer}>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button
                        onClick={login}
                        type="submit"
                        className={styles.loginSignInButton}>
                        Sign in
                    </button>
                </form>
                <p>By continuing you agree to Raspberry's Conditions of Use and Privacy Notice</p>
                <button
                    onClick={register}
                    className={styles.loginRegisterButton}>
                    Create your Raspberry Account
                </button>
            </div>
        </div>
    );
};

export default Login;
