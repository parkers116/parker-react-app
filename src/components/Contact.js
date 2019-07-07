import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const Styles = styled.div`
    .social-col {
        width: 40%;
        margin: auto;
        padding-top: 15%;
        padding-bottom: 35%;
        text-align: center;
    }
    .social-col i {
        font-size: 6em;
    }

    .social-col p {
        font-size: 1.5em;
    }
`

export default class Contact extends Component {
    render() {
        return (
            <Styles>
                <div className="social-col">
                    <Row>
                        <Col>
                            <a href="mailto:parkers116@gmail.com">
                                <i class="fas fa-envelope-square" />
                                <br />
                                <p>Email</p>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/parkersuen/">
                                <i class="fab fa-linkedin" />
                                <br />
                                <p>Linkedin</p>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://github.com/parkers116">
                                <i class="fab fa-github-square" />
                                <br />
                                <p>Github</p>
                            </a>
                        </Col>
                    </Row>
                </div>
            </Styles>
        )
    }
}
