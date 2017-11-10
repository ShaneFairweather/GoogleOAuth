import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import PostList from './PostList';
//import PostForm from '../components/PostForm';

class Home extends Component {
    render() {
        return (
            <Col xs={12} md={6}>
                {/*<PostForm />*/}
                <PostList />
            </Col>
        );
    }
}

export default Home;
