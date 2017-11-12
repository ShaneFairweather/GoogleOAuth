import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import PostList from './PostList';
import PostForm from '../components/PostForm';

class Home extends Component {
    render() {
        return (
            <div>
                <PostForm />
                <PostList />
            </div>
        );
    }
}

export default Home;
