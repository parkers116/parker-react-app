import React, { Component } from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    background: #444;

    .footer {
        text-align: center;
        color: white;
        padding: 30px;
    }
`

export default class Footer extends Component {
    render() {
        return (
            <Styles>
                <footer className="footer">
                    <p>© 2019 Parker Suen | All rights reserved</p>
                </footer>
            </Styles>
        )
    }
}
