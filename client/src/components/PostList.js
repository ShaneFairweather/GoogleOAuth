import React, { Component } from 'react';
import { Panel }  from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';


const PostList = (props) => {
    const renderList = () => {
        if(props.posts) {
            console.log(props.posts);
            return props.posts.reverse().map((post) => {
                return (
                    <Panel key={post._id} className='post'>
                        <div className="innerPost">
                            <div>
                                <img className="postAvatar" src={post.avatar} alt="userAvatar"/>
                                <h4 className="postAuthor">{post.author}</h4>
                                <small>{post.date}</small>
                            </div>
                            <div className="postBody">{post.content}</div>
                        </div>
                    </Panel>
                )
            })
        }
    };

    return (
        <div>
            <div className="postList">
                {renderList()}
            </div>
        </div>
    )
}

export default PostList;