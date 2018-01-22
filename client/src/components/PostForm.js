import React, { Component } from 'react';
import { Card, Form, Input, FormGroup, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostForm extends Component {
    state = {
        postContent: ''
    };

    onTextChange = (e) => {
        this.setState({
            postContent: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPost(
            this.props.user.username,
            this.props.user.image,
            this.state.postContent
        );
        this.props.fetchPostList();
        this.setState({
            postContent: ''
        })
    };

    renderButton() {
        if(this.state.postContent === '') {
            return (
                <Button
                    disabled
                    className="postSubmit"
                    type="submit">
                    Add post
                </Button>
            )
        } else {
            return (
                <Button
                    className="postSubmit"
                    type="submit">
                    Add post
                </Button>
            )
        }
    }

    render() {
        return (
            <Card className="post-form">
                <h3>Add a post</h3>
                <Form id="postForm" onSubmit={(e) => this.onSubmit(e)}>
                    <FormGroup>
                        <Input
                            placeholder="Add post content"
                            type="textarea"
                            value={this.state.postContent}
                            onChange={this.onTextChange}
                            rows={4}
                        />
                    </FormGroup>
                    {this.renderButton()}
                </Form>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, actions)(PostForm);