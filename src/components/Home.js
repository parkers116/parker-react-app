import React, { Component } from 'react'
import { Row, Col, Badge, Image, Jumbotron, Button } from 'react-bootstrap'
import styled from 'styled-components'
import jumboImage from '../assets/bk.jpg'
import profileImg from '../assets/icon.svg'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'

const Styles = styled.div`
    text-align: center;

    .jumbotron {
        background-image: url(${jumboImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 55%;
        text-align: center;
        color: white;
        padding: 30px;
        opacity: 0.85;
        border-radius: 20px;
    }

    .jumbotron h1 {
        border: 2px solid white;
        overflow: hidden;
        white-space: nowrap;
        animation: show-title 2s;
    }

    .profilePic {
        height: auto;
        width: 30%;
        padding: 20px;
    }

    .banner {
        background-color: black;
        opacity: 0.85;
        display: table;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 20px;
        color: white;
        padding: 20px;
    }

    .line {
        border-top: 2px solid white;
    }

    .social-col {
        display: flex;
        justify-content: space-between;
        width: 30%;
        margin: auto;
    }

    .social-col i {
        font-size: 3em;
    }

    @keyframes show-title {
        from {
            width: 0%;
            text-align: center;
        }
        to {
            width: 100%;
            text-align: center;
        }
    }
`

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Styles>
                    <Jumbotron className="jumbotron-style">
                        <div>
                            ><h1>This is Parker's Home Page!</h1>
                        </div>
                        <p>Leave a message if you like!</p>
                        <hr className="my-5" />
                        <Row>
                            <Col>
                                <Button variant="light" class="" href="/about">
                                    About me
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="light" href="/">
                                    Leave a message
                                </Button>
                            </Col>
                        </Row>
                    </Jumbotron>
                    <Image src={profileImg} className="profilePic" />
                    <div className="banner">
                        <h2>HKUST Student</h2>
                        <p>
                            BEng in Computer Engineering <Badge variant="danger">Fresh Graduate</Badge>
                        </p>
                        <hr className="line" />
                        <p>React / React Native / Javascript / SQL / MongoDB</p>
                        <br />
                        <div className="social-col">
                            <a href="https://www.linkedin.com/in/parkersuen/">
                                <i class="fab fa-linkedin" />
                            </a>
                            <a href="https://github.com/parkers116">
                                <i class="fab fa-github-square" />
                            </a>
                        </div>
                    </div>
                    <br />
                    <br />
                </Styles>
            </React.Fragment>
        )
    }
}
