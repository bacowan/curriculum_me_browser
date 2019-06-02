import React from 'react';
import { Navbar } from 'react-bootstrap';
import HelloWorld from './HelloWorld.jsx';

class MainNavbar extends React.Component {
    render() { return (
        <Navbar bg="dark" variant="dark" fixed="top" sticky="top">
            <Navbar.Brand>Curriculum.me</Navbar.Brand>
        </Navbar>
    ) }
}
export default MainNavbar;