import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

const ControlPanel = (props) => {
    if (props.user) {
        return (
            <div className="control-panel">
                <div className="control-panel__item portrait">
                    <img className="img-responsive" src={props.user.image} alt="userImg"/>
                </div>
                <Link className="secondLink" to="/"><div className="control-panel__item"><i className="fa fa-comments-o" />Feed</div></Link>
                <Link className="thirdLink" to="/account"><div className="control-panel__item"><i className="fa fa-user-circle-o" />Profile Settings</div></Link>
                <Link to={`/users/${props.user.profileId}/blog`}>
                    <div className="control-panel__item"><i className="fa fa-list-alt" />Blog</div>
                </Link>
            </div>
        )
    } else {
        return (
            <Card className="control-panel">
                <h2>InterReact</h2>
                <p className="loginControlPanel__text"><Link to="/signin">Sign in</Link> to create posts
                </p>
            </Card>
        )
    }
}

export default ControlPanel;