import React, { useContext, useState } from 'react';
import './LoginPage.css';
import logo from '../../resources/logos/logo.png';
import googleLogo from '../../resources/logos/googleLogo.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const LoginPage = () => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    let [userInfo,  setUserInfo] = useContext(userContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    
    const [loginError, setLoginError] = useState({
        hasError: false,
        errorMsg: "",
    })
    console.log(userInfo);
    const upDateUserContext = userObject => {
        const newInfo = {...userObject, ...userInfo};
        newInfo.isAuthorizedUser = true;
        setUserInfo(newInfo);
    }

    const updateLoginError = (bool, message) => {
        const updateCondition = {...loginError};
        updateCondition.hasError = bool;
        updateCondition.errorMsg = message;
        setLoginError(updateCondition);
    }

    const googleBtnClickHandler = () => {
        firebase.auth().signInWithPopup(provider)
        .then( result => {
            const user = result.user;
            upDateUserContext(user);
            updateLoginError(false, "");
            history.replace(from);
        })
        .catch( error => {
            const errorMessage = error.message;
            updateLoginError(true, errorMessage)
        });
    }

    return (
        <div className="formDiv">
            <Link to="/"className="logoDiv">
                <img src={logo} alt="logo" />
            </Link>
            <div className="formContainer col-sm-8 col-md-6 col-lg-5">
                <div className="form">

                    <h3>Login with</h3>

                    <button className="formBtn" onClick={googleBtnClickHandler}>
                        <img src={googleLogo} alt="google logo"/>                      
                        Continue with Google
                    </button>

                    <p>
                        Don't have an account? 
                        <Link to="#"> <u>create an account</u> </Link>
                    </p>
                    {
                        loginError.hasError && <p style={{color:"red"}}><small>**{loginError.errorMsg}</small></p>
                    }

                </div>
            </div>
        </div>
    );
};

export default LoginPage;