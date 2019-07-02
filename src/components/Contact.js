import React, { Component } from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    .social-col {
        display: flex;
        justify-content: space-between;
        width: 30%;
        margin: auto;
    }
    .social-col i {
        font-size: 5em;
    }
`

export default class Contact extends Component {
    render() {
        return (
            <Styles>
                <div className="social-col">
                    <a href="mailto:parkers116@gmail.com">
                        <i class="fas fa-envelope-square" />{' '}
                    </a>
                    <a href="https://www.linkedin.com/in/parkersuen/">
                        <i class="fab fa-linkedin" />
                    </a>
                    <a href="https://github.com/parkers116">
                        <i class="fab fa-github-square" />
                    </a>
                </div>
            </Styles>
        )
    }
}
