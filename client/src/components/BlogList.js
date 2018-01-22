import React, { Component } from 'react';
import BlogDetail from './BlogDetail';

const BlogList = (props) => {
    const renderList = () => {
        if (!props.blogPosts) {
            return <h1>...Loading</h1>
        }
        if(props.blogPosts) {
            return props.blogPosts.reverse().map((post) => {
                return (
                    <BlogDetail key={post.id} post={post} />
                )
            })
        }
    };

    return (
        <div>
            <div className="blog-list">
                {renderList()}
            </div>
        </div>
    )
};

export default BlogList;