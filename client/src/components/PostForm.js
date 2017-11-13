import React, { Component } from 'react';
import { Panel, Form, FormControl, FormGroup, Button, ButtonToolbar, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postContent: ''
        };
        this.onTextChange = this.onTextChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTextChange(e) {
        this.setState({
            postContent: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.props.user.image);
        this.props.addPost(
            this.props.user.username,
            this.props.user.image,
            this.state.postContent
        )
        this.props.fetchPostList();
    }

    render() {
        return (
            <Panel>
                <h3>Add a post</h3>
                <Form id="postForm" onSubmit={this.onSubmit}>
                    <FormGroup controlId="formControlsTextarea">
                        {/*<ControlLabel>Textarea</ControlLabel>*/}
                        <FormControl
                            componentClass="textarea"
                            placeholder="Add post content"
                            rows={4}
                            value={this.state.postContent}
                            onChange={this.onTextChange}
                        />
                    </FormGroup>
                    <ButtonToolbar>
                        <Button
                            className="postSubmit"
                            type="submit">
                            Add post
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

export default connect(mapStateToProps, actions)(PostForm);