import { Link } from "react-router-dom";
import "./style.css"
const Header = (props) =>{
    /* !! ispred props.username pretvara vrijednost u boolean vrijednost */
    const isLoggedIn = !!props.username;
    return (
        <>
        {/* Prazan react fragment, služi istu svrhu kao i div, ali manje opterećuje DOM */}
        {isLoggedIn && 
        <div className="App-header">
          <div className="left-section">
                      <div className="main-menu">
            <ul>
               <li><Link to="/zavrsni-zadatak/" className="sd-link">Chat</Link></li>
               <li><Link to="/zavrsni-zadatak/about" className="sd-link">About</Link></li>
               <li onClick={props.handleLogout} ><Link to="#" className="logout-btn">Logout</Link></li>
            </ul>
          </div>
          </div>
          <div className="right-section">
          <h1>{props.username}'s Chat BOX</h1>
          <img src={require('../img/box.png') } alt='logo' className='img-height-header'></img>
          </div>

        
        
      </div>}

{/*      {!isLoggedIn &&  <div className="App-header">
        <div></div>
        <h1>Chat Application</h1>
        
        </div>}*/}
      </>
    )
}
export default Header;