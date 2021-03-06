import React, { Component } from 'react'
import styled from 'styled-components'

const Styles = styled.div`
    .info-box {
        background-color: black;
        opacity: 0.85;
        display: table;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 30px;
        color: white;
        padding: 40px;
        text-align: center;

        @media screen and (max-width: 500px) {
            width: 100%;
        }
    }

    .line {
        border-top: 2px solid white;
    }

    .title {
        padding: 20px;
        @media screen and (max-width: 500px) {
            font-size: 28px;
            font-weight: bold;
        }
    }
`

export default class About extends Component {
    render() {
        return (
            <Styles>
                <div className="info-box">
                    <h1 className="title">Education</h1>
                    <p1>2015-2019 | HKUST</p1>
                    <br />
                    <p2>BEng in Computer Engineering</p2>
                    <br />
                    <br />
                    <p1>2012-2015 | HKCC</p1>
                    <br />
                    <p2>Associate in Engineering</p2>
                    <br />
                    <br />
                    <hr className="line" />
                    <h1 className="title">Projects</h1>
                    <h5>Computers:</h5>
                    <p2>Cryptocurrency Trading Suggestion System (FYP) | React Native/MongoDB/Python</p2>
                    <br />
                    <p2>SVG Web Games | HTML/Javascript</p2>
                    <br />
                    <p2>Multimedia Web Applications (MIDI/Audio/Image/Video) | HTML/Javascript</p2>
                    <br />
                    <br />
                    <h5>Electronics:</h5>
                    <p2>Wireless Electronic Vehicle | STM32/C++</p2>
                    <br />
                    <br />
                </div>
                <br />
                <br />
            </Styles>
        )
    }
}
