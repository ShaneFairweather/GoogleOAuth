import React from 'react';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';

const Account = (props) => {
    if(props.user) {
        return (
            <Panel className="account">
                <h2>My Account</h2>
                <hr/>
                <div className="avatarContainer">
                    <h4>Profile picture</h4>
                    <img src={props.user.image} alt="profileImg"/>
                    <ButtonToolbar>
                        <Button type="submit">
                            Upload new picture
                        </Button>
                    </ButtonToolbar>
                </div>
                <br/>
                {/*<hr/>*/}
                {/*<div className="passwordContainer">*/}
                {/*<h4>Change Password</h4>*/}
                {/*<Form>*/}
                {/*<FormGroup controlId="formInlineName">*/}
                {/*<FormControl componentClass="input" placeholder="New password" type="password" />*/}
                {/*</FormGroup>*/}
                {/*<FormGroup controlId="formInlineName">*/}
                {/*<FormControl componentClass="input" placeholder="Repeat password" type="password" />*/}
                {/*</FormGroup>*/}
                {/*<ButtonToolbar>*/}
                {/*<Button>*/}
                {/*Change password*/}
                {/*</Button>*/}
                {/*</ButtonToolbar>*/}
                {/*</Form>*/}
                {/*</div>*/}
            </Panel>
        )
    }
}

export default Account;




