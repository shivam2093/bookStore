import React from 'react'
import "./HeaderNav.css";
import { Link, withRouter } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import {useStateValue} from '../Provider'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import auth from '../firebase'
function HeaderNav() {

    const [{ user, basket }, dispatch] = useStateValue();
    
    const handleAuth = () => {

        if (user) {

            auth.signOut();
        }


    }    


    return (
        <nav className="header">
            <div className="appname">
                <div className="header__nav">

                    <div className="left_side">
                        
                         

                                {/* <img src={ReactLogo}
                                    alt="hey" /> */}
                                <div className="name">
                        <ImportContactsTwoToneIcon fontSize="large"/>    <h2> B </h2> <h3>for book </h3>
                            
                               </div>
                  

                    </div>
                    <div className="login_setting">
                        <div onClick={handleAuth} className="header__options">
                            <span className="header__optionlineOne" > Hello {user ? (user.displayName): 'Guest'} </span> &nbsp;
                            <Link to={!user && '/login'} className="header__link">
                                <span className="header__optionlineTwo"> {user ? 'SignOut' : 'SignIn'} </span>
                            </Link>
                        </div>
                        <div className="header__options" style={{ alignItems: "space-between" }}>
                            <div className="header__optionlineOne">
                                <Avatar src={user ? (user.photoURL) : ''}  />
                            </div>
                        </div>
                        <div className="header__options">
                            <div className="header__optionlineOne">
                                <Link to="/checkout">
                                    <ShoppingBasketIcon fontSize="large" />
                                </Link>
                            </div>

                            <span className="basket_count" style={{ fontFamily: "monospace" }}>{basket?.length }</span>
                        </div>
                    </div>


                </div>
            </div>
        </nav>

    )
}

export default HeaderNav
