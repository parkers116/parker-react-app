import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Card, Row, Col, Button, Form } from 'react-bootstrap'
import styled from 'styled-components'
import MessageList from './MessageList'

const MESSAGE_API = 'http://34.68.167.225:3000/api/message'

const Styles = styled.div`
    text-align: center;
    .row {
        margin-top: 25px;
    }

    .form {
        text-align: left;
    }

    .buttonWrapper {
        text-align: center;
    }

    .pop-up-wrapper {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0
        top: 0
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
        animation: pop-up-wrapper-animate 0.3s;
    }

    .pop-up-content {
        border-radius: 15px;
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 300px; /* Could be more or less, depending on screen size */
        animation: pop-up-content-animate 0.3s

        @media screen and (max-width: 500px) {
            width: 50%;
        }
    }

    .pop-up-content p{
        color: black;
        font-weight:bold;
    }

    .close {
        color: #555;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    @keyframes pop-up-wrapper-animate {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes pop-up-content-animate {
        0% {
            transform: translateY(-50%);
        }
        100% {
            transform: translateY(0%);
        }
    }
`

export default class MessageBoard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            numOfMessage: 0,
            messageData: null,
            isSubmit: true,
            isPopUpSubmitWindow: false,
            popUpWindowMsg: '',
        }
    }

    componentDidMount() {
        this.getMsg()
    }

    getMsg() {
        // Fetch backend API to receive messages
        fetch(MESSAGE_API, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                //console.log(`data: ${JSON.stringify(data)}`)
                this.setState({ messageData: data })
            })
            .catch(err => console.error(`${err}`))
    }

    sumbitMsg() {
        //console.log('Press submit button!')
        fetch(MESSAGE_API, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: ReactDOM.findDOMNode(this.refs.formName).value,
                topic: ReactDOM.findDOMNode(this.refs.formTopic).value,
                msg: ReactDOM.findDOMNode(this.refs.formMsg).value,
            }),
        })
            .then(res => {
                //console.log(`${res.json()}`)
                this.setState({ isSubmit: true })
                this.setState({ numOfMessage: this.state.numOfMessage + 1 })
                //console.log(`this.state.numOfMessage: ${this.state.numOfMessage}`)
            })
            .catch(err => {
                console.error(err)
                this.setState({ isSubmit: false })
            })
        this.openPopUpContent()
    }

    openPopUpContent() {
        if (this.state.isSubmit === true) {
            this.setState({ popUpWindowMsg: 'Submit Success!' })
        } else {
            this.setState({ popUpWindowMsg: 'Submit Fail!' })
        }
        this.setState({ isPopUpSubmitWindow: true })
    }

    closePopUpContent() {
        this.setState({ isPopUpSubmitWindow: false })
        if (this.state.isSubmit === true) {
            //reset form
            //...

            //Fetch message again and update the state
            this.getMsg()
        }
    }

    render() {
        const popUpWrapperstyle = { display: this.state.isPopUpSubmitWindow ? 'block' : 'none' }

        return (
            <Styles>
                <div>
                    <Row>
                        <Col>
                            <Card bg="dark" text="white" className="card">
                                <Card.Header>Please leave a message:</Card.Header>
                                <Card.Body>
                                    <Form className="form">
                                        <Form.Group controlId="formName">
                                            <Form.Label>Your Name</Form.Label>
                                            <Form.Control ref="formName" />
                                        </Form.Group>

                                        <Form.Group controlId="formTopic">
                                            <Form.Label>Topic</Form.Label>
                                            <Form.Control ref="formTopic" />
                                        </Form.Group>
                                        <Form.Group controlId="formMsg">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" ref="formMsg" />
                                        </Form.Group>
                                        <div className="buttonWrapper">
                                            <Button variant="light" onClick={() => this.sumbitMsg()}>
                                                Submit
                                            </Button>
                                            <div style={popUpWrapperstyle} className="pop-up-wrapper">
                                                <div className="pop-up-content">
                                                    <span className="close" onClick={() => this.closePopUpContent()}>
                                                        &times;
                                                    </span>
                                                    <p>{this.state.popUpWindowMsg}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <MessageList messageData={this.state.messageData} />
                </div>
            </Styles>
        )
    }
}
