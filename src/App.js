import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotMatch from './components/NotMatch'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import styled from 'styled-components'

const Styles = styled.div`
    background: #833ab4; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #fcb045, #fd1d1d, #833ab4); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to left,
        #fcb045,
        #fd1d1d,
        #833ab4
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: block;
    animation: show-content 1s;
    @keyframes show-content {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes show-title {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
    .test {
        max-width: 200px;
        margin: auto;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        animation: show-title 2s;
    }
`

class App extends Component {
    render() {
        return (
            <Styles>
                <NavigationBar />
                <Container>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/contact" component={Contact} />
                            <Route component={NotMatch} />
                        </Switch>
                    </Router>
                </Container>
                <div className="test">
                    <h1>TESTING</h1>
                </div>
                <Footer />
            </Styles>
        )
    }
}

export default App
