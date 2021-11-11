import React from 'react';
import './Login.css';
import {auth, provider} from "./firebase"
import { Button } from '@material-ui/core';
import { signInWithPopup} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
function Login() {
    const dispatch = useDispatch();
    const authapp = auth;
    const singIn = () =>{
        signInWithPopup(authapp, provider)
        .then(({user}) =>{
            dispatch(login({
                displayNam: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            })); 
        })
    .catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login-container">
                <img src="https://techmende.com/wp-content/uploads/2021/07/GMAIL-by-Google.jpg" alt="" />
                <Button variant="contained" color="primary" 
                 onClick={singIn}
                >Login</Button>
            </div>
        </div>
    );
}

export default Login;
