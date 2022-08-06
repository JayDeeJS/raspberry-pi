import React, {useEffect} from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import {useStateValue} from "./StateProvider/StateProvider";
import {auth} from "./firebase/firebase";

function App() {
    const [{ user }, dispatch] = useStateValue();

    //runs based on given condition
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser){
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                })
            } else{
                dispatch({
                    type: "SET_USER",
                    user: null,
                })
            }
        })

        return () => {
            unsubscribe(); //cleanup operation
        }

    }, [])

    console.log('USER IS ----->', user);

    return (
        <div>
            <Routes>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
