import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <Container fluid={true}>
      
      <Footer/>
      </Container>
    );
  }
}

export default App;
