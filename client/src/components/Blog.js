import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import * as actions from '../actions';

class Blog extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        this.props.fetchBlogList(id);
    }

    componentDidUpdate(prevProps) {
        const id = this.props.match.params.id;
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.props.fetchBlogList(id);
        }
    }

    renderBlogHeader() {
        // const blogOwnerInfo = this.props.location.state;
        if(this.props.user && (this.props.user.profileId == this.props.match.params.id)) {
            return (
                <Card className="blog__header">
                    <h2>My Blog</h2>
                    <h5>Your personal space to post your content. Others can view your blog, but are unable to add
                        posts
                        here.</h5>
                    <BlogForm userId={this.props.match.params.id}/>
                </Card>
            )
        } else if(this.props.location.state) {
            const blogOwnerInfo = this.props.location.state;
            return (
                <Card className="blog__header--other">
                    <div className="blog__header__img">
                        <img src={blogOwnerInfo.img} alt={"alt"}/>
                    </div>
                    <h2 className="blog__header__name">{blogOwnerInfo.name}'s Blog</h2>
                </Card>
            )
        }
    };

    render() {
        console.log(this.props.location.state);
        return (
            <div>
                {this.renderBlogHeader()}
                <BlogList blogPosts={this.props.blogPosts}/>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        blogPosts: state.blogPosts,
        user: state.user
    }
}

export default connect(mapStateToProps, actions)(Blog);