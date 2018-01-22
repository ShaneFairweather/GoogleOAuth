import React, { Component } from 'react';
import { Card }  from 'reactstrap';
import Post from './Post';

const PostList = (props) => {
    const renderList = () => {
        if(props.posts) {
            return props.posts.reverse().map((post) => {
                return (
                    <Post post={post} key={post._id}/>
                )
            })
        }
    };

    return (
        <div>
            <div className="post-list">
                {renderList()}
            </div>
        </div>
    )
}

export default PostList;