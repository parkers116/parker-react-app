import React, { Component } from 'react'
import { Card, Row, Col, Button, Form } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;

    .card-header {
        font-size: 18px;
    }

    .card-msg {
        font-size: 16px;
    }
`

export default class MessageItem extends Component {
    render() {
        return (
            <Styles>
                <Card bg="dark" text="white" className="card">
                    <Card.Header className="card-header">{this.props.topic}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p className="card-msg">{this.props.msg}</p>
                            <footer className="blockquote-footer">
                                Sender: {this.props.userName}{' '}
                                <cite title="Source Title">@{this.props.date.toString()}</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Styles>
        )
    }
}
