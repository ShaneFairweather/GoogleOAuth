import React, { Component } from 'react';
import { Card } from 'reactstrap';
import SocialButton from './SocialButton';

class Signin extends Component {
    render() {
        return (
            <Card className="signin">
                <h2>Sign In</h2>
                <hr/>
                <SocialButton brand="google" icon="google" color="#cb3f23" hover="#a5331c" />
                <SocialButton brand="facebook" icon="facebook-official" color="#3c5898" hover="#293e69"/>

                {/*<div className="signin-button-container">*/}
                    {/*<a href="/auth/google" className="btn btn-social btn-google signin-button">*/}
                        {/*<span className="fa fa-google" />*/}
                        {/*Sign in with Google*/}
                    {/*</a>*/}
                    {/*<br/>*/}
                    {/*<a href="/auth/facebook" className="btn btn-social btn-facebook signin-button">*/}
                        {/*<span className="fa fa-facebook" />*/}
                        {/*Sign in with Facebook*/}
                    {/*</a>*/}
                {/*</div>*/}
            </Card>
        )
    }
}


export default Signin;
