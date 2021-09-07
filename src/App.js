import './App.css';
import RestauranstList from './components/RestauranstList'
import RestaurantCreate from './components/RestaurantCreate'
import Home from './components/Home'
import RestaurantUpdate from './components/RestaurantUpdate'

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Restro</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link href="/list"><Link to="/list">List</Link></Nav.Link>
                <Nav.Link href="/create"><Link to="/create">Create</Link></Nav.Link>
                <Nav.Link href="/update"><Link to="/update">Update</Link></Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
        <Route path="/list">
          <RestauranstList />
        </Route>
        <Route path="/create">
          <RestaurantCreate />
        </Route>
        <Route path="/update">
          <RestaurantUpdate />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      </Router>


      
    </div>
  );
}

export default App;
