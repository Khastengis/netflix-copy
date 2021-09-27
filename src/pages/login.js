import React, {useState} from "react";
import NetflixImg from '../imgs/Netflix.svg'
import { FaFacebookSquare } from 'react-icons/fa'
import './pages.css'
import NetflixBg from '../imgs/bg-image.jpg'
import {useHistory} from 'react-router-dom';

export const Login = () => {

    const [form, setForm] = useState({name: "", password: ""});
    const history= useHistory();

    const loginn = () => {
        const { name, password } = form;
        if (name.length > 0 && password.length > 0) {
            history.push('/home')
        } else {
            alert("Хоосон байж болохгүй")
        }
    }

    return (
        <div className="login-page-container">
            <img className="netflix-bg" src={NetflixBg}/>
            <div style={{display: "flex", justifyContent: "flex-start", height: 45, marginLeft: 50, top: 20, position: "absolute"}}>
                <img src={NetflixImg}/>
            </div>
            <div style={{position: "absolute", top: 60}}>
                <div style={{display: "flex", justifyContent: "center", marginTop: 35, width: "100vw"}}>
                    <div className="login-container" style={{display: "flex", flexDirection: "column", width: 320, height: 540, padding: "60px 68px 40px 68px", borderRadius: 3}}>
                        <h1 className="wText">Sign In</h1>
                        <input className="input" type="text" name="firstname" placeholder="Email or phone number" onChange = {(e) => {setForm({...form, name: e.target.value})}} />
                        <input className="input" type="password" name="firstname" placeholder="Password" onChange = {(e) => {setForm({...form, password: e.target.value})}} />
                        <div className="wText pointer" style={{backgroundColor: "red", height: 27, textAlign: "center", padding: 10, fontSize: 17, fontWeight: "bold", marginTop: 25, borderRadius: 3}} onClick={loginn}>Sign in</div>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 7, color: "#B3B3B3"}}>
                            <div style={{display: "flex", alignItems: "center"}} className="lText">
                                <input type="checkbox" style={{margin: 0}}/>
                                <span style={{marginLeft: 3}}>Remember me</span>
                            </div>
                            <div className="lText under-text pointer">
                                Need help?
                            </div>
                        </div>
                        <div style={{marginTop: 14, display: "flex", alignItems: "center"}}>
                            <FaFacebookSquare color="#4267B2" style={{backgroundColor: "white", margin: 0}}/>
                            <span className="lText" style={{marginLeft: 7, color: "#737373"}}>Login with Facebook</span>
                        </div>
                        <div style={{marginTop: 14, color: "#737373"}}>
                            New to Netflix? <span className="wText under-text pointer">Signup now.</span>
                        </div>
                        <div style={{marginTop: 17, color: "#8C8C8C"}} className="lText">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <span style={{color: "#0071eb"}} className="pointer under-text">Learn more.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}