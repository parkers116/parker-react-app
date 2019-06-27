import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .navbar {
        background: #833ab4; /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #fcb045, #fd1d1d, #833ab4); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            to left,
            #fcb045,
            #fd1d1d,
            #833ab4
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .navbar-brand,
    .navbar-nav .nav-link {
        color: white;

        &:hover {
            color: #bbb;
        }
    }
`

export default class NavigationBar extends Component {
    render() {
        return (
            <Styles>
                <Navbar expand="lg">
                    <Navbar.Brand href="/">Write What You Like</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}
