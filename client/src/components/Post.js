import React from 'react';
import { Card } from 'reactstrap';

const Post = ({post}) => {
    const { _id, avatar, author, content } = post;
    return (
        <Card key={post._id} className='post'>
            <div className="post__header">
                <div className="post__avatar">
                    <img src={post.avatar} alt="userAvatar"/>
                </div>
                <div className="post__info">
                    <div className="post__author">{post.author}</div>
                    <small>{post.date}</small>
                </div>
            </div>
            <div className="post__content">{post.content}</div>
        </Card>
    )
}


export default Post;