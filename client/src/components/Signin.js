import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Signin extends Component {
    render() {
        return (
            <Panel className="signin">
                <h2>Sign In</h2>
                <hr/>
                <div className="signin-button-container">
                    <a href="/auth/google" className="btn btn-social btn-google signin-button">
                        <span className="fa fa-google"></span>
                        Sign in with Google
                    </a>
                    <br/>
                    <a className="btn btn-social btn-facebook signin-button">
                        <span className="fa fa-facebook"></span>
                        Sign in with Facebook
                    </a>
                </div>
            </Panel>
        )
    }
}


export default Signin;
