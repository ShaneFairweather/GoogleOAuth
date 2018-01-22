import React from 'react';
import { Card, Button } from 'reactstrap';

const Account = (props) => {
    // if(props.user) {
        return (
            <Card className="account">
                <h2>My Account</h2>
                <hr/>
                <div className="avatarContainer">
                    <h4>Profile picture</h4>
                    {/*<img src={props.user.image} alt="profileImg"/>*/}
                    <Button type="submit">
                        Upload new picture
                    </Button>
                </div>
                <br/>
            </Card>
        )
    // }
};

export default Account;




