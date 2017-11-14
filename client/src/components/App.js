import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../assets/styles/styles.css';
import '../../node_modules/bootstrap-social/bootstrap-social.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import UserList from './UserList';
import ControlPanel from './ControlPanel';
import Account from './Account';
import Signin from './Signin';
import Blog from './Blog';
import { Grid, Row, Col } from 'react-bootstrap';



class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchUserList();
        this.props.fetchPostList();
        console.log(this.props.users);
        console.log(this.props.posts);
    }

  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <Header />
                  <div id="main" className="container">
                      <Grid>
                          <Row>
                              <Col xs={12} md={3}>
                                  <ControlPanel user={this.props.user} />
                              </Col>
                              <Col xs={12} md={6}>
                                  <Route
                                      exact
                                      path="/"
                                      render={(props) => (
                                          <Home
                                            {...props}
                                            user={this.props.user}
                                            posts={this.props.posts}
                                          />)}
                                  />
                                  <Route
                                      exact
                                      path="/account"
                                      render={(props) => (
                                          <Account
                                              {...props}
                                              user={this.props.user}
                                          />)}
                                  />
                                  <Route exact path="/blog" component={Blog} />
                                  <Route exact path="/signin" component={Signin} />
                              </Col>
                              <Col xs={12} md={3}>
                                  <UserList users={this.props.users} />
                              </Col>
                          </Row>
                      </Grid>
                  </div>
                  <Footer />
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        user: state.auth,
        users: state.users,
        posts: state.posts
    }
}


export default connect(mapStateToProps, actions)(App);
// export default App;