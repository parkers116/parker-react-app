import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import MessageItem from './MessageItem'

const Styles = styled.div``

// Class MessageList is for map function to seperate
export default class MessageList extends Component {
    render() {
        if (this.props.messageData !== null) {
            var messageList = this.props.messageData.map((listItem, index) => {
                return (
                    <Col>
                        <MessageItem
                            userName={listItem.userName}
                            topic={listItem.topic}
                            msg={listItem.msg}
                            date={listItem.date}
                        />
                    </Col>
                )
            }, this)
        }

        return <Styles>{messageList}</Styles>
    }
}
