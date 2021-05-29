import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import auth, { provider } from '../firebase';
import Button from '@material-ui/core/Button';
import { Container } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setcheck] = useState(true);




    const login = (event) => {

        event.preventDefault();


        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {

                history.push("/MainPage");

            })
            .catch(e => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {


                history.push("/MainPage");

            })
            .catch(e => alert(e.message));
    }

    const googleSignin = () => {

        auth.signInWithPopup(provider).then((auth) => {


            history.push("/MainPage");
        })
            .catch(e => alert(e.message));





    }

    return (
        <div className="login" >
          
          <div>
          <ImportContactsTwoToneIcon fontSize="large"/>    <h2> B </h2> <h3>for book </h3>
                            
           </div>
   
            <div className="login_form">
                <h1> Sign in </h1> &nbsp;
                <form>
                    <div className="input_user">
                        <h5> Email</h5>
                        <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                        <h5>Password</h5>
                        <input value={password} onChange={event => setPassword(event.target.value)} type="password" id="giveInput" /> &nbsp;
                    <input type="checkbox" onClick={check} /> Show Password
                        </div>
                    <span id="loglogout">
                        <Button variant="outlined" onClick={login} color="primary">Login</Button> &nbsp;&nbsp;
                        <Button variant="outlined" onClick={register} color="secondary">Create Account</Button> &nbsp;
                        <GoogleButton
                            onClick={googleSignin}
                        />
                    </span>
                </form>



            </div>

            <div className="footer">
                <footer>
                    <Container style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <p> &copy; 2021 The University of Southern Mississippi. All rights reserved
                            <Link to="usm.edu">
                                <img style={{ height: 50 }} src="https://www.usm.edu/university-communications/files/univ_c_123pc.png" alt="" />
                            </Link>
                        </p>


                    </Container>


                </footer>

            </div>

        </div>
    )
}

export default Login
