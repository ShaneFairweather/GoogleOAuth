import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Card } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class BlogForm extends Component {
    state = {
        blogTitle: '',
        blogContent: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.addBlog(
            this.props.userId,
            this.state.blogTitle,
            this.state.blogContent
        );
        this.props.fetchBlogList(this.props.userId);
        this.setState({
            blogTitle: '',
            blogContent: ''
        })
    };

    onTitleTextChange = (e) => {
        this.setState({
            blogTitle: e.target.value
        })
    };

    onContentTextChange = (e) => {
        this.setState({
            blogContent: e.target.value
        })
    };

    renderButton() {
        if(this.state.blogTitle === '' || this.state.blogContent === '') {
            return (
                <Button
                    disabled
                    type="submit">
                    Add entry
                </Button>
            )
        } else {
            return (
                <Button type="submit">
                    Add entry
                </Button>
            )
        }
    }

    render() {
        return (
            <div>
                <h4>New Blog Entry</h4>
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    <FormGroup>
                        <Input
                            placeholder="Add blog title"
                            rows={5}
                            value={this.state.blogTitle}
                            onChange={this.onTitleTextChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            placeholder="Add blog content"
                            type="textarea"
                            rows="10"
                            value={this.state.blogContent}
                            onChange={this.onContentTextChange}
                        />
                    </FormGroup>
                    {this.renderButton()}
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, actions)(BlogForm);