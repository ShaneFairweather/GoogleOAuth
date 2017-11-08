import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from '../logo.svg';
// import './App.css';
import '../assets/styles/styles.css';
import Header from './Header';
import UserList from './UserList';
import ControlPanel from './ControlPanel';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
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
                                  <ControlPanel />
                              </Col>
                              {this.props.children}
                              <Col xs={12} md={3}>
                                  <UserList users={this.props.users}/>
                              </Col>
                          </Row>
                      </Grid>
                  </div>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
