import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotMatch from './components/NotMatch'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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

    .transit-effect-enter {
        opacity: 0;
        transform: translateY(10px);
    }
    .transit-effect-enter-active {
        opacity: 1;
        transform: translateY(0%);
        transition: all 500ms;
    }
    .transit-effect-exit {
        opacity: 1;
        transform: translateY(0%);
    }
    .transit-effect-exit-active {
        opacity: 0;
        transform: translateY(-10px);
        transition: all 500ms;
    }

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
`

class App extends Component {
    render() {
        return (
            <Styles>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <NavigationBar />
                    <Container>
                        <Route
                            render={({ location }) => (
                                <TransitionGroup>
                                    <CSSTransition key={location.key} timeout={300} classNames="transit-effect">
                                        <Switch location={location}>
                                            <Route exact path="/" component={Home} />
                                            <Route exact path="/about" component={About} />
                                            <Route exact path="/contact" component={Contact} />
                                            <Route component={NotMatch} />
                                        </Switch>
                                    </CSSTransition>
                                </TransitionGroup>
                            )}
                        />
                    </Container>
                    <Footer />
                </BrowserRouter>
            </Styles>
        )
    }
}

export default App
