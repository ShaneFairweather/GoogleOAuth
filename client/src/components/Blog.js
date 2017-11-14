import React from 'react';
import { Col, Panel, Form, FormGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import BlogForm from './BlogForm';

const Blog = () => {
    return (
        <div>
            <Panel>
                <h2>My Blog</h2>
                <h5>Your personal space to post your content. Others can view your blog, but are unable to add posts here.</h5>
            </Panel>
            <BlogForm />
        </div>
    )
}

export default Blog;