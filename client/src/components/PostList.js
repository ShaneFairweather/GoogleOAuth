import React, { Component } from 'react';
import { Panel }  from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';


class PostList extends Component {
    componentWillReceiveProps() {
        this.props.fetchPostList();
    }

    renderList() {
        if(this.props.posts) {
            console.log(this.props.posts);
            return this.props.posts.reverse().map((post) => {
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
    }
    render() {
        return (
            <div>
                <div className="postList">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

// Add props to PostList container
function mapStateToProps(state) {
    // console.log(typeof state.posts);
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, actions)(PostList);