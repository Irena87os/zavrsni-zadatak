import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "./Login.css";
import "./style.css"

const Login = (props) =>{
    const [usernameText, setUsernameText] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.onLogin(usernameText);
        navigate("/zavrsni-zadatak/");        
    }
    
    return (
      
    <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
            
            <label htmlFor="title">
            <img src={require('../img/banana_logo.png' ) } alt='logo' className='login-logo'></img>
                <h1>Messenger</h1>
            </label>
            <input 
            className="input"
            id="title"
            type="text" 
            placeholder="Unesi ime" 
            required 
            value={usernameText} 
            onChange={(e)=> setUsernameText(e.target.value)}/>
            <button className="login-btn">Login</button>
            
        </form>
    </div>)
}

export default Login;