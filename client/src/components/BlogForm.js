import React, { Component } from 'react';
import { Col, Panel, Form, FormGroup, FormControl, ButtonToolbar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class BlogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogTitle: '',
            blogContent: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onTitleTextChange = this.onTitleTextChange.bind(this);
        this.onContentTextChange = this.onContentTextChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.addBlog(
            this.props.user.googleId,
            this.state.blogTitle,
            this.state.blogContent
        );
        this.setState({
            blogTitle: '',
            blogContent: ''
        })
    }

    onTitleTextChange(e) {
        this.setState({
            blogTitle: e.target.value
        })
    }

    onContentTextChange(e) {
        this.setState({
            blogContent: e.target.value
        })
    }

    render() {
        return (
            <Panel>
                <h4>New Blog Entry</h4>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup controlId="formInlineName">
                        <FormControl
                            placeholder="Add blog title"
                            rows={5}
                            value={this.state.blogTitle}
                            onChange={this.onTitleTextChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="formInlineName">
                        <FormControl
                            componentClass="textarea"
                            placeholder="Add blog content"
                            rows={5}
                            value={this.state.blogContent}
                            onChange={this.onContentTextChange}
                        />
                    </FormGroup>
                    <ButtonToolbar>
                        <Button type="submit">
                            Add entry
                        </Button>
                    </ButtonToolbar>
                </Form>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, actions)(BlogForm);