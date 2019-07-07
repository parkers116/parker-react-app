import React, { Component } from 'react'
import { Row, Col, Badge, Image, Jumbotron, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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
        max-width: 520px;
        margin: auto;
        border-right: 1px solid white;
        overflow: hidden;
        white-space: nowrap;
        animation: show-title 5s steps(40), typing-cursor 1s infinite;
        padding: 5px;
    }

    .title {
        @media screen and (max-width: 500px) {
            font-size: 17px;
            font-weight: bold;
            max-width: 250px;
        }
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
        width: 30%;
        margin: auto;
        text-align: center;
    }

    .social-col i {
        font-size: 3em;
    }

    @keyframes show-title {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }

    @keyframes typing-cursor {
        50% {
            border-color: transparent;
        }
    }

    .button {
        position: relative;
        overflow: hidden;
    }

    .button:hover span:nth-child(1) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4);
        animation: button-animate1 2s linear infinite;
    }

    .button:hover span:nth-child(2) {
        position: absolute;
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(to top, #fcb045, #fd1d1d, #833ab4);
        animation: button-animate2 2s linear infinite;
    }

    .button:hover span:nth-child(3) {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
        animation: button-animate3 2s linear infinite;
    }

    .button:hover span:nth-child(4) {
        position: absolute;
        top: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(to bottom, #fcb045, #fd1d1d, #833ab4);
        animation: button-animate4 2s linear infinite;
    }

    @keyframes button-animate1 {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }

    @keyframes button-animate2 {
        0% {
            transform: translateY(0%);
        }
        50% {
            transform: translateY(100%);
        }
        50.1% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0%);
        }
    }

    @keyframes button-animate3 {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    @keyframes button-animate4 {
        0% {
            transform: translateY(0%);
        }
        50% {
            transform: translateY(-100%);
        }
        50.1% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0%);
        }
    }
`

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Styles>
                    <Jumbotron>
                        <Row>
                            <Col>
                                <h1 className="title">This is Parker's Home Page!</h1>
                            </Col>
                        </Row>
                        <p>Leave a message if you like!</p>
                        <hr className="my-5" />
                        <Row>
                            <Col>
                                <Link to="/about">
                                    <Button variant="light" className="button">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        About me
                                    </Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/">
                                    <Button variant="light" className="button">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        Leave a message
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Jumbotron>

                    <Image src={profileImg} className="profilePic" />
                    <div className="banner">
                        <h2 className="title">HKUST Student</h2>
                        <p>
                            BEng in Computer Engineering <Badge variant="danger">Fresh Graduate</Badge>
                        </p>
                        <hr className="line" />
                        <p>React / React Native / Javascript / SQL / MongoDB</p>
                        <br />
                        <div className="social-col">
                            <Row>
                                <Col>
                                    <a href="mailto:parkers116@gmail.com">
                                        <i class="fas fa-envelope-square" />{' '}
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://www.linkedin.com/in/parkersuen/">
                                        <i class="fab fa-linkedin" />
                                    </a>
                                </Col>
                                <Col>
                                    <a href="https://github.com/parkers116">
                                        <i class="fab fa-github-square" />
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <br />
                    <br />
                </Styles>
            </React.Fragment>
        )
    }
}
