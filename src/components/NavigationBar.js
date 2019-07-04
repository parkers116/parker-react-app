import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
    .navbar-nav {
        color: white;

        &:hover {
            color: #bbb;
        }
    }

    .navlink {
        color: white;
        padding-left: 10px;
        padding-right: 10px;
        text-decoration: none;

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
                    <Link to="/">
                        <Navbar.Brand>Parker Suen</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Link className="navlink" to="/">
                                Home
                            </Link>
                            <Link className="navlink" to="/about">
                                About
                            </Link>
                            <Link className="navlink" to="/contact">
                                Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
        )
    }
}
