import React from 'react';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className='login' style={{
            position: "relative",
            width: "100%",
            marginLeft: "35%",
            marginTop: "10%",
            // display: "flex",
            justifyContent: "spaceBetween"
        }}>
            <div className='Login__option'>
                <div className='Login__logo'>
                    <img className='Login__img' src='https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png' style={{
                        height: "120px"
                    }}
                        alt='' />
                    <h3>Facebook helps you connect and share with <br /> the people in your life</h3>
                </div>
            </div>
            <div className='Login__option'>
                <div className='Login__card'>
                    <input type="text" placeholder='Currently not functional' className='Login__input' style={{
                        width: "350px",
                        height: "43px",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        display: "block",
                        borderColor: "gray",
                        marginTop: "8px",
                        borderRadius: "5px",
                        backgroundColor: "#fff",
                    }}>

                    </input>
                    <input type="password" placeholder='Currently not functional' className='Login__input' style={{
                        width: "350px",
                        height: "43px",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        display: "block",
                        borderColor: "gray",
                        marginTop: "8px",
                        borderRadius: "5px",
                        backgroundColor: "#fff",
                    }}>

                    </input>
                    <button className='Login__btn' onClick={signIn} style={{
                        width: "358px",
                        height: "43px",
                        display: "block",
                        marginTop: "8px",
                        backgroundColor: "#2e81f4",
                        color: "#fff",
                        fontSize: "18px",
                        borderRadius: "5px",
                        borderStyle: "none",
                        marginBottom: "25px",
                        cursor: "pointer"
                    }}>
                        Login
                    </button>
                    <h4>Click on Login to use google authentication</h4>
                </div>
            </div>
        </div >
    )
}

export default Login