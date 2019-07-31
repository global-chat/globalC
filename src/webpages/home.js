import React, { Component, Fragment } from 'react';
import Navigation from './nav';
import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import Card from '../components/card';
import Row from 'react-bootstrap/Row';
import '../css/home.css';
import '../css/cover.css';


export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navigation props={this.props} logout={this.props.logoutUser} userName={this.props.userName} userToken={this.props.userToken}></Navigation>
        <main role="main" class="inner cover">
          <h1 class="cover-heading">Cover your page.</h1>
          <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p class="lead">
            <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
          </p>
        </main>
        {/* <Layout>
          <Jumbotron />
          <Row>
            <Card />
            <Card />
            <Card />
          </Row>
        </Layout> */}
      </Fragment>

    );
  }
}