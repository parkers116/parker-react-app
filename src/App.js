import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/Home'
import About from './About'
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
                <Footer />
            </Styles>
        )
    }
}

export default App
