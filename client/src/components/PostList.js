import React, { Component } from 'react';
import { Panel }  from 'react-bootstrap';
// import { reduxForm, Field } from 'redux-form';



class PostList extends Component {


    componentWillMount() {
    }

    renderList() {
        return this.props.posts.map((post) => {
            return (
                <Panel key={post._id} className='post'>
                    <div className="innerPost">
                        <div>
                            <img className="postAvatar" src={post.avatar} alt="userAvatar" />
                            <h4 className="postAuthor">{post.author}</h4>
                            <small>{post.date}</small>
                        </div>
                        <div className="postBody">{post.content}</div>
                    </div>
                </Panel>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="postList">
                    {/*{this.renderList()}*/}
                    Posts List
                </div>
            </div>
        )
    }
}

// Add props to PostList container


export default PostList;