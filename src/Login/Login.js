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
                <img onClick={login} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d5851d-204c-4d9e-a61a-1895e0298a39/d31jfpe-07978a1f-4481-48b6-8323-d521e22801b5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1ZDU4NTFkLTIwNGMtNGQ5ZS1hNjFhLTE4OTVlMDI5OGEzOVwvZDMxamZwZS0wNzk3OGExZi00NDgxLTQ4YjYtODMyMy1kNTIxZTIyODAxYjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p1dgtByVIKmyCTNsDvZIYvIk3HyjL9cyHSIT8VjqY2Y" alt="home"/>
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
                <p>By continuing you agree to Umbrella Corporation's Conditions of Use and Privacy Notice</p>
                <button
                    onClick={register}
                    className={styles.loginRegisterButton}>
                    Create your Umbrella Account
                </button>
            </div>
        </div>
    );
};

export default Login;
