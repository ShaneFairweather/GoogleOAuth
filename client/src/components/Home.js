import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import PostList from './PostList';
import PostForm from '../components/PostForm';

const Home = (props) => {
    if(props.user) {
        return (
            <div>
                <PostForm/>
                <PostList posts={props.posts}/>
            </div>
        );
    } else {
        return (
            <div>
                <PostList posts={props.posts}/>
            </div>
        )
    }
}

export default Home;
