import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import './App.css'
import logoImg from './logo.svg'

class App extends Component {

  render() {

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/home'> <img src={logoImg} alt="Homepage" className='App-logo' /> </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className='navColor'>
              <NavItem><Link to='/home'> Home </Link></NavItem>
              <NavItem><Link to='/feed'> Feed </Link></NavItem>
              <NavItem><Link to='/login'> Login </Link></NavItem>
              <NavItem><Link to='/about'> About </Link> </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
          
          {/* <Link to='/home'> Home </Link>
          <Link to='/feed'> Feed </Link>
          <Link to='/login'> Login </Link>
          <Link to='/about'> About </Link> 
          onClick={this.selTopic(this.props.location.pathname)}
          */}
      </div>
    );
  }
}

export default App;
