import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ControlPanel = (props) => {
    if (props.user) {
        return (
            <ListGroup id="controlPanel">
                <ListGroupItem id="portrait">
                    <img className="img-responsive" src={props.user.image} alt="userImg"/>
                </ListGroupItem>
                <Link className="secondLink" to="/"><ListGroupItem>Feed</ListGroupItem></Link>
                <Link className="thirdLink" to="/account"><ListGroupItem>Profile Settings</ListGroupItem></Link>
                <Link className="lastLink" to="/blog"><ListGroupItem>Blog</ListGroupItem></Link>
            </ListGroup>
        )
    } else {
        return (
            <Panel className="loginControlPanel">
                <h2>InterReact</h2>
                <p className="loginControlPanel__text"><Link to="/signin">Sign in</Link> to create posts
                </p>
            </Panel>
        )
    }
}

export default ControlPanel;