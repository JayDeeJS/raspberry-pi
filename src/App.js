import React, {useEffect} from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import {useStateValue} from "./StateProvider/StateProvider";
import {auth} from "./firebase/firebase";
import {Toaster} from "react-hot-toast";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";

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
            <Toaster/>
        </div>
    );
}

export default App;
