import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ControlPanel extends Component {

    componentWillReceiveProps() {
    }


    render() {
        if (this.props.authenticated) {
            return (
                <ListGroup id="controlPanel">
                    <ListGroupItem id="portrait">
                        {/*<img className="img-responsive" src={decoded.avatar} alt="userImg"/>*/}
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
                    <h3><Link to="/signin">Log in</Link> or <Link to="/signup">create an account</Link> to make posts
                    </h3>
                </Panel>
            )
        }
    }
}

export default ControlPanel;